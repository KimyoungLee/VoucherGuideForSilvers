Ext.define('VoucherGuideForSilvers.model.Organization', {
	extend: 'Ext.data.Model',

	config: {
		fields: [{
			name: 'name',
			type: 'string'
		}, {
			name: 'delegator',
			type: 'string'
		}, {
			name: 'tel',
			type: 'string'
		}, {
			name: 'post_no',
			type: 'string'
		}, {
			name: 'addr',
			type: 'string'
		}, {
			name: 'manager_name',
			type: 'string'
		}, {
			name: 'manager_tel',
			type: 'string'
		}, {
			name: 'manager_email',
			type: 'string'
		}, {
			name: 'homepage',
			type: 'string'
		}, {
			name: 'introduce',
			type: 'string'
		}]
	}
});