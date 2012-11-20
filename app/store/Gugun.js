Ext.define('VoucherGuideForSilvers.store.Gugun', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Gugun'],

	config : {
		autoLoad: false,

		model: 'VoucherGuideForSilvers.model.Gugun',
		storeId: 'gugunStore',
		
		proxy: {
			type: 'jsonp',
			url: 'http://dolbomi.ninetails.kr/json/address_gugun.asp',
			callbackKey: 'serverKey',
			
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
});