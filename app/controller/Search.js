Ext.define('VoucherGuideForSilvers.controller.Search', {
	extend : 'Ext.app.Controller',
	
	config: {
		control : {
			sidoSelect: {
				change: 'onSidoSelectChange'
			}, searchOrganizationBtn: {
				tap: 'onSearchOrganizationTap'
			}, searchBackBtn: {
				tap: 'onSearchBackBtnTap'
			}, searchListBackBtn: {
				tap: 'onSearchListBackBtnTap'
			}, searchOrganizationList: {
				itemtap: 'onSearchOrganizationListItemTap'
			}
		}, refs : {
			sidoSelect: '#sidoSelect',
			gugunSelect: '#gugunSelect',
			searchOrganizationBtn: '#searchOrganizationBtn',
			searchOrganizationList: '#searchOrganizationList',
			searchOrganizationListView: '#searchOrganizationListView',
			searchPanel: 'searchPanel',
			searchBackBtn: '#searchBackBtn',
			searchListBackBtn: '#searchListBackBtn',
			searchTitlebar: '#searchTitlebar',
			searchFormPanel: '#searchFormPanel',
			mapPanel: '#mapPanel',
			searchOrganizationListViewAll: '#searchOrganizationListViewAll'
		}
	},
	
	// 서비스 제공 기관 검색 select box 구/군 처리
	onSidoSelectChange: function (select, newValue, oldValue, eOpts) {
		if(newValue) {
			this.getGugunSelect().getStore().getProxy().setExtraParams({
				sido : newValue
			});
			this.getGugunSelect().getStore().load();
		}
	},
	
	// 검색 결과 보기 화면 전환
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
	
	// 검색 결과 보기에서 검색 화면으로 전환
	onSearchBackBtnTap: function(button, e, options) {
		this.getSearchBackBtn().hide();
		this.getSearchTitlebar().setTitle('서비스 제공 기관 검색');
		
		this.getSearchPanel().animateActiveItem(this.getSearchFormPanel(), {
			type: 'slide',
			direction: 'right'
		});
	},
	
	// 겸색 결과 화면에서 검색 결과 상세 화면으로 전환
	onSearchOrganizationListItemTap : function(dataview, index, target, record, e, options) {
		this.getSearchBackBtn().hide();
		this.getSearchListBackBtn().show();
		this.getSearchTitlebar().setTitle('서비스 제공 기관 상세');

		this.getSearchPanel().animateActiveItem(this.getSearchOrganizationListView(), {
			type: 'slide',
			direction: 'left'
		});
		
		this.getSearchOrganizationListViewAll().setData(record.data);
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(record.data.lat, record.data.lng),
			map: this.getMapPanel().getMap(),
			title: record.data.name
		});
		
		this.getMapPanel().setMapOptions({
			center : new google.maps.LatLng(record.data.lat, record.data.lng),
			zoom : 15,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			draggable: false,
			navigationControl: true,
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.DEFAULT
			}
		});
	},
	
	// 검색 결과 상세 보기에서 검색 결과 화면으로 전환
	onSearchListBackBtnTap: function(button, e, options) {
		this.getSearchListBackBtn().hide();
		this.getSearchBackBtn().show();
		this.getSearchTitlebar().setTitle('서비스 제공 기관 검색 결과');
		
		this.getSearchPanel().animateActiveItem(this.getSearchOrganizationList(), {
			type: 'slide',
			direction: 'right'
		});
	},
});