Ext.define('VoucherGuideForSilvers.controller.Search', {
	extend : 'Ext.app.Controller',
	
	config: {
		control : {
			sidoSelect: {
				change: 'onSidoSelectChange'
			}, searchOrganizationBtn: {
				tap : 'onSearchOrganizationTap'
			}, searchBackBtn: {
				tap : 'onSearchBackBtnTap'
			}
		}, refs : {
			sidoSelect: '#sidoSelect',
			gugunSelect: '#gugunSelect',
			searchOrganizationBtn: '#searchOrganizationBtn',
			searchOrganizationList: '#searchOrganizationList',
			searchPanel: 'searchPanel',
			searchBackBtn: '#searchBackBtn',
			searchTitlebar: '#searchTitlebar',
			searchFormPanel: '#searchFormPanel'
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
		this.getSearchBackBtn().show();
		this.getSearchTitlebar().setTitle('서비스 제공 기관 검색 결과');
		this.getSearchPanel().animateActiveItem(this.getSearchOrganizationList(), {
			type: 'slide',
			direction: 'left'
		});
		
		var sSido = this.getSidoSelect().getValue();
		var sGugun = this.getGugunSelect().getValue();
		
		if (sSido && sGugun) {
			this.getSearchOrganizationList().getStore().getProxy().setExtraParams({
				sido: sSido,
				gugun: sGugun
			});
			this.getSearchOrganizationList().getStore().load();
		}
	},
	
	onSearchBackBtnTap: function(button, e, options) {
		this.getSearchBackBtn().hide();
		this.getSearchTitlebar().setTitle('서비스 제공 기관 검색');
		this.getSearchPanel().animateActiveItem(this.getSearchFormPanel(), {
			type: 'slide',
			direction: 'right'
		});
	}
});