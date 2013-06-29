//Ext.require('Ext.MessageBox');
Ext.application({
	//requires : ['Ext.MessageBox'],
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen: true,
			
			items: [{
				xtype: 'toolbar',
				docked: 'top',
				title: 'My Toolbar',
				items: [{
					xtype: 'button',
					text: 'back'
				},{
					xtype: 'spacer'
				},{
					xtype: 'button',
					text: 'home'
//					docked: 'right'
				}]
			}]
		});
	}
});