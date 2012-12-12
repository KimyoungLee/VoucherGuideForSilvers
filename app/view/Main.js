Ext.define('VoucherGuideForSilvers.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	id: 'mainPanel',

	config: {
		tabBarPosition: 'bottom',

		items: [{
			xtype: 'homePanel'
		}, {
			title: '긴급통화',
			iconCls: 'phone1',
			id:'emergencyCallBtn'
		}, {
			xtype: 'searchPanel'
		}, {
			title: '상담통화',
			iconCls: 'phone1',
			id: 'counselCallBtn'
		}, {
			xtype: 'settingsPanel'
		}, {
			xtype: 'newsListPanel',
			hidden: true
		}, {
			xtype: 'infoListPanel',
			hidden: true
		}, {
			xtype: 'relativeSitePanel',
			hidden: true
		}]
	}
});
