/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
//dojo.provide("ecm.ecm");
dojo.require("ecm.Messages");
dojo.require("ecm.BackgroundIframe");
dojo.require("ecm.dojoOverride");

/* This JavaScript causes the ecm JavaScripts to be included that are needed for launching the various Content Navigator windows.  In the production build, this file is
   replaced with a dojo profile build with all ecm JavaScripts combined. */

dojo.require("ecm.widget.DesktopPane");
dojo.require("ecm.widget.process.LaunchProcessorLayout");
dojo.require("ecm.widget.process.StepProcessorLayout");
dojo.require("ecm.widget.process.StepRoutingLayout");
dojo.require("ecm.widget.process.MilestonesLayout");
dojo.require("ecm.widget.process.TrackerLayout");
dojo.require("ecm.widget.viewer.ContentViewer");
dojo.require("ecm.widget.viewer.ContentViewerRelogin");
dojo.require("ecm.widget.viewer.IframeDocViewer");
dojo.require("ecm.widget.viewer.FilenetViewer");
dojo.require("ecm.widget.viewer.AppletViewer");
dojo.require("ecm.widget.viewer.AjaxViewer");
dojo.require("ecm.widget.viewer.BrowserViewer");
dojo.require("ecm.widget.viewer.PDFDocViewer");
dojo.require("ecm.widget.viewer.HTMLDocViewer");
dojo.require("ecm.widget.viewer.BoxEmbedLinkViewer");
dojo.require("ecm.widget.viewer.BoxNoteLauncher");
dojo.require("ecm.widget.virtualViewer.ViewoneHTMLViewer");
dojo.require("ecm.widget.process.LaunchPatternLayout");
dojo.require("ecm.widget.process.StepPatternLayout");

// Include features that are always used by the desktop.  Other features are dynamically loaded, saving time and space
dojo.require("ecm.widget.layout.LaunchBarContainer");
dojo.require("ecm.widget.layout.FlyoutMenuContainer");
dojo.require("ecm.widget.layout.MainLayout");
dojo.require("ecm.widget.layout.NavigatorMainLayout");
dojo.require("ecm.widget.layout.ClassicNavigatorLayout");
dojo.require("ecm.widget.layout.HomePane");
dojo.require("ecm.widget.layout.SearchPane");
dojo.require("ecm.widget.layout.BrowsePane");
dojo.require("ecm.widget.layout.FavoritesPane");
dojo.require("ecm.widget.layout.WorkPane");
dojo.require("ecm.widget.layout.TeamspacePane");
dojo.require("ecm.widget.layout.SearchFlyoutPane");
dojo.require("ecm.widget.layout.BrowseFlyoutPane");
dojo.require("ecm.widget.layout.WorkFlyoutPane");
dojo.require("ecm.widget.layout.TeamspaceFlyoutPane");
dojo.require("ecm.widget.layout.ManageTeamspacesPane");
dojo.require("ecm.widget.search.UnifiedSearchBuilder");
dojo.require("ecm.widget.layout.EntryTemplatesFlyoutPane");
dojo.require("ecm.widget.layout.ManageEntryTemplatesPane");
dojo.require("ecm.widget.layout.ActionLayout");

dojo.require("ecm.widget.entryTemplateBuilder.WorkflowPane");
dojo.require("ecm.widget.entryTemplateBuilder.PropertiesPane");
dojo.require("ecm.widget.entryTemplateBuilder.OptionsPane");
dojo.require("ecm.widget.entryTemplateBuilder.DestinationPane");
dojo.require("ecm.widget.entryTemplateBuilder.DocumentSettingsPane");
dojo.require("ecm.widget.entryTemplateBuilder.SecurityPane");

//adding taskmanager files here so they will be included since they are not being called yet in ICN
dojo.require("ecm.widget.taskManager.AsyncTaskSchedulerPane");
dojo.require("ecm.widget.taskManager.BaseTaskInformationPane");
dojo.require("ecm.widget.taskManager.BaseTaskCreationDialog");
dojo.require("ecm.widget.layout.AsyncTaskPane");
dojo.require("ecm.widget.listView.decorators.AsyncTaskViewDecorator");
dojo.require("ecm.model.AsyncTask");
dojo.require("ecm.model.AsyncTaskInstance");
dojo.require("ecm.model.AsyncTaskResultSet");

// These additional files are included as they are common and frequently used by optionally loaded components and plugins
dojo.require("idx.has");
dojo.require("idx.border.BorderDesign");
dojo.require("idx.border.BorderLayout");
dojo.require("idx.form.CheckBox");
dojo.require("idx.form.CheckBoxList");
dojo.require("idx.form.CheckBoxSelect");
dojo.require("idx.form.ComboBox");
dojo.require("idx.form.ComboLink");
dojo.require("idx.form.CurrencyTextBox");
dojo.require("idx.form.DateTextBox");
dojo.require("idx.form.DateTimeTextBox");
dojo.require("idx.form.DropDownLink");
dojo.require("idx.form.DropDownSelect");
dojo.require("idx.form.FilteringSelect");
dojo.require("idx.form.HorizontalSlider");
dojo.require("idx.form.Link");
dojo.require("idx.form.NumberSpinner");
dojo.require("idx.form.NumberTextBox");
dojo.require("idx.form.RadioButtonSet");
dojo.require("idx.form.Select");
dojo.require("idx.form.Textarea");
dojo.require("idx.form.TextBox");
dojo.require("idx.form.TimeTextBox");
dojo.require("idx.form.TriStateCheckBox");
dojo.require("idx.form.VerticalSlider");
dojo.require("idx.data.JsonStore");
dojo.require("idx.layout.HeaderPane");
dojo.require("idx.widget.Menu");
dojo.require("idx.bidi.widget.HoverHelpTooltip");
dojo.require("idx.bidi.form.Link");
dojo.require("idx.bidi.form.CheckBoxSelect");
dojo.require("ecm.widget.ItemPropertiesPaneExtension");
dojo.require("ecm.widget.admin.PluginConfigurationPane");
