Ext.application({
	//requires : ['Ext.MessageBox'],
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen: true,
			layout: {
				type: 'vbox',		// vbox �϶�
				align: 'stretch',	// �¿�����
				pack: 'center'		// ��������
			},
//			style: 'background:white',
//			html: 'Center'
			items: [{
				xtype: 'panel',
//				docked: 'top',
				style: 'background:red',
				html: 'First',
				flex: 1
			},
			{
				xtype: 'panel',
//				docked: 'left',
				style: 'background:blue',
				html: 'Second',
				flex: 1
			},
			{
				xtype: 'panel',
//				docked: 'right',
				style: 'background:green',
				html: 'Third',
				flex: 1
			},
			{
				flex: 1,
				layout: {
					type: 'hbox',		// hbox �϶�
					align: 'stretch' 	// ���� ����
//					pack: 'center'	 	// �¿� ����
					
				},
				items: [{
					xtype: 'panel',
//					docked: 'right',
					style: 'background:yellow',
					html: 'Fourth-First',
					flex: 1
				},
				{
					xtype: 'panel',
//					docked: 'right',
					style: 'background:gray',
					html: 'Fourth-Second',
					flex: 1
				}]
			}]
		});
		
		Ext.Viewport.add(rootPanel);
	}
});