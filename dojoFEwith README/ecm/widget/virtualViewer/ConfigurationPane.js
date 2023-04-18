define([
        "dojo/_base/declare",
        "dijit/registry",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "ecm/widget/ValidationTextBox",
        "ecm/widget/admin/PluginConfigurationPane",
        "dojo/text!./templates/ConfigurationPane.html",
        "dojo/i18n",
        "dojo/i18n!./nls/configurationpane"
],
function(declare, registry, _TemplatedMixin, _WidgetsInTemplateMixin, ValidationTextBox, PluginConfigurationPane, template){
	
	return declare("viewonePluginDojo.ConfigurationPane", [PluginConfigurationPane, _TemplatedMixin, _WidgetsInTemplateMixin], {
		//template string can be a literal built here as a js string.
		templateString: template,
		widgetsInTemplate: true, //if template just empty table then this could be false
		configTitleTxt: "$_unset_$",
		addParamLabelTxt: "$_unset_$",
		addClientParamLabelTxt: "$_unset_$",
		deleteParameterTxt: "$_unset_$",
		
		//setup an array config array apply values: 0=client and server, 1=server, 2=client
		root_configParameters: [ 
			{target: 1, name: 'logfile', description: 'Server Log File', type: 'text'},
			{target: 1, name: 'mode', description: '', type: 'select', hidden: 'true', values: ['development', 'production']},
			{target: 1, name: 'versionUrl', description: '', type: 'text', hidden: 'true'},		
			{target: 1, name: 'jiserverLocation', description: '', type: 'text', hidden: 'true'},
			{target: 1, name: 'resourceLocation', description: '', type: 'text', hidden: 'true'},
			{target: 1, name: 'loggerLocation', description: '', type: 'text', hidden: 'true'},
			{target: 1, name: 'resourcePath', description: '', type: 'text', hidden: 'true'},
			{target: 1, name: 'workingPath', description: '', type: 'text', hidden: 'true'},
			{target: 1, name: 'streamer/docURLPrototype', description: '', type: 'text'},
			{target: 1, name: 'redaction/docURLPrototype', description: '', type: 'text'},
			{target: 1, name: 'forwardClientHeadersList', description: 'Headers for proxy client to forward', type: 'text'},
			{target: 1, name: 'documentExpiryTime', description: '', type: 'time'},
			{target: 1, name: 'poolInitialEntryCount', description: '', type: 'int'},
			{target: 1, name: 'poolMaxEntryCount', description: '', type: 'int'},
			{target: 1, name: 'cacheRoot', description: '', type: 'text'},
			{target: 1, name: 'cacheEmptyOnRestart', description: '', type: 'boolean'},
			{target: 1, name: 'cacheCheckTime', description: '', type: 'time'},
			{target: 1, name: 'cacheSizeLimit', description: '', type: 'int'},
			{target: 1, name: 'cacheAgeLimit', description: '', type: 'time'},
			{target: 1, name: 'openDocumentWaitTime', description: '', type: 'time'},
			{target: 1, name: 'internalHost', description: '', type: 'text'},
			{target: 1, name: 'externalHost', description: '', type: 'text'},
			//{target: 1, name: 'remapHostSearch', description: '', type: 'text'},
			//{target: 1, name: 'remapHostReplace', description: '', type: 'text'},
			{target: 0, name: 'trace', description: '', type: 'boolean'},
			{target: 0, name: 'traceAnnotation', description: '', type: 'boolean'},
			{target: 0, name: 'traceBurn', description: '', type: 'boolean'},
			{target: 0, name: 'traceCache', description: '', type: 'boolean'},
			{target: 0, name: 'traceException', description: '', type: 'boolean'},
			{target: 0, name: 'traceFilter', description: '', type: 'boolean'},
			{target: 0, name: 'traceHTML', description: '', type: 'boolean'},
			{target: 0, name: 'traceJavaScript', description: '', type: 'boolean'},
			{target: 0, name: 'traceNet', description: '', type: 'boolean'},
			{target: 0, name: 'tracePrint', description: '', type: 'boolean'},
			{target: 0, name: 'tracePro', description: '', type: 'boolean'},
			{target: 0, name: 'traceRender', description: '', type: 'boolean'},
			{target: 0, name: 'traceSearch', description: '', type: 'boolean'},
			{target: 0, name: 'traceSource', description: '', type: 'boolean'},
			{target: 0, name: 'traceStreamer', description: '', type: 'boolean'},
			{target: 0, name: 'traceOffice', description: '', type: 'boolean'},
		],
		
		configParameters: new Array(),
		
		pluginServiceStore: null,
		viewerServiceStore: null,
		
		//store the current state of the configuration
		currentConfig: new Object(),
		
		daejaMessages: {
			loc1814: 'ViewOne Platform Configuration',
			loc1815: 'Add Parameter',
			loc1835: 'ViewOne Client Configuration',
			loc1836: 'delete parameter'
		},
		
		_buildConfig: function(prefix, config)
		{
			var newConfig = new Object();
			newConfig['id'] = prefix+config.name; //use this for storage
			newConfig['name'] = config.name; //use this for selection
			newConfig['type'] = config.type;
			newConfig['label'] = config.name;
			newConfig['description'] = config.description;
			if(config.hidden)
				newConfig['hidden'] = config.hidden;
			
			return newConfig;
		},
	
		//if I don't use template then I need to declare a buildRendering function
		//would need some additional properties to hold the configuration parameter names 
		constructor: function() 
		{
			var storeData = 
			{
				identifier: 'name',
				items: []
			};
			var viewerStoreData = 
			{
				identifier: 'name',
				items: []
			};
			
			this.pluginServiceStore = new dojo.data.ItemFileWriteStore({data: storeData});
			this.viewerServiceStore = new dojo.data.ItemFileWriteStore({data: viewerStoreData});
			
			var tempConfig = null;
			var targetId = 0;
			var visible = true;
			//Enumerate and update the configuration
			for(var i=0; i<this.root_configParameters.length; i++)
			{
				targetId = this.root_configParameters[i].target;
				if(this.root_configParameters[i].hidden && this.root_configParameters[i].hidden == 'true')
					visible = false;
				else
					visible = true;
				
				if(targetId == 0 || targetId == 1)
				{
					tempConfig = this._buildConfig('s_', this.root_configParameters[i]);
					if(visible)
						this.pluginServiceStore.newItem(tempConfig);
					this.configParameters.push(tempConfig);
				}
				
				if(targetId == 0 || targetId == 2)
				{
					tempConfig = this._buildConfig('c_', this.root_configParameters[i]);
					if(visible)
						this.viewerServiceStore.newItem(tempConfig);
					this.configParameters.push(tempConfig);
				}
				
			}
		},
	
		//executes before load
	//	postCreate: function() 
	//	{
	//		console.debug('postCreate:');
	//		this.inherited(arguments);	
	//	},
		
	//	buildRendering: function() 
	//	{
	//		console.debug('buildRendering: ');
	//		this.inherited(arguments);
	//	},
	//	
		postMixInProperties: function() 
		{
			this.inherited(arguments);	
			console.debug('postMixInProperties: loading i18n for '+this.lang);
			
			try
			{
				this.daejaMessages = dojo.i18n.getLocalization("viewonePluginDojo", "configurationpane", this.lang);
			}
			catch (error)
			{
				console.debug('Internationalisation error occurred.');
			}
			
			
			if(this.configTitleTxt == "$_unset_$")
			{
				this.configTitleTxt = this.daejaMessages.loc1814;
			}
			if(this.addParamLabelTxt == "$_unset_$")
			{
				this.addParamLabelTxt = this.daejaMessages.loc1815;
			}
			if(this.addClientParamLabelTxt == "$_unset_$")
			{
				this.addClientParamLabelTxt = this.daejaMessages.loc1835;
			}
			if(this.deleteParameterTxt == "$_unset_$")
			{
				this.deleteParameterTxt = this.daejaMessages.loc1836;
			}
		},
		
		//template, if it exists has been loaded, now add in values - configuration set immediately prior to this method call from
		//ecm.widget.admin.TabPugin._displayPluginConfig.
		load: function(callback)
		{
			console.debug('load:  ');//this.configurationString available - + '; callback='+callback undefined
			
			this.daejaConfigTitle.innerHTML = this.configTitleTxt;
			this.daejaAddParamLabel.innerHTML = this.addParamLabelTxt;
			this.daejaViewerConfigTitle.innerHTML = this.addClientParamLabelTxt;
			this.daejaAddClientParamLabel.innerHTML = this.addParamLabelTxt;
			
			//locate select object from template for the addition of new parameters to configuration
			var configWidget = registry.byId('configPropertySelect');
			var clientConfigWidget = registry.byId('viewoneConfigPropertySelect');
			//console.debug('configSelect:  '+configWidget);
			configWidget.attr('store', this.pluginServiceStore);
			clientConfigWidget.attr('store', this.viewerServiceStore);
			
			//build interface using it
			//populate interface using it
			//use interface to manipulate list and redraw interface as required. 
			//use fixed list to add parameters
			//used fixed list minus items configured to populate select used to add new parameters.
			if(this.configurationString){
				console.debug('loaded configuration:  '+this.configurationString);
				var jsonConfig = eval('(' + this.configurationString + ')'); //TODO - this should use JSON or dijit parser
				config = jsonConfig.configuration;
			
				var target = null;
				var paramName = null;
				for(var i=config.length-1; i>-1; i--)
				{
					//console.debug('loaded '+config[i].name + '=' + config[i].value);
					//dynamically instantiate fields that are defined.
					target = config[i].name.substring(0,2);
					paramName = config[i].name;
					if(target == 'c_' || target == 's_')
						paramName = config[i].name.substring(2);
					
					this._addPropertyField(target, paramName, config[i].value);
				}
			}		
		},
		
		_addClientConfigProperty: function(fieldId)
		{
			this._addConfigProperty(fieldId, 'viewoneConfigPropertySelect', 'c_');
		},
		
		_addServerConfigProperty: function(fieldId)
		{
			this._addConfigProperty(fieldId, 'configPropertySelect', 's_');
		},
		
		_addConfigProperty: function(fieldId, selectObjId, target)
		{
			var propertySelect = registry.byId(selectObjId);
			var propertyName = propertySelect.get('value');
			var propertyId = target + propertyName;
			console.debug('addConfigProperty: '+propertyName);
			
			if(this.hasOwnProperty(propertyId))//this.currentConfig[propertyName])
			{
				console.debug('Current parameter present - setting focus. ');
				if(this[propertyId] && this[propertyId].focus())
					this[propertyId].focus();			
			}
			else
			{
				this._addPropertyField(target, propertyName);
			}
		},
		
		//this can take a config from the constructor or an data item from the 
		_createPropertyField: function(target, configParameter, configValue)
		{
			console.debug('Adding field to ' +target+ ':  '+configParameter.name+'='+configValue);
			
			var tableBody = null;
			var paramChangeMethod = null;
			if(target == 's_')
			{
				tableBody = this.daejaPluginConfigTable;// dojo.query('table#daejaPluginConfigTable'); //this.domNoderegistry.byId('v1ConfigPane');
			}	
			else
			{
				tableBody = this.daejaViewerConfigTable;
			}
				
			
			//find the table and add new row.
			if(tableBody == null) //not available during initialisation as not yet added to DOM
			{
				console.debug('table not found'); 
			}
			else if(this[configParameter.id])
			{
				this[configParameter.id].set('value', configValue);
			}
			else
			{
			   //console.debug('table root: '+tableBody);
			   var tableRow = dojo.doc.createElement('tr');
			   tableRow.id = 'paramRow_'+configParameter.id;
			   var tableCell = dojo.doc.createElement('td');
			   var closeCell = dojo.doc.createElement('td');
			   var closeSpan = dojo.doc.createElement('span');
			   closeCell.appendChild(closeSpan);
			   closeCell.title = this.deleteParameterTxt;
			   tableCell.innerHTML = configParameter.label;	
			   closeSpan.id = 'delete_'+configParameter.id;
			   dojo.addClass(tableCell, 'propertyRowLabel');
			   
			   var tableCell2 = dojo.doc.createElement('td');
			   dojo.addClass(tableCell2, 'propertyRowValue');
			   dojo.addClass(closeCell, 'propertyRowValue');
			   
			   dojo.addClass(closeSpan, 'dijitTabContent');
			   dojo.addClass(closeSpan, 'dijitInline');
			   dojo.addClass(closeSpan, 'dijitTabCloseButton');
			   dojo.addClass(closeSpan, 'dijitTabCloseIcon');
			   
			   //create an array of listener references. 
			   configParameter['handlerRefs'] = [];
			   
			   //console.debug('created table cells');
			   var configField = null;
			   if('boolean' == configParameter.type)
			   {
				   
				   configField = new dijit.form.CheckBox({
					   value: configParameter.name         //combo box can only have displayed value so use display name for value here also
				   }, dojo.doc.createElement('input'));
				   
				   configField.set('value', 'true');
				      
				   if(configValue == true || configValue == 'true' || configValue == 'on')
				   {
				      configField.set('checked', true);   
				   }
				   else
				   {
					  configField.set('checked', false);   
				   }
				   
				   configParameter.handlerRefs.push(dojo.connect(configField, 'onClick', this, '_onParamChange'));
			   }
			   else
			   {
			      configField = new dijit.form.ValidationTextBox({
				      value: configValue
			      }, dojo.doc.createElement('input'));
			      configParameter.handlerRefs.push(dojo.connect(configField, 'onKeyUp', this, '_onParamChange'));			   
			   }
			   
			   //add listener references for deletion. 
			   configParameter.handlerRefs.push(dojo.connect(closeSpan, 'onclick', this, '_deleteParam'));
			   configParameter.handlerRefs.push(dojo.connect(closeSpan, 'onmouseover', this, '_mouseOver'));
			   configParameter.handlerRefs.push(dojo.connect(closeSpan, 'onmouseout', this, '_mouseOver'));
			   configParameter['parameterRow'] = tableRow;
			   
			   //add here and not in constructor as they are transferred as arrays in constructor. 
			   configField.name = configParameter.name;
			   configField.type = configParameter.type;
			   configField.label = configParameter.label;
			   configField['title'] = configParameter.description;
			   
			   //console.debug('created configField');
			   tableCell2.appendChild(configField.domNode);	
			   
			   //console.debug('added filed to cell');
			   tableRow.appendChild(tableCell);
			   tableRow.appendChild(tableCell2);
			   tableRow.appendChild(closeCell);
			   //console.debug('added cells to row');
			   
			   dojo.place(tableRow, tableBody, 2);
			   this[configParameter.id] = configField;
			   this.currentConfig[configParameter.id] = configParameter;
				
			   configField.focus();
			}
		},
		
		_addPropertyField: function(target, fieldName, fieldValue)
		{
			console.debug('Request for new property field:  '+fieldName);
			//identify client or server parameter
			var config = null; 
			if('c_' == target)
			{
				config = this.viewerServiceStore._getItemByIdentity(fieldName);
			}
			else
			{
				config = this.pluginServiceStore._getItemByIdentity(fieldName);
				target = 's_';
			}
	
			if(config == null)
			{
				console.debug('created config for '+fieldName);
				config = new Object();
				config['id'] = target + fieldName;
				config['name'] = fieldName;
				config['type'] = 'text';
				config['label'] = fieldName;
			}
			this._createPropertyField(target, config, fieldValue);
		},
		
		_onParamChange: function(event) 
		{
			console.debug('parameter changed ');
			
			var configArray = [];		
			var configString = null;		
			var tempArray = new Array();
			var testConfig = null;
			
			//add known parameter items in order first 
			for(var i=0; i<this.configParameters.length; i++)
			{		
				testConfig = this.configParameters[i];
				if(this.currentConfig.hasOwnProperty(testConfig.id))
				{
					if(this[testConfig.id])
					{
						configString = new Object();  
					    configString['name'] = testConfig.id;
					    configString['value'] = this[testConfig.id].get('value');
					    tempArray[testConfig.id] = configString;	
					}
					else
					{
						console.debug('Unregistered configuration:  '+testConfig.id);
					}
				}
			}
			
			//check for unlisted parameters 
			for(var paramName in this.currentConfig)
			{
				if(paramName)
				{
					if(tempArray.hasOwnProperty(paramName))
					{
						continue;
					}
					else
					{
						testConfig = this.currentConfig[paramName]; 
						//console.debug('Testing for field:  '+paramName +": "+testConfig.id);
						if(dojo.isObject(testConfig) && this.hasOwnProperty(paramName))
						{
							configString = new Object();  
							configString['name'] = testConfig.id;
							configString['value'] = this[testConfig.id].get('value');
							tempArray[testConfig.name] = configString;	
						}
						else
						{
						   console.debug('No config for '+paramName);
					      continue;
						}						  
					}
				}
			   
			}
			
			//now create the final config object
			for(var paramName in tempArray)
			{
			   if(paramName == null)
				   continue;
			   if(tempArray.hasOwnProperty(paramName))
			      configArray.push(tempArray[paramName]);
			}
				
			var configJson = {
					"configuration" : configArray
			};
			
			this.configurationString = JSON.stringify(configJson);
			console.debug('Updated configuration:  '+this.configurationString);
			this.onSaveNeeded(true);
		},
		
		_deleteParam: function(event)
		{
			console.debug('delete parameter');
			if(event && event.target && event.target.id)
			{
			   var propertyName = event.target.id;
			   console.debug('delete requested for '+propertyName);
			   if(propertyName)
			   {
			      dojo.isString(propertyName)
			      {
			    	  var underIdx = propertyName.indexOf('_');
			    	  if(underIdx != -1 && propertyName.length > underIdx)
		    		  {
			    	     propertyName = propertyName.substr(underIdx +1);
			    	     if(this.currentConfig.hasOwnProperty(propertyName))
			    	     {
			    	    	//disconnect listeners, data and display items
			    	    	this._disconnectHandlers(this.currentConfig[propertyName]);
			    	    	dojo.destroy(this.currentConfig[propertyName].parameterRow);
			    	    	delete this.currentConfig[propertyName];
			    	        delete this[propertyName];
			    	        
			    	        this._onParamChange();
			    	     }
		    		  }
			      }
			   }
			}
			
		},
		
		_disconnectHandlers: function(configParameter)
		{
			dojo.forEach(configParameter.handlerRefs, function(handler){
				dojo.disconnect(handler);
			});
		},
		
		_mouseOver: function(event)
		{
			//console.debug('mouse over parameter');
			if(event && event.target)
			{
				dojo.toggleClass(event.target, 'dijitTabCloseButtonHover');
			}
		},
		
		validate: function() 
		{
			console.debug('validate')
			return true;
		},
		
		uninitialize: function()
		{
			console.debug('uninitialize');
			this.inherited(arguments);
			for(var configParameter in this.currentConfig)
			{
				this._disconnectHandlers(this.currentConfig[configParameter]);
			}
		},
		
		destroyRecursively: function()
		{
			console.debug('destroyRecursively');
			this.inherited(arguments);
		},
		
		destroy:  function()
		{
			console.debug('destroy');
			this.inherited(arguments);
		}
	
	});

});