Ext.require('Ext.MessageBox');
Ext.application({
//	requires : ['Ext.MessageBox'],
	launch : function(){
		// 모델 정의
		Ext.define('company',{
			extend: 'Ext.data.Model',
			config: {
				fields: ['grade', 'ban', 'name']
			}
		});
		
		var companyStore = Ext.create('Ext.data.Store',{
			model: 'company',
			sorters: ['grade', 'ban', 'name'],
			data: [{
				grade: '1', ban: '1', name: '가길동'
			},{
				grade: '1', ban: '1', name: '나길동'
			},{
				grade: '1', ban: '2', name: '다길동'
			},{
				grade: '2', ban: '1', name: '라길동'
			},{
				grade: '2', ban: '2', name: '마길동'
			},{
				grade: '2', ban: '1', name: '바길동'
			},{
				grade: '2', ban: '2', name: '사길동'
			},{
				grade: '3', ban: '1', name: '아길동'
			},{
				grade: '3', ban: '2', name: '자길동'
			},{
				grade: '3', ban: '3', name: '차길동'
			},{
				grade: '3', ban: '3', name: '타길동'
			}],
			grouper: {
				groupFn: function(record){
					return record.get('ban')[0] + '반 모임';
				}
			}
		});
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen: true,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'list',
				flex: 1,
				store: companyStore,						// 데이터를 저장한곳
				itemTpl: '{grade}학년 {ban}반 이름 : {name}',	// store에 저장된 데이터를 표현하는 방법
				grouped: true,
				indexBar: true,
				onItemDisclosure: true,
				listeners: {
					itemtap: function( dataList, index, target, record, e, eOpts ){
						Ext.Msg.alert('Title', record.get('grade') + '학년'
											 + record.get('ban') + '반 '
											 + '이름 : ' + record.get('name'));
					}
				}
			}]
		});
	}
});