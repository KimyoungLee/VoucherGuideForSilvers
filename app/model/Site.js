Ext.define('VoucherGuideForSilvers.model.Site', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'info',
				type: 'string'
			},
			{
				name: 'url',
				type: 'string'
			}
		]
	}
});