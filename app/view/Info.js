Ext.define('VoucherGuideForSilvers.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infoListPanel',
	
	requires: ['Ext.TitleBar'],
	
	config: {
		title: '서비스안내',
		
		layout: {
			type: 'card'
		},
		
		items: [{
			xtype: 'titlebar',
			title: '서비스안내',
			docked: 'top'
		}, {
			xtype: 'list',
			id: 'infoList',
			flex: 1,
			store: 'infoStore',
			itemTpl: '{title}'
		}]
	}
});