Ext.define('VoucherGuideForSilvers.store.Organization', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Organization'],

	config : {
		autoLoad: false,

		model: 'VoucherGuideForSilvers.model.Organization',
		storeId: 'organizationStore',
		
		proxy: {
			type: 'jsonp',
			url: 'http://dolbomi.ninetails.kr/json/organization_list.asp',
			callbackKey: 'serverKey',
			
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
});