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
		scrollable: true,

		layout: {
			align: 'middle',
		},
		
		items: [{
			xtype: 'titlebar',
			title: '설정',
			docked: 'top'
		}, {
			xtype: 'panel',
			id: 'configFormPanel',
			margin: 20,
			items: [{
				xtype:'fieldset', 
				title:'환경설정',
				instructions: '적당한 크기를 선택하세요.',
				items: [{
					xtype: 'sliderfield',
					name: 'fontSize',
					label: '글자 크기',
					id: 'fontSize',
					store: 'settingsStore',
					listeners: {
						painted: function(textfield, eOpts){
							if(localStorage.fontSize)
								Ext.getCmp('fontSize').setValue(localStorage.fontSize);
							else 
								Ext.getCmp('fontSize').setValue(25);
						}
					},
					minValue: 20,
					maxValue: 32,
					increment: 1
				}]
			}, {
				xtype:'fieldset', 
				title:'전화번호',
				instructions: '번호를 입력하시면 하단 탭바에서 전화 바로 걸기가 동작합니다.',
				items: [{
					xtype: 'textfield',
					id: 'counselPhoneNumber',
					label: '상담 전화번호',
					listeners: {
						painted: function(textfield, eOpts){
							if(localStorage.counselPhoneNumber)
								Ext.getCmp('counselPhoneNumber').setValue(localStorage.counselPhoneNumber);
						}
					},
					maxLength: 20,
					placeHolder: '전화번호 입력'
				}, {
					xtype: 'textfield',
					id: 'emergencyPhoneNumber',
					label: '응급 전화번호',
					listeners: {
						painted: function(textfield, eOpts) {
							var emergencyPhoneNumber = localStorage.emergencyPhoneNumber;
							if(!localStorage.emergencyPhoneNumber) emergencyPhoneNumber = '119';
							Ext.getCmp('emergencyPhoneNumber').setValue(emergencyPhoneNumber);
						}
					},
					maxLength: 20,
					placeHolder: '전화번호 입력'
				}]
			}]
		}]
	}
});