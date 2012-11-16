Ext.define('VoucherGuideForSilvers.view.Search', {
	extend: 'Ext.Panel',
	xtype: 'searchPanel',

	requires: ['Ext.TitleBar'],
	
	config: {
		title: '서비스 제공기관 검색',
		
		items: [{
			xtype: 'titlebar',
			title: '서비스 제공기관 검색'
		}]
	}
});