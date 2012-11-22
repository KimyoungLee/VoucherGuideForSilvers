Ext.define('VoucherGuideForSilvers.view.Search', {
	extend: 'Ext.Panel',
	xtype: 'searchPanel',

	requires: [
		'Ext.TitleBar',
		'Ext.field.Select',
		'Ext.form.Panel',
		'Ext.Map'
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
			}, {
				xtype: 'button',
				id: 'searchListBackBtn',
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
			padding: '5px',
			store: 'organizationStore',
			emptyText: '검색된 내용이 없습니다.',
			itemTpl: [
				'<div>{name}</div>',
				'<div>{addr}</div>'
			]
		}, {
			xtype: 'panel',
			id: 'searchOrganizationListView',
			hidden: true,
			padding: '5px',

			tpl: [
				'<table width="100%" cellpadding="0" cellspacing="0" border="0">',
				'<colgroup>',
				'	<col width="150" />',
				'	<col width="" />',
				'</colgroup>',
				'<tr>',
				'	<th colspan="2">{name}</th>',
				'</tr>',
				'<tr>',
				'	<td class="first">대표자명</td>',
				'	<td>{delegator}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">연락처</td>',
				'	<td>{tel}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">주소</td>',
				'	<td>{post_no}<br />{addr}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">담당자명</td>',
				'	<td>{manager_name}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">담당자 연락처</td>',
				'	<td>{manager_tel}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">담당자 이메일</td>',
				'	<td>{manager_email}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">홈페이지</td>',
				'	<td>{homepage}</td>',
				'</tr>',
				'<tr>',
				'	<td class="first">기관소개</td>',
				'	<td>{introduce}</td>',
				'</tr>',
				'</table>',
				'<br />'
			],
			
			styleHtmlContent: true,
			scrollable: true,
			items: [{
				xtype: 'map',
				id: 'mapPanel',
				height: '300px'
			}]
		}]
	}
});