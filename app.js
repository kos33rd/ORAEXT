Ext.application({
	requires: [
		'Ext.container.Viewport'
	],
	name: 'ORAEXT',
	appFolder: 'app',
	controllers: [
		'MainWindow',
		'ConnectButton'
	],
	stores: ['Connect'],
	launch: function() {
		
		if(ORAEXT.Config.debug) console.log('app.js launching...');

		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			bodyBorder: false,
			defaults: {
				split: true
			},

			items: [
				{
					xtype : 'toolspanel',
					region:'north'
				},
				{
					xtype : 'connectionslist',
					region: 'west'
				},
				{
					xtype : 'detailstabpanel',
					region: 'center'
				}
			]
		});


		if(ORAEXT.Config.debug) console.log('app.js launched');
	}
});