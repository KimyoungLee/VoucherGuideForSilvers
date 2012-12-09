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
			}, mainPanel: {
				activeitemchange: 'onMainPanelActiveItemChange'
			}
		}, refs : {
			settingsBtn: '#settingsBtn',
			newsListBtn: '#newsListBtn',
			infoListBtn: '#infoListBtn',
			searchBtn: '#searchBtn',
			relativeSiteBtn: '#relativeSiteBtn',
			mainPanel: '#mainPanel'
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
	
	onMainPanelActiveItemChange : function(comp, value, oldValue, eOpts) {
		if (value._itemId == 'emergencyCallBtn') {
			// 긴급통화 버튼 선택시
			var emergencyPhoneNumber = localStorage.emergencyPhoneNumber;
			if(!localStorage.emergencyPhoneNumber) emergencyPhoneNumber = '119';
			document.location.href = 'tel:'+ emergencyPhoneNumber;
		}
	}
});