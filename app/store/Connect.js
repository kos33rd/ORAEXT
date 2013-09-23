Ext.define('ORAEXT.store.Connect', {
	extend: 'Ext.data.Store',
	requires: 'ORAEXT.model.Connect',
	model: 'ORAEXT.model.Connect',
	storeId: 'ConnectStore',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'data/get/Connect/Connect.json',
		reader: {
			type: 'json',
			root: 'connections',
			successProperty: 'success'
		}

	}

});



if(ORAEXT.Config.debug) console.log('store Connect.js loaded');