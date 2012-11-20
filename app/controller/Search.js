Ext.define('VoucherGuideForSilvers.controller.Search', {
	extend : 'Ext.app.Controller',
	
	config: {
		control : {
			sidoSelect: {
				change: 'onSidoSelectChange'
			}, searchOrganizationBtn: {
				tap : 'onSearchOrganizationTap'
			}
		}, refs : {
			sidoSelect: '#sidoSelect',
			gugunSelect: '#gugunSelect',
			searchOrganizationBtn: '#searchOrganizationBtn',
			searchOrganizationList: '#searchOrganizationList',
			searchPanel: 'searchPanel'
		}
	},
	
	onSidoSelectChange: function (select, newValue, oldValue, eOpts) {
		if(newValue) {
			this.getGugunSelect().getStore().getProxy().setExtraParams({
				sido : newValue
			});
			this.getGugunSelect().getStore().load();
		}
	},
	
	onSearchOrganizationTap: function(button, e, options) {
		this.getSearchPanel().animateActiveItem(this.getSearchOrganizationList(), {
			type: 'slide',
			direction: 'left'
		});
	}
});