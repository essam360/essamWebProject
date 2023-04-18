define([
    "dojo/_base/declare",
    "dojo/text!/templates/globalMenu.html",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/dom-style",
    "dojo/mouse",
    "dojo/on",
    "dijit/_AttachMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Button",
    "dojo/text!/templates/Main.html",
    "dojo/i18n!./nls/MoamalatT_ICN",
    "app/InternalCorrespondenceForm",
    "app/adminPage",
    "app/inboxPage",
    "dijit/form/FilteringSelect",
    "dijit/form/Button",
], function (
    declare,
    globalMenuHTML,
    baseFx,
    lang,
    domStyle,
    mouse,
    on,
    _AttachMixin,
    _WidgetsInTemplateMixin,
    _WidgetBase,
    _TemplatedMixin,
    BorderContainer,
    ContentPane,
    Button,
    template,
    MoamalatT_ICN,
    InternalCorrespondenceForm,
    adminPage,
    inboxPage,
) {
    return declare("MainWidget", [_WidgetBase, _AttachMixin], {
        templateString: template,
        _globalMenuHTML: globalMenuHTML,
        widgetsInTemplate: true,
        globalMenu: null,
        constructor: function (args) {
            declare.safeMixin(this, args);


        },
        postCreate: function () {
            this.inherited(arguments);




        },
        startup: function () {
            lang.setObject("InternalCorrespondenceForm", function () {

                new InternalCorrespondenceForm().show();

            });

            lang.setObject("adminPage", function () {

                var admin = new adminPage();

            });

            lang.setObject("inboxPage", function () {

                var admin = new inboxPage();

            });




            var mainBorderContainer = new BorderContainer({
                style: "width: 100%; height: 100%;"
            });

            var globalMenu = new ContentPane({
                region: "top",
                style: "height:85px",
                id: "globalMenu",
                content: this._globalMenuHTML
            });
            mainBorderContainer.addChild(globalMenu);



            var features = new ContentPane({
                region: "leading",
                style: "width:35px",
                id: "featuresMenu"
            });
            mainBorderContainer.addChild(features);

            var content = new ContentPane({
                region: "center",
                id: 'contentid',
                style: "height:90%",
            });

            mainBorderContainer.addChild(content);

            // put the top level widget into the document, and then call startup()
            mainBorderContainer.placeAt(document.body);
            mainBorderContainer.startup();
            this.loadActions();
            this.loadFeatures();
            this.updateTime();
        },
        loadActions: function () {
            const Actions = [
                {
                    actionsFunction: "InternalCorrespondenceForm",
                    menuId: "globalMenu-items",
                    buttonText: MoamalatT_ICN.RIGHT_CREATE_INTERNAL
                },
                {
                    actionsFunction: "InternalCorrespondenceForm",
                    menuId: "globalMenu-items",
                    buttonText: MoamalatT_ICN.RIGHT_CREATE_INTERNAL
                }, {
                    actionsFunction: "InternalCorrespondenceForm",
                    menuId: "globalMenu-items",
                    buttonText: MoamalatT_ICN.RIGHT_CREATE_INTERNAL
                }
            ];

            Actions.map((element) => {

                var _Button = new Button({
                    label: element.buttonText,
                    onClick: lang.getObject(element.actionsFunction)
                });
                document.getElementById(element.menuId).appendChild(_Button.domNode);
            });
        },
        loadFeatures: function () {
            const Features = [
                {
                    FeatureFunction: "inboxPage",
                    menuId: "featuresMenu",
                    buttonText: "inboxPage",
                    iconURL: "assets/images/inbox.svg",
                    firstload: true
                },
                {
                    FeatureFunction: "adminPage",
                    menuId: "featuresMenu",
                    buttonText: "adminPage",
                    iconURL: "assets/images/admin.png"
                }
            ];

            Features.map((element) => {
                var featureImg = document.createElement('img');
                featureImg.src = element.iconURL
                featureImg.width = "30";
                featureImg.onclick = lang.getObject(element.FeatureFunction);
                document.getElementById(element.menuId).appendChild(featureImg);
            });
            Features.map((element) => {
                if (element.firstload === true) {
                    callblefun = lang.getObject(element.FeatureFunction);
                    if (callblefun) {
                        callblefun();
                    }
                }
            });

        },
        updateTime: function () {

            setInterval(() => {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;

                document.getElementById('time-date').innerHTML = dateTime;
            }, 1000);


        }
    });
});