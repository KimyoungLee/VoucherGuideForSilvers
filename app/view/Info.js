Ext.define('VoucherGuideForSilvers.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infoListPanel',
	
	requires: ['Ext.TitleBar'],
	
	config: {
		title: '서비스안내',
		
		items: [{
			xtype: 'titlebar',
			title: '서비스안내'
		}]
	}
});