Ext.application({
	//requires : ['Ext.MessageBox'],
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen: true,
			layout: {
				type: 'card'
			},
//			style: 'background:white',
//			html: 'Center'
			items: [{
				xtype: 'panel',
//				docked: 'top',
				style: 'background:red',
				html: 'First'
			},
			{
				xtype: 'panel',
//				docked: 'left',
				style: 'background:blue',
				html: 'Second'
			},
			{
				xtype: 'panel',
//				docked: 'right',
				style: 'background:green',
				html: 'Third'
			},
			{
				xtype: 'panel',
//				docked: 'right',
				style: 'background:yellow',
				html: 'Fourth'
			}]
		});
		
		rootPanel.setActiveItem(6);
		Ext.Viewport.add(rootPanel);
	}
});