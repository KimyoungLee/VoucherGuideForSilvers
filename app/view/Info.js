Ext.define('VoucherGuideForSilvers.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infoListPanel',
	
	requires: ['Ext.TitleBar'],
	
	config: {
		title: '안내',
		
		items: [{
			xtype: 'titlebar',
			title: '안내'
		}]
	}
});