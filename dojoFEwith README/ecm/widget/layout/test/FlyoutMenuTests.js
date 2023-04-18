/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", //
"dojo/dom-construct", //
"dijit/_Widget", //
"dijit/layout/BorderContainer", //
"dijit/layout/ContentPane", //
"dijit/form/Button", //
"../FlyoutMenuContainer" ], function(declare, domConstruct, _Widget, BorderContainer, ContentPane, Button, FlyoutMenuContainer) {

	return declare("ecm.widget.layout.test.FlyoutMenuTests", [ _Widget ], {
		/** @lends ecm.widget.layout.test.FlyoutMenuTests */

		buildRendering: function() {
			this.inherited(arguments);
			var self = this;
			this.topButton = new Button({
				label: "Click For First FlyOut Menu",
				onClick: function() {
					self.onLinkClicked();
				}
			});

			this.secondButton = new Button({
				label: "Click For a second  FlyOut Menu",
				onClick: function() {
					self.onSecondLinkClicked();
				}
			});

			this.domNode.appendChild(this.topButton.domNode);
			domConstruct.create("br", {}, this.domNode);
			this.domNode.appendChild(this.secondButton.domNode);
			this.flyoutContainer = new FlyoutMenuContainer({
				positionNode: this.topButton.domNode,
				id: this.id + "_flyoutContainer",
				showOnInit: true
			});

			this.firstMenu = new ContentPane({
				style: {
					width: "500px",
					height: "100%"
				},
				parseOnLoad: false,
				resizeable: true
			});

			this.firstMenu.borderContainer = new BorderContainer({});
			this.firstMenu.set("content", this.firstMenu.borderContainer);

			this.child1 = new ContentPane({
				region: "center",
				style: {
					border: "1px solid black"
				}
			});

			this.connect(this.child1, "resize", function() {
				console.log("child flyoutmenu is resize");
			});
			this.firstMenu.borderContainer.addChild(this.child1);
			this.child1.set("content", new Button({
				label: 'Click me',
				onClick: function() {
					alert("hello");
				}
			}));
			this.firstMenu.borderContainer.addChild(new ContentPane({
				region: "left",
				style: {
					width: "200px",
					border: "1px solid red"
				}
			}));

		},

		onLinkClicked: function() {
			this.flyoutContainer.initWithDijit(this.firstMenu);
			//this.flyoutContainer.show();
		},

		onSecondLinkClicked: function() {
			//this.flyoutContainer.show();
			this.secondeMenu = new ContentPane({
				style: {
					width: "500px",
					height: "100%"
				},
				parseOnLoad: false
			});

			this.secondeMenu.set("content", new Button({
				label: 'Click me',
				onClick: function() {
					alert("hello");
				}
			}));

			this.flyoutContainer.addDijit(this.secondeMenu);
		}
	});
});
