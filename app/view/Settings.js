Ext.define('VoucherGuideForSilvers.view.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsPanel',
	
	requires: [
		'Ext.TitleBar',
		'Ext.field.Slider',
		'Ext.field.Select',
		'Ext.data.Store',
		'Ext.field.Number',
		'Ext.form.FieldSet'
	],
	
	config: {
		title: '설정',
		iconCls: 'settings',
		styleHtmlContent: true,
		scrollable: true,

		layout: {
			type: 'vbox',
			align: 'middle',
		},
		
		items: [{
			xtype: 'titlebar',
			title: '설정',
			docked: 'top'
		},
		
		{
			xtype: 'panel',
			id: 'configFormPanel',
			layout: 'fit',
			//flex: 1,
			items: [
	        {
	        	xtype:'fieldset', 
	        	title:'환경설정',
	        	instructions: '적당한 크기를 선택하세요.',
	        	items: [
	              			{
	            				xtype: 'sliderfield',
	            				name: 'fontSize',
	            				label: '글자 크기',
	            				id: 'fontSize',
	            				cls:'fontSizeCls',
	            				store: 'settingsStore',
	            				listeners: {
    	                        	painted: function(textfield, eOpts){
    	                        		if(localStorage.fontSize)
    	                        			Ext.getCmp('fontSize').setValue(localStorage.fontSize);
    	                        		else 
    	                        			Ext.getCmp('fontSize').setValue(16);
//    	                        		var itemName = Ext.getStore('settingsStore').data.getAt(0).data.textFontSize;
//    	                        		Ext.getCmp('fontSize').setValue(itemName);
    	                        	}
    	                        },
	            	            minValue: 6,
	            	            maxValue: 32,
	            	            increment: 1
	            			}
	            			]
	            		},
	            		{
	            			xtype:'fieldset', 
	        	        	title:'전화번호',
	        	        	instructions: '번호를 입력하시면 하단 탭바에서 전화 바로 걸기가 동작합니다.',
	        	        	items: [
	    	            			//상담 전화번호
	    	            			{
	    	            				xtype: 'textfield',
//	    	        	                            xtype: 'numberfield',
	    	                            id: 'counselPhoneNumber',
	    	                            name: 'counselPhoneNumber',
	    	                            store: 'settingsStore',
	    	                            label: '상담 전화번호',
		    	                        listeners: {
		    	                        	painted: function(textfield, eOpts){
		    	                        		if(localStorage.counselPhoneNumber)
		    	                        			Ext.getCmp('counselPhoneNumber').setValue(localStorage.counselPhoneNumber);
		    	                        		
//		    	                        		var itemName = Ext.getStore('settingsStore').data.getAt(0).data.counselPhoneNumber;
//		    	                        		Ext.getCmp('counselPhoneNumber').setValue(itemName);
		    	                        	}
		    	                        },
	    	                            maxLength: 15,
	    	                            placeHolder: '전화번호 입력'
	    	                        },
	    	                        //응급 전화번호	
	    	                        {
	    	                        	xtype: 'textfield',
//	    	        	                          xtype: 'numberfield',
	    	                            id: 'emergencyPhoneNumber',
	    	                            store: 'settingsStore',
	    	                            label: '응급 전화번호',
	    	                            listeners: {
		    	                        	painted: function(textfield, eOpts){
		    	                        		if(localStorage.emergencyPhoneNumber)
		    	                        			Ext.getCmp('emergencyPhoneNumber').setValue(localStorage.emergencyPhoneNumber);
//		    	                        		var itemName = Ext.getStore('settingsStore').data.getAt(0).data.emergencyPhoneNumber;
//		    	                        		Ext.getCmp('emergencyPhoneNumber').setValue(itemName);
		    	                        	}
		    	                        },
	    	                            maxLength: 15,
	    	                            placeHolder: '전화번호 입력'
	    	                        }
	    	            			]
	            		},
	            		{
	            			xtype: 'panel',
	            			layout: {
	            				type: 'hbox',
	            				align: 'middle',
	            				pack: 'center'
	            			},
	            			
	            			items:[
									{
										xtype: 'button',
										text: '완료',
										id: 'settingConfirmationBtn',
										ui: 'confirm',
										width: 200,
										height: 40
									}
        			       ]
	            		}
                ]
	        }]
	}
});