Ext.define('VoucherGuideForSilvers.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',
	id: 'homeTabPanel',

	config: {
		title: '홈',
		iconCls: 'home',
		cls: 'mainPanel',

//		scrollable: true,

		layout: {
			type: 'vbox',
			align: 'middle'
		},

		items: [{
			xtype: 'button',
			id: 'infoListBtn',
			baseCls: 'main_button1',
			text: ''
		}, {
			xtype: 'button',
			id: 'newsListBtn',
			baseCls: 'main_button2',
			text: ''
		}, {
			xtype: 'button',
			id: 'searchBtn',
			baseCls: 'main_button3',
			text: ''
		}, {
			xtype: 'button',
			id: 'relativeSiteBtn',
			baseCls: 'main_button4',
			text: ''
		}, {
			xtype: 'button',
			hidden: true,
			id: 'settingsBtn',
			text: '설정',
			width: '200px'
		}]
	}
});