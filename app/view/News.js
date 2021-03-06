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

		layout : {
			type : 'card'
		},
		
		items: [{
			xtype: 'titlebar',
			title: '종합뉴스',
			docked: 'top',
			id: 'newsTitlebar',
			items: [{
				xtype: 'button',
				hidden: true,
				id: 'newsBackBtn',
				ui: 'back',
				text: 'Back'
			}]
		}, {
			xtype: 'list',
			id: 'newsList',
			store: 'newsStore',
			layout:'fit',
			flex : 1,
			loadingText: '불러오는 중...',
			emptyText: '등록된 내용이 없습니다.',
			
			plugins:[{
				xclass: 'Ext.plugin.ListPaging',
				loadMoreText : '더 보기',
				allowDeselect: false,
				autoPaging : true
			}],

			itemTpl: '<div id="newsListContent"><span>{title}</span></div>'
		}, {
			xtype: 'panel',
			id: 'newsListView',
			
			scrollable: true,

			items: [{
				xtype: 'panel',
				id: 'newsListViewContent',
				tpl: [
					'<div id="newsContent">',
					'<h3><span>{title}</span></h3>',
					'<div class="newsContent">{content}</div>',
					'</div>'
				]
			}]
		}]
	}
});