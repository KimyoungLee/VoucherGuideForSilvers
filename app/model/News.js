Ext.define('VoucherGuideForSilvers.model.News', {
	extend: 'Ext.data.Model',

	config: {
		fields: [{
			name: 'idx',
			type: 'int'
		}, {
			name: 'title',
			type: 'string'
		}, {
			name: 'content',
			type: 'string'
		}]
	}
});