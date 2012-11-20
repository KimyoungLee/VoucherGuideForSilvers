Ext.define('VoucherGuideForSilvers.view.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsPanel',
	
	requires: ['Ext.TitleBar', 'Ext.field.Slider', 'Ext.field.Select'],
	
	config: {
		title: '설정',
		iconCls: 'settings',
		
		layout: {
			type: 'card',
		},
		
		items: [{
			xtype: 'titlebar',
			title: '설정',
			docked: 'top'
		},
		{
			xtype: 'panel',
			id: 'configFormPanel',
			flex: 1,
			items: [
			{
				xtype: 'sliderfield',
				name: 'fontSize',
				label: '글자 크기'
			},
			//TODO: 이거 텍스트입력창으로교체해야됨.
			{
				xtype: 'selectfield',
				name: 'address',
				id: 'addressSelect',
				label: '주소',
				//store: 'sidoStore',
				//displayField: 'sido',
				//valueField: 'sido',
				placeHolder: '주소 입력'
			}
			]
		}
		]
	}
});