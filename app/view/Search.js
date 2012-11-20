Ext.define('VoucherGuideForSilvers.view.Search', {
	extend: 'Ext.Panel',
	xtype: 'searchPanel',

	requires: [
		'Ext.TitleBar',
		'Ext.field.Select',
		'Ext.form.Panel'
	],
	
	config: {
		title: '서비스 제공기관 검색',
		
		layout: {
			type: 'card'
		},
		
		items: [{
			xtype: 'titlebar',
			title: '서비스 제공 기관 검색',
			id: 'searchTitlebar',
			docked: 'top',
			items: [{
				xtype: 'button',
				id: 'searchBackBtn',
				hidden: true,
				ui: 'back',
				text: 'Back'
			}]
		},{
			xtype: 'panel',
			id: 'searchFormPanel',
			flex: 1,
			items: [{
				xtype: 'selectfield',
				name: 'sido',
				id: 'sidoSelect',
				label: '시/도',
				store: 'sidoStore',
				displayField: 'sido',
				valueField: 'sido',
				placeHolder: '시/도 선택'
			}, {
				xtype: 'selectfield',
				name: 'gugun',
				id: 'gugunSelect',
				label: '구/군',
				store: 'gugunStore',
				displayField: 'gugun',
				valueField: 'gugun',
				placeHolder: '구/군 선택'
			}, {
				xtype: 'button',
				text: '검색',
				id: 'searchOrganizationBtn',
				ui: 'confirm',
				iconCls: 'search',
				iconMask: true,
				margin: '15px'
			}]
		}, {
			xtype: 'list',
			id: 'searchOrganizationList',
			hidden: true,
			padding: '12px',
			store: 'organizationStore',
			emptyText: '검색된 내용이 없습니다.',
			itemTpl: [
				'<div>{name}</div>',
				'<div>{addr}</div>'
			]
		}]
	}
});