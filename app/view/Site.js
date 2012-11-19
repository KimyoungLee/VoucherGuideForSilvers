Ext.define('VoucherGuideForSilvers.view.Site', {
	extend: 'Ext.Panel',
	xtype: 'relativeSitePanel',

	requires: ['Ext.TitleBar'],
	
	config: {
		title: '관련 사이트 안내',
		
		items: [{
			xtype: 'titlebar',
			title: '관련 사이트 안내'
		}]
	}
});