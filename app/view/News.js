Ext.define('VoucherGuideForSilvers.view.News', {
	extend: 'Ext.Panel',
	xtype: 'newsListPanel',

	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.data.proxy.JsonP',
		'Ext.data.Store',
		'Ext.plugin.ListPaging'
	],
	
	config: {
		title: '종합뉴스',
		scrollable: true,
		
		layout : {
			type : "vbox",
		},
		
		items: [{
			xtype: 'titlebar',
			title: '종합뉴스',
			docked: 'top'
		}, {
			xtype: 'list',
			id: 'newsList',
			store: 'newsStore',
			flex : 1,

			emptyText: '등록된 내용이 없습니다.',
			
			plugins:[{
				xclass: 'Ext.plugin.ListPaging',
				loadMoreText : '더 보기',
				autoPaging : true
			}],

			itemTpl: '{title}'
		}]
	}
});