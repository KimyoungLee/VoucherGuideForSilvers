Ext.define('VoucherGuideForSilvers.model.Info', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'title',
				type: 'string'
			},
			{
				name: 'content',
				type: 'string'
			}
		]
	}
});