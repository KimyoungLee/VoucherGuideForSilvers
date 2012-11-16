Ext.define('VoucherGuideForSilvers.view.News', {
	extend: 'Ext.Panel',
	xtype: 'newsListPanel',

	requires: ['Ext.TitleBar', 'Ext.dataview.List'],
	
	config: {
		title: '종합뉴스',
		
		items: [{
			xtype: 'titlebar',
			title: '종합뉴스'
		}, {
			xtype: 'list',
			id: 'newsList',
			flex: 1
//			, plugins: [{
//				xclass: 'Ext.plugin.List.Paging',
//				loadMoreText: '더보기',
//				autoPaging: true
//			}]
		}]
	}
});