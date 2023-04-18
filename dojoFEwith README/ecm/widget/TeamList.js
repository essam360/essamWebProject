/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/aspect",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/select/Row",
	"gridx/modules/Focus",
	"gridx/modules/CellWidget",
	"gridx/modules/Filter",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/FilterTextBox",
	"dojo/text!./templates/TeamList.html"
],

function(declare, //
lang, //
domConstruct, //
has, //
domStyle, //
domGeom, //
aspect, //
ContentPane, //
_TemplatedMixin, //
MemoryStore, //
Grid, //
Cache, //
Row, //
Focus, //
CellWidget, //
Filter, //
LoggerMixin, //
MessagesMixin, //
FilterTextBox, //
template) {

	/**
	 * @name ecm.widget.TeamList
	 * @class Provides a widget that displays a list of the users and groups that are assigned to a teamspace.
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin, ecm.LoggerMixin, ecm.MessagesMixin
	 */
	var TeamList = declare("ecm.widget.TeamList", [
		ContentPane,
		_TemplatedMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.TeamList.prototype */

		templateString: template,

		/**
		 * Handle to the {@link ecm.model.Teamspace} object containing the team list.
		 * 
		 * @since 2.0.2
		 */
		teamspace: null,

		/**
		 * postCreate - default behavior
		 * 
		 * @see dijit._Widget.postCreate
		 */
		postCreate: function() {
			this.inherited(arguments);
			this.textDir = has("text-direction");

			this._filter = new FilterTextBox({
				"class": "filter",
				"placeholder": this.messages.process_filter_label,
				"id": this.id + "_filter",
				"style": "float: none"
			});
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filterLabel = domConstruct.create("label", {
				"style": "display: none",
				"innerHTML": this.messages.process_filter_label,
				"for": this._filter.id
			});
			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
		},

		/**
		 * Creates the default grid layout for the teamlist.
		 * 
		 * @since 2.0.3
		 * @private
		 */
		_getGridLayout: function() {
			if (this.constructor.customLayout) {
				this.layout = lang.clone(this.constructor.customLayout);
				this._hitchViewDecorators(this.layout);
			} else {
				this.layout = [
					{
						id: 'id',
						field: 'id',
						name: '',
						headerAriaLabel: this.messages.workspace_icon,
						width: '37px',
						decorator: lang.hitch(this, "_teamIconDecorator")
					},
					{
						id: 'name',
						field: 'name',
						name: '',
						headerAriaLabel: this.messages.workspace_title,
						decorator: lang.hitch(this, "_teamEntryDecorator")
					}
				];
			}

			return this.layout;
		},

		/**
		 * Hitches all cell decorators to this TeamList object.
		 * 
		 * @param view
		 *            Structure array containing column definitions to modify.
		 * @since 2.0.3
		 * @private
		 */
		_hitchViewDecorators: function(view) {
			if (view) {
				for ( var i in view) {
					var cell = view[i];
					if (cell && cell.decorator) {
						if (lang.isFunction(cell.decorator)) {
							cell.decorator = lang.hitch(this, cell.decorator);
						}
					}
					if (cell && cell.setCellValue) {
						if (lang.isFunction(cell.setCellValue)) {
							cell.setCellValue = lang.hitch(this, cell.setCellValue);
						}
					}
				}
			}
		},

		/**
		 * Provides the default decorator for the team icon column.
		 * 
		 * @since 2.0.3
		 * @private
		 */
		_teamIconDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var blankImg = require.toUrl("dojo/resources/blank.gif");
			var styleClass = "entryGroup";
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.User)) {
				styleClass = "entryUser";
			}

			return [
				'<img role="img" width="32" height="32" class="',
				styleClass,
				'" alt="',
				item.name,
				'" title="',
				item.name,
				'" src="',
				blankImg,
				'"/>'
			].join('');
		},

		/**
		 * Handles the display of a team entry in the grid.
		 * 
		 * @since 2.0.3
		 * @private
		 */
		_teamEntryDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var name = item.name;

			var displayName = item.displayName;
			if (!displayName || displayName.length == 0)
				displayName = name;
			var entryName = !this.textDir ? displayName : this.enforceTextDirWithUcc(null, displayName);

			if (displayName && this.isEmailAddress(displayName)) {
				var shortName = !this.textDir ? item.shortName : this.enforceTextDirWithUcc(null, item.shortName);
				entryName = '<a href="mailto:"' + displayName + '"/>' + shortName;
			}

			var entryHtml = [
				'<div class="entryContent">',
				'<div class="entryName">',
				entryName,
				'</div>',
				'<div class="entryRoles">',
				this.getRoleNames(item),
				'</div></div>'
			].join('');

			return entryHtml;
		},

		/**
		 * Renders the team list.
		 * 
		 * @param {Object}
		 *            List of {@link ecm.model.User} and/or {@link ecm.model.UserGroup} objects.
		 */
		setTeam: function(team) {
			this.logEntry("setTeam");
			this._prevFilter = "";
			if (this.grid)
				this.grid.destroy();
			this.store = null;

			if (team) {
				team.sort(function(a, b) {
					return a.displayName.toUpperCase().localeCompare(b.displayName.toUpperCase());
				});
				this.store = new MemoryStore({
					data: team
				});

				this.grid = new Grid({
					cacheClass: Cache,
					structure: this._getGridLayout(),
					store: this.store,
					modules: [
						Focus,
						Filter,
						CellWidget
					]
				});
				var div = domConstruct.create("div");
				domConstruct.place(this._filterLabel, div);
				domConstruct.place(this._filter.domNode, div, "last");
				domConstruct.place(this.grid.domNode, div, "last");
				this.set("content", div);
				this.grid.startup();
				this.resize();
			}
			this.logExit("setTeam");
		},

		/**
		 * @private
		 */
		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this.grid.model.filter(this._filterCheckerFunction);
				this.grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item;
			return rowValue.displayName.toLowerCase().indexOf(this._prevFilter.toLowerCase()) > -1;
		},

		/**
		 * Gets the roles associated with the given team member.
		 * 
		 * @param teamEntry
		 *            An instance of {@link ecm.model.User} or {@link ecm.model.UserGroup}
		 * @return Returns a string containing all the roles assigned to this team member.
		 */
		getRoleNames: function(teamEntry) {
			var roleNames = "";

			if (teamEntry) {
				var roles = teamEntry.roles;
				if (roles) {
					for (var i = 0; i < roles.length; i++) {
						if (i > 0)
							roleNames += ", ";
						roleNames += !this.textDir ? roles[i].name : this.enforceTextDirWithUcc(null, roles[i].name);
					}
				}
			}

			return roleNames;
		},

		/**
		 * Tests if the string is an email address.
		 * 
		 * @return Returns true if the string is an email address and false if it is not.
		 */
		isEmailAddress: function(addressStr) {
			var regexStr = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
			var regex = new RegExp(regexStr);
			return regex.test(addressStr);
		},

		_nop: null
	});

	/**
	 * This static method allows the <code>TeamList</code> to display to be controlled by providing a new layout for
	 * the list.
	 * 
	 * @param layout
	 *            The list layout structure.
	 * @memberof ecm.widget.TeamList
	 */
	TeamList.setLayout = function(layout) {
		TeamList.customLayout = layout;
	};

	return TeamList;
});
