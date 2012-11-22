Ext.define('VoucherGuideForSilvers.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infoListPanel',
	
	requires: [
	   		'Ext.TitleBar',
			'Ext.dataview.List',
			'Ext.data.Store',
	],
	
	config: {
		title: '서비스안내',
		
		layout: {
			type: 'card'
		},
		
		items: [
			{
				xtype: 'titlebar',
				id: 'infoTitlebar',
				title: '서비스안내',
				docked: 'top',
				items: [{
					xtype: 'button',
					hidden: true,
					id: 'infoBackBtn',
					ui: 'back',
					text: 'Back'
				}]
			}, {
				xtype: 'list',
				id: 'infoList',
				store: 'infoStore',
				flex : 1,

				emptyText: '등록된 내용이 없습니다.',

				itemTpl: '{title}'
			}, {
				xtype: 'panel',
				id: 'infoListView',
				styleHtmlContent:true,
				padding: '12px',
				tpl: [
					'<div style="text-align:center;font-weight:bold;font-size:15px;">{title}</div><br />',
					'<div>{content}</div>'
				],
				scrollable: true
			}
		]
	}
});