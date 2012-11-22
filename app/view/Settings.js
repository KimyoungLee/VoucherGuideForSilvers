Ext.define('VoucherGuideForSilvers.view.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsPanel',
	
	requires: [
		'Ext.TitleBar',
		'Ext.field.Slider',
		'Ext.field.Select',
		'Ext.field.Number'
	],
	
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
				label: '글자 크기',
				id: 'fontSize',
				value: 15,
	            minValue: 6,
	            maxValue: 72
			},
//			//TODO: 이거 텍스트입력창으로교체해야됨.
//			{
//				xtype: 'selectfield',
//				//name: 'address',
//				//id: 'addressSelect',
//				label: '주소',
//				//store: 'sidoStore',
//				//displayField: 'sido',
//				//valueField: 'sido',
//				placeHolder: '주소 입력'
//			},
			{
                xtype: 'textfield',
                name: 'name',
                label: '주소',
                placeHolder: '주소 입력',
                autoCapitalize: false
            },
			//상담 전화번호
			{
                xtype: 'numberfield',
                name: 'number',
                label: '상담 전화번호',
                placeHolder: '전화번호 입력'
            },
            //응급 전화번호	
            {
                xtype: 'numberfield',
                name: 'number',
                label: '응급 전화번호',
                placeHolder: '전화번호 입력'
            },
            {
            	xtype: 'button',
            	text: '완료',
            	id: 'settingConfirmationBtn',
            	ui: 'confirm',
            	//iconCls: 'settings',
            	iconMask: true,
            	margin: '15px'
            }
			]
		}
		]
	}
});