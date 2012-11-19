Ext.define('VoucherGuideForSilvers.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',

	config: {
		title: '홈',
		iconCls: 'home',
		
		styleHtmlContent: true,
		scrollable: true,

		items: [{
			xtype: 'button',
			id: 'infoListBtn',
			text: '서비스안내'
		}, {
			xtype: 'button',
			id: 'newsListBtn',
			text: '종합뉴스'
		}, {
			xtype: 'button',
			id: 'searchBtn',
			text: '서비스 제공기관 검색'
		}, {
			xtype: 'button',
			id: 'relativeSiteBtn',
			text: '관련 사이트 안내'
		}, {
			xtype: 'button',
			id: 'settingsBtn',
			text: '설정'
		}]
	}
});