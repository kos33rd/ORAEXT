Ext.define('ORAEXT.view.ToolsPanel', {
	views: ['ConnectButton'],
	extend: 'Ext.panel.Panel',
	alias: 'widget.toolspanel',
	region: 'north',
	height: 75,
	maxHeight: 75,
	minHeight: 75,
	collapsible: true,
	header: false,
	title: 'toolspanel',
	layout: {
        type: 'fit',
        align: 'stretch'
    },
	tbar:
	Ext.create('Ext.toolbar.Toolbar',{
	    defaults:{
	    	//margin: '5'
	    },
		items:[
			{
				xtype:'connectbutton',
				width: 150
			},
			'->',
			{
				xtype:'button',
				text: 'Ha-ha!',
				width: 50
			}

		]
	})
});