Ext.define('VoucherGuideForSilvers.controller.MainNavController', {
	extend : 'Ext.app.Controller',
	
	config: {
		control : {
			settingsBtn : {
				tap: 'onSettingsBtnTap'
			}, newsListBtn : {
				tap: 'onNewsListBtnTap'
			}, infoListBtn : {
				tap: 'onInfoListBtnTap'
			}, searchBtn: {
				tap: 'onSearchBtnTap'
			}, relativeSiteBtn: {
				tap: 'onrRlativeSiteBtnTap'
			}
		}, refs : {
			settingsBtn: '#settingsBtn',
			newsListBtn: '#newsListBtn',
			infoListBtn: '#infoListBtn',
			searchBtn: '#searchBtn',
			relativeSiteBtn: '#relativeSiteBtn'
		}
	},
	
	onSettingsBtnTap: function(button, e, options) {
		button.up('main').animateActiveItem('settingsPanel', {
			type: 'slide',
			direction: 'left'
		});
	},
	
	onNewsListBtnTap: function(button, e, options) {
		button.up('main').animateActiveItem('newsListPanel', {
			type: 'slide',
			direction: 'left'
		});
	},
	
	onInfoListBtnTap: function(button, e, options) {
		button.up('main').animateActiveItem('infoListPanel', {
			type: 'slide',
			direction: 'left'
		});
	},
	
	onSearchBtnTap: function(button, e, options) {
		button.up('main').animateActiveItem('searchPanel', {
			type: 'slide',
			direction: 'left'
		});
	},
	
	onrRlativeSiteBtnTap: function(button, e, options) {
		button.up('main').animateActiveItem('relativeSitePanel', {
			type: 'slide',
			direction: 'left'
		});
	}
});