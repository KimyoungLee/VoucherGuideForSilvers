Ext.define('VoucherGuideForSilvers.controller.Settings', {
	extend : 'Ext.app.Controller',
	
	config: {
		control: {
			fontSize: {
				change: 'onFontSizeChange'
			},
			counselPhoneNumber: {
				change: 'onCounselPhoneNumberChange'
			}, 
			emergencyPhoneNumber: {
				change: 'onEmergencyPhoneNumberChange'
			},
		}, refs: {
			fontSize: '#fontSize',
			counselPhoneNumber: '#counselPhoneNumber',
			emergencyPhoneNumber: '#emergencyPhoneNumber'
		}
	},
	
	onFontSizeChange: function(sliderField, slider, thumb, newValue, oldValue, eOpts) {
        //var me = this;//TTT
        
        console.log('>>> onChangeFrequency ! ');        
        console.log('    -  sliderField = ' + sliderField);        
        console.log('    -  slider      = ' + slider);        
        console.log('    -  thumb       = ' + thumb);       
        console.log('    -  newValue    = ' + newValue);    
        console.log('    -  oldValue    = ' + oldValue);
        //document.getElementById('fontSize').getElementsByTagName("span").item(0).style.fontSize = newValue + 'px';
        for (var i = 0; i < document.getElementsByTagName("span").length; i++)
        	document.getElementsByTagName("span").item(i).style.fontSize = newValue + 'px';
    },

    onCounselPhoneNumberChange: function( textField, newValue, oldValue, eOpts ) {
    	if(window.localStorage)
		{
    		//window.localStorage.clear();		
    		window.localStorage.setItem('counselPhoneNumber', newValue);
		}
    	
//    	var settings = Ext.create('VoucherGuideForSilvers.model.Settings', {
//    		counselPhoneNumber:newValue
//    	});
//    	this.setRecord(settings);
    	//settingsPanel.setRecord(settings);
    },
    
    onEmergencyPhoneNumberChange: function( textField, newValue, oldValue, eOpts ) {
    	if(window.localStorage)
		{
    		//window.localStorage.clear();		
    		window.localStorage.setItem('emergencyPhoneNumber', newValue);
		}    	
//    	var settings = Ext.create('VoucherGuideForSilvers.model.Settings', {
//    		emergencyPhoneNumber:newValue
//    	});
//    	this.setRecord(settings);
//    	//settingsPanel.setRecord(settings);    	
    }
});