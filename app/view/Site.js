Ext.define('VoucherGuideForSilvers.view.Site', {
	extend: 'Ext.Panel',
	xtype: 'relativeSitePanel',

	requires: ['Ext.TitleBar'],
	
	config: {
		title: '관련 사이트 안내',

		layout: {
			type: 'card'
		},
		items: [{
			xtype: 'titlebar',
			title: '관련 사이트 안내',
			docked: 'top'
		}, {
			xtype: 'list',
			id: 'siteList',
			store: 'siteStore',
			flex : 1,

			emptyText: '등록된 내용이 없습니다.',

			itemTpl: '<div id="siteContent"><span>{info}</span><br /><span><a href="{url}" target="_blank">{url}</a></span></div>'
		}]
	}
});