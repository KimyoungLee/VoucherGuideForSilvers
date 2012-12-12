//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'VoucherGuideForSilvers': 'app'
});
//</debug>

Ext.application({
	name: 'VoucherGuideForSilvers',

	requires: [
		'Ext.MessageBox'
	],

	views: [
		'Main',
		'Home',
		'Settings',
		'News',
		'Info',
		'Search',
		'Site'
	],
	
	controllers: [
		'MainNavController',
		'News',
		'Search',
		'Info',
		'Settings'
	],
	
	models: [
		'News',
		'Sido',
		'Gugun',
		'Organization',
		'Info',
		'Site'
	],
	
	stores: [
		'News',
		'Sido',
		'Gugun',
		'Organization',
		'Info',
		'Site'
	],

    icon: {
        '57': 'resources/icons/icon_57.png',
        '72': 'resources/icons/icon_72.png',
        '114': 'resources/icons/icon_114.png',
        '144': 'resources/icons/icon_144.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/main.jpg',
        '640x920': 'resources/startup/main.png',
        '768x1004': 'resources/startup/main.png',
        '748x1024': 'resources/startup/main.png',
        '480x854': 'resources/startup/main.png',
        '1536x2008': 'resources/startup/main.png',
        '1496x2048': 'resources/startup/main.png'
    },
    
    phoneStartupScreen: 'resources/startup/main.png',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('VoucherGuideForSilvers.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
