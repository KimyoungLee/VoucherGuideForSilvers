Ext.define('VoucherGuideForSilvers.controller.News', {
	extend : 'Ext.app.Controller',
	
	config: {
		refs: {
			newsListPanel: 'newsListPanel',
			newsListView: '#newsListView',
			newsListViewTitle: '#newsListViewTitle',
			newsListViewContent: '#newsListViewContent',
			newsBackBtn: '#newsBackBtn',
			newsList: '#newsList',
			newsTitleBar: '#newsTitlebar'
		},
		control: {
			newsList: {
				itemtap: 'onNewsListItemTap'
			} ,
			newsBackBtn: {
				tap: 'onNewBackBtnTap'
			}
		}
	},
	
	onNewsListItemTap : function(dataview, index, target, record, e, options) {
		this.getNewsListPanel().animateActiveItem(this.getNewsListView(), {
			type: 'slide',
			direction: 'left'
		});
		this.getNewsBackBtn().show();
		this.getNewsTitleBar().setTitle('종합뉴스상세');
		this.getNewsListViewTitle().setTitle(record.data.title);
		this.getNewsListViewContent().setData(record.data);
	},
	
	onNewBackBtnTap : function(button, e, options) {
		this.getNewsBackBtn().hide();
		this.getNewsTitleBar().setTitle('종합뉴스');
		this.getNewsListPanel().animateActiveItem(this.getNewsList(), {
			type: 'slide',
			direction: 'right'
		});
	}
});
