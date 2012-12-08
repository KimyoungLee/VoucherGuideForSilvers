Ext.define('VoucherGuideForSilvers.model.Settings', {
	extend: 'Ext.data.Model',

	config: {
        fields: ['id', 'query'],
        proxy: {
            type: 'localstorage',
            id  : 'twitter-Searches'
        }
    }

//	config: {
//		fields: [
//		         //'textFontSize', 'contactPhoneNumber', 'emergencyPhoneNumber' 
//		         //*
//		         {
//		        	 name: 'textFontSize',
//		        	 type: 'int'
//        		 },
//		         //{ name: 'configAd', type: 'int'},
//		         { 
//        			 name: 'counselPhoneNumber', 
//        			 type: 'string'
//				 },
//		         { 
//					 name: 'emergencyPhoneNumber', 
//					 type: 'string'
//				 } 
//				 //*/      
//		]
//	}
});