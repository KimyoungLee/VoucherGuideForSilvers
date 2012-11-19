Ext.define('VoucherGuideForSilvers.store.News', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.News'],
	
	config : {
		autoLoad: true,
		pageSize: 5,
		
		model: 'VoucherGuideForSilvers.model.News',
		storeId: 'newsStore',
		
		proxy: {
			type: 'jsonp',
			url: 'http://dolbomi.ninetails.kr/json/board_list.asp',
			callbackKey: 'serverKey',
			
			pageParam: 'page',
			limitParam: 'pagesize',
			
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
});