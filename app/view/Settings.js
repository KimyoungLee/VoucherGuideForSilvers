Ext.define('VoucherGuideForSilvers.view.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsPanel',
	
	requires: ['Ext.TitleBar'],
	
	config: {
		title: '설정',
		iconCls: 'settings',
		
		layout: {
			type: 'card',
		},
		
		items: [{
			xtype: 'titlebar',
			title: '설정'
		}]
	}
});