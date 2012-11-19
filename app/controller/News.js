Ext.define('VoucherGuideForSilvers.controller.News', {
	extend : 'Ext.app.Controller',
	
	config: {
		refs: {
			newsListPanel: 'newsListPanel',
			newsListView: '#newsListView',
			newsBackBtn: '#newsBackBtn',
			newsList: '#newsList'
		},
		control: {
			'newsListPanel list': {
				itemtap: 'showNews'
			} ,
			'newsListPanel button': {
				tap: 'hideNews'
			}
		}
	},
	
	showNews : function(dataview, index, target, record, e, options) {
		this.getNewsListPanel().animateActiveItem(this.getNewsListView(), {
			type: 'slide',
			direction: 'left'
		});
		this.getNewsBackBtn().show();
		this.getNewsListView().setData(record.data);
	},
	
	hideNews : function(button, e, options) {
		this.getNewsBackBtn().hide();
		this.getNewsListPanel().animateActiveItem(this.getNewsList(), {
			type: 'slide',
			direction: 'right'
		})
	}
});
