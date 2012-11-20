Ext.define('VoucherGuideForSilvers.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',

	config: {
		title: '홈',
		iconCls: 'home',
		
		styleHtmlContent: true,
		scrollable: true,
		
		layout: {
			type: 'vbox',
			align: 'middle',
		},

		items: [{
			xtype: 'button',
			id: 'infoListBtn',
			text: '서비스안내',
			width: '200px'
		}, {
			xtype: 'button',
			id: 'newsListBtn',
			text: '종합뉴스',
			width: '200px'
		}, {
			xtype: 'button',
			id: 'searchBtn',
			text: '서비스 제공기관 검색',
			width: '200px'
		}, {
			xtype: 'button',
			id: 'relativeSiteBtn',
			text: '관련 사이트 안내',
			width: '200px'
		}, {
			xtype: 'button',
			id: 'settingsBtn',
			text: '설정',
			width: '200px'
		}]
	}
});