 Ext.define('VoucherGuideForSilvers.store.Settings', {
	 extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Settings'],

	config : {
		model: 'VoucherGuideForSilvers.model.Settings',
		storeId: 'settingsStore',
        autoLoad:true		
	}
});