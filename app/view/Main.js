Ext.define('VoucherGuideForSilvers.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {
		tabBarPosition: 'bottom',
		
		items: [{
			xtype: 'homePanel'
		}, {
			title: '긴급통화',
			iconCls: 'phone1'
		}, {
			title: '상담통화',
			iconCls: 'phone1'
		}, {
			xtype: 'settingsPanel'
		}, {
			xtype: 'newsListPanel',
			hidden: true
		}]
	}
});
