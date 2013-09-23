Ext.define('ORAEXT.model.Connect', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'type', 'description','connectionDetails']
});





if(ORAEXT.Config.debug) console.log('model Connect.js loaded');