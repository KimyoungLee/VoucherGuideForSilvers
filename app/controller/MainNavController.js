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
			mainPanel: '#mainPanel',
			emergencyCallBtn: '#emergencyCallBtn',
			counselCallBtn: '#counselCallBtn'
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
	
	onMainPanelActiveItemChange : function(tabPanel, value, oldValue, eOpts) {
		if (value._itemId == 'emergencyCallBtn') {
			// 긴급통화 버튼 선택시
			var emergencyPhoneNumber = localStorage.emergencyPhoneNumber;
			if(!localStorage.emergencyPhoneNumber) emergencyPhoneNumber = '119';
			document.location.href = 'tel:'+ emergencyPhoneNumber;
		} else if (value._itemId == 'counselCallBtn') {
			// 상담통화 버튼 선택시
			var counselPhoneNumber = localStorage.counselPhoneNumber;
			
			// 등록된 상담전화번호가 없으면
			if (!counselPhoneNumber) {
				Ext.Msg.confirm('상담전화등록오류!',
						'등록된 상담전화번호가 없습니다.<br />상담전화번호를 등록하시겠습니까?',
						function(button) {
							if (button == 'yes') {
								// 설정페이지로 이동
								tabPanel.animateActiveItem('settingsPanel', {
									type: 'slide',
									direction: 'left'
								});
							} else {
								tabPanel.animateActiveItem('homePanel', {
									type: 'slide',
									direction: 'right'
								});
							}
				});
			} else {
				document.location.href = 'tel:'+ counselPhoneNumber;
			}
		}
	}
});