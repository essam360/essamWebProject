define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_AttachMixin",
  "dijit/_WidgetsInTemplateMixin",
  "dojo/text!/templates/InternalCorrespondenceForm.html",
  "ecm/widget/dialog/BaseDialog",
  "dijit/_Widget",
  "dijit/_TemplatedMixin",
  "ecm/widget/process/_ProcessorMixin",
  "ecm/LoggerMixin",
  "dojo/i18n!./nls/MoamalatT_ICN",



], function (
  declare,
  _WidgetBase,
  _AttachMixin,
  _WidgetsInTemplateMixin,
  _templateString,
  BaseDialog,
  _Widget,
  _TemplatedMixin,
  _ProcessorMixin,
  LoggerMixin,
  MoamalatT_ICN


) {
  return declare("app.InternalCorrespondenceForm", [BaseDialog, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _ProcessorMixin, LoggerMixin], {
    contentString: _templateString,
    _MoamalatT_ICN:MoamalatT_ICN,
    widgetsInTemplate: true,
    constructor: function (args) {
      declare.safeMixin(this, args);
      
    },
    postCreate: function () {
      this.inherited(arguments);
      this.addButton("حفظ", "save", false, false);
      
    },
    save: function () {

    }


  });
});