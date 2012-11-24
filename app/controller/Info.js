Ext.define('VoucherGuideForSilvers.controller.Info', {
	extend : 'Ext.app.Controller',
	
	config: {
		refs: {
			infoListPanel: 'infoListPanel',
			infoListView: '#infoListView',
			infoBackBtn: '#infoBackBtn',
			infoList: '#infoList',
			infoTitleBar: '#infoTitlebar'
		},
		control: {
			infoList: {
				itemtap: 'onInfoListItemTap'
			} ,
			infoBackBtn: {
				tap: 'onNewBackBtnTap'
			}
		}
	},
	
	onInfoListItemTap : function(dataview, index, target, record, e, options) {
		this.getInfoListPanel().animateActiveItem(this.getInfoListView(), {
			type: 'slide',
			direction: 'left'
		});
		this.getInfoBackBtn().show();
		this.getInfoTitleBar().setTitle('서비스 안내'); //record.get('title'));
		this.getInfoListView().setData(record.data);
	},
	
	onNewBackBtnTap : function(button, e, options) {
		this.getInfoBackBtn().hide();
		this.getInfoTitleBar().setTitle('서비스 안내');
		this.getInfoListPanel().animateActiveItem(this.getInfoList(), {
			type: 'slide',
			direction: 'right'
		});
	}
});
