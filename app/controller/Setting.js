Ext.define('VoucherGuideForSilvers.controller.Setting', {
	extend : 'Ext.app.Controller',
	
	config: {
		control: {
			fontSize: {
				change: 'onFontSizeChange'
			}
		}, refs: {
			fontSize: '#fontSize'
		}
	},
	
	onFontSizeChange: function(sliderField, slider, thumb, newValue, oldValue, eOpts) {
        var me = this;
        
        console.log('>>> onChangeFrequency ! ');        
        console.log('    -  sliderField = ' + sliderField);        
        console.log('    -  slider      = ' + slider);        
        console.log('    -  thumb       = ' + thumb);       
        console.log('    -  newValue    = ' + newValue);    
        console.log('    -  oldValue    = ' + oldValue);
        //document.getElementById('fontSize').getElementsByTagName("span").item(0).style.fontSize = newValue + 'px';
        for (var i = 0; i < document.getElementsByTagName("span").length; i++)
        	document.getElementsByTagName("span").item(i).style.fontSize = newValue + 'px';
    }
});