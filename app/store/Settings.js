 Ext.define('VoucherGuideForSilvers.store.Settings', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Settings'],

	config : {
		autoLoad: true,
		model: 'VoucherGuideForSilvers.model.Settings',
		storeId: 'settingsStore',

		data: [{
			 textFontSize: 14,
			 counselPhoneNumber: '010-3355-1788',
	         //contactPhoneNumber: '010-3355-1788',
	         emergencyPhoneNumber:'010-1004-1004'
		}]
	}
});
