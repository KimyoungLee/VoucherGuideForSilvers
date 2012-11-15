Ext.define('VoucherGuideForSilvers.controller.MainNavController', {
	extend : 'Ext.app.Controller',
	
	config: {
		control : {
			settingsBtn : {
				tap: 'onSettingsBtnTap'
			}, newsListBtn : {
				tap: 'onNewsListBtnTap'
			}
		}, refs : {
			settingsBtn: '#settingsBtn',
			newsListBtn: '#newsListBtn'
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
	}
});