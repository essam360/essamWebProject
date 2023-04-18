define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/aspect",
    "dijit/_WidgetBase",
    "ecm/widget/layout/_LaunchBarPane",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dijit/layout/AccordionContainer",
    "dijit/layout/AccordionPane",
    "dijit/registry",
    "dojo/dom-construct",
    "dojo/text!/templates/inboxPage.html",
    "dijit/_Widget",
    "dijit/_Templated",
    "dijit/form/Button",
    "dijit/_TemplatedMixin",
    "dijit/_AttachMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_Widget",
    "ecm/widget/process/_ProcessorMixin",
    "ecm/LoggerMixin",
    "dojo/i18n!./nls/MoamalatT_ICN",
    "app/nls/MoamalatT_ICN.js",
    "dojox/grid/EnhancedGrid",
    "dojo/data/ItemFileWriteStore",
    "dojo/domReady!"
],
    function (declare, lang, aspect, _WidgetBase, _LaunchBarPane,
        BorderContainer, TabContainer, ContentPane, AccordionContainer,
        AccordionPane,
        registry, domConstruct, template, Button, _TemplatedMixin,
        _AttachMixin, _WidgetsInTemplateMixin, _Widget, _ProcessorMixin,
        LoggerMixin, MoamalatT_ICN, MoamalatT_ICN1, EnhancedGrid, ItemFileWriteStore
    ) {


        return declare("app.inboxPage", [_LaunchBarPane, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _ProcessorMixin, LoggerMixin], {

            _MoamalatT_ICN: null,
            templateString: template,
            widgetsInTemplate: true,
            constructor: function (args) {
                declare.safeMixin(this, args);
                this._MoamalatT_ICN = dojo.i18n.cache["app/nls/MoamalatT_ICN/" + dojoConfig.locale];

            },

            postCreate: function () {
                //this.logEntry("postCreate");
                this.inherited(arguments);
                this.loadContent();

            },

            setParams: function (params) {
                this.loadTabContainer();

                his.loadContent();
                this.logExit("setParams");
            },

            loadContent: function () {


                if (!this.isLoaded) {
                    this.templateString;
                    var contentid = registry.byId("contentid");
                    contentid.set('content', this);


                    var inboxDataGrid = registry.byId("inboxDataGrid");
                    console.log(inboxDataGrid);
                    var layout = [{
                        name: 'م',
                        field: 'rowID',
                        width: "2%"
                    }, {
                        name: 'اسم المستخدم',
                        field: "userId",
                        width: "15%"

                    }, {
                        name: 'الهويه',
                        field: 'id',
                        width: "15%"
                    }, {
                        name: 'العنوان',
                        field: 'title',
                        width: "15%"
                    }, {
                        name: 'اكمل ام لا',
                        field: 'completed',
                        width: "15%"
                    }
                    ];
                    inboxDataGrid.set('structure', layout);
                    inboxDataGrid.selection.setMode('single');
                    inboxDataGrid.startup();
                    


                    fetch('fakeJson/data.json')
                        .then(response => response.json())
                        .then((json) => {
                            var storeForGrid = this.returnStoreForGrid(json);

                            inboxDataGrid.set('store', storeForGrid);
                            inboxDataGrid._refresh();
                        });


                        

                    /**
                     * Add custom load logic here. The LaunchBarContainer widget will call this method when the user
                     * clicks on the launch button associated with this feature.
                     */
                }

            },//essam
            returnStoreForGrid: function (data_list) {


                var data = {
                    identifier: 'rowID',
                    items: []
                };

                for (var i = 0; i < data_list.length; i++) {
                    data.items.push
                        (dojo.mixin({ rowID: i + 1 }, data_list[i]));
                }
                var store = new dojo.data.ItemFileWriteStore({
                    data: data
                });
                return (store);
            },


            loadTabContainer: function () {

            },

            /**
             * Resets the content of this pane.
             */
            reset: function () {
                this.logEntry("reset");

                /**
                 * This is an option method that allows you to force the LaunchBarContainer to reset when the user
                 * clicks on the launch button associated with this feature.
                 */
                this.needReset = false;

                this.logExit("reset");
            }
        });
    });