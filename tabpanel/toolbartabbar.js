//Ext.require('Ext.MessageBox');
Ext.application({
	//requires : ['Ext.MessageBox'],
	launch : function(){
		var button = Ext.create('Ext.Button', {
			text : "Button",
			handler : function(){
				Ext.Msg.alert('Message', 'Options');
			}
		});
		var panel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			html : 'sencha test',
			items : [button]
		});
		Ext.Viewport.add(panel);
	}
});