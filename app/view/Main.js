Ext.define('VoucherGuideForSilvers.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {
		tabBarPosition: 'bottom',
		
		items: [{
			xtype: 'homePanel'
				, listeners: {
                	painted: function(textfield, eOpts){
                		if(localStorage.fontSize)
    						for (var i = 0; i < document.getElementsByTagName("span").length; i++)
    				        	document.getElementsByTagName("span").item(i).style.fontSize = localStorage.fontSize + 'px';
                	}
				}
		}, {
			title: '긴급통화',
			iconCls: 'phone1',

			id:'call119Btn',
			listeners : {
				activate : function(panel, newActiveItem, oldActiveItem, eOpts ){
					console.log('tel');
					document.location.href = 'tel:010-3848-4697';
					panel.animateActiveItem('homePanel', {
						type: 'slide',
						direction: 'left'
					});
					console.log('tel end');
				}
			}
		}, {
			xtype: 'searchPanel',
		}, {
			title: '상담통화',
			iconCls: 'phone1',
			id: 'callCounselBtn'
		}, {
			xtype: 'settingsPanel'
		}, {
			xtype: 'newsListPanel',
			hidden: true
		}, {
			xtype: 'infoListPanel',
			hidden: true
		}, {
			xtype: 'relativeSitePanel',
			hidden: true
		}]
	}
});
