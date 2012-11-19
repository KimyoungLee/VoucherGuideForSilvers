Ext.define('VoucherGuideForSilvers.controller.News', {
	extend : 'Ext.app.Controller',
	
	config: {
		refs: {
			newsListPanel: 'newsListPanel'
		},
		control: {
			'newsListPanel list': {
				itemtap: 'showNews'
			}
		}
	},
	
	showNews : function(list, index, target, record) {
//		this.getNewsListPanel().add({
//			xtype: 'panel',
//			title: record.get('title'),
//			html: record.get('content'),
//			styleHtmlContent: true,
//			scrollable: true
//		});
	}


});
