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
			text: '안내'
		}, {
			xtype: 'button',
			id: 'newsListBtn',
			text: '뉴스보기'
		}, {
			xtype: 'button',
			id: 'settingsBtn',
			text: '설정'
		}]
	}
});