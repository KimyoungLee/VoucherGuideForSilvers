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
			style: 'font-weight: bold',
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
			flex : 1,
			loadingText: '불러오는 중...',
			emptyText: '등록된 내용이 없습니다.',

			plugins:[{
				xclass: 'Ext.plugin.ListPaging',
				loadMoreText : '더 보기',
				allowDeselect: false,
				autoPaging : true
			}],

			itemTpl: '<div style="border-bottom:dashed 2px #C9C8C8;">{title}</div>'
		}, {
			xtype: 'panel',
			id: 'newsListView',
			padding: '12px',
			tpl: [
				'<div style="text-align:center;font-weight:bold;font-size:15px;">{title}</div><br />',
				'<div">{content}</div>'
			],
			styleHtmlContent: true,
			scrollable: true
		}]
	}
});