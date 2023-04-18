/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "idx/layout/TitlePane", "./_HoverHelpMixin" ], function(declare, TitlePane, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.TitlePane
	 * @class Provides a widget that contains a content box with a title. This widget can be opened or collapsed.
	 *        <p>
	 *        This class extends the <code>idx.layout.TitlePane</code> class to provide hover help for the widget.
	 *        </p>
	 * @public
	 */
	return declare("ecm.widget.TitlePane", [ TitlePane, _HoverHelpMixin ], {
	/** @lends ecm.widget.TitlePane.prototype */
	});
});
