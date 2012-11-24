Ext.define('VoucherGuideForSilvers.model.Settings', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
		         { name: 'textFontSize', type: 'int'},
		         //{ name: 'configAd', type: 'int'},
		         { name: 'contactPhoneNumber', type: 'string'},
		         { name: 'emergencyPhoneNumber', type: 'string'}       
		]
	}
});