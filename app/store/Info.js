Ext.define('VoucherGuideForSilvers.store.Info', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Info'],

	config : {
		model: 'VoucherGuideForSilvers.model.Info',
		storeId: 'infoStore',
		
		data: [{
			title: 'item 1'
		}, {
			title: 'item 2'
		}, {
			title: 'item 3'
		}, {
			title: 'item 4'
		}]
	}
});