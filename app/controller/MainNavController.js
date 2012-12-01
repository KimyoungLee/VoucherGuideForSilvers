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
			}, call119Btn : {
				tap: 'onCall119BtnTap'
			}
		}, refs : {
			settingsBtn: '#settingsBtn',
			newsListBtn: '#newsListBtn',
			infoListBtn: '#infoListBtn',
			searchBtn: '#searchBtn',
			relativeSiteBtn: '#relativeSiteBtn',
			call199Btn: '#call119'
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
	},
	
	onCall119BtnTap: function(button, e, options){
		
		location.href = 'tel:010-3848-4697'; 
		/*
		button.up('main').animateActiveItem('homePanel', {
			type: 'slide',
			direction: 'left'
		});
		*/
	}
});