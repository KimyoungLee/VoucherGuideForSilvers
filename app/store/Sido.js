Ext.define('VoucherGuideForSilvers.store.Sido', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Sido'],

	config : {
		autoLoad: true,

		model: 'VoucherGuideForSilvers.model.Sido',
		storeId: 'sidoStore',
		
		proxy: {
			type: 'jsonp',
			url: 'http://dolbomi.ninetails.kr/json/address_sido.asp',
			callbackKey: 'serverKey',
			
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
});