Ext.define('ORAEXT.controller.ConnectButton', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'ORAEXT.store.Connect': {
				load:function(){ alert('!') }
			},
			'connectbutton': {
				click: function(cbutton){
					cbutton.showMenu(); 
				}
			},
			'connectbutton menu': {
				click: function(menu,item){
					console.log(item);
				}

			}

		});
	}



});



if(ORAEXT.Config.debug) console.log('controller connectButton.js loaded');