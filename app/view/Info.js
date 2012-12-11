Ext.define('VoucherGuideForSilvers.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'infoListPanel',
	
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.data.Store',
		'Ext.carousel.Carousel'
	],
	
	config: {
		title: '서비스안내',
		layout: {
			type: 'card',
		},
		
		items: [{
			xtype: 'titlebar',
			id: 'infoTitlebar',
			title: '서비스안내',
			docked: 'top',
			items: [{
				xtype: 'button',
				hidden: true,
				id: 'infoBackBtn',
				ui: 'back',
				text: 'Back'
			}]
		}, {
			xtype:'carousel',
			id:'infoPanel',
			items:[{
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html: [
					'<div id="infoContent">',
					'<h3><span>목적</span></h3>',
					'<div class="infoContent">혼자 힘으로 일상생활을 영위하기 어려운 노인과 독거노인에게 욕구에 따라 안전확인, 생활교육, 서비스 연계, 가사·활동지원, 주간보호서비스 등 맞춤형 복지서비스 제공</div>',
					'</div>'
				].join('')
			}, {
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html:[
					'<div id="infoContent">',
					'<h3><span>서비스 대상</span></h3>',
					'<div class="infoContent">',
					'<ul><li>만 65세 이상 치매 또는 중풍의 노인성 질환자로서 전국가구평균소득 200% 이하자 (2012.2.15부터 적용)</li><li>만 65세 이상 장기요양등급외 A,B 해당자로서 전국가구평균소득 150% 이하자 (2012.7.2부터 적용)</li><li>시군구청장이 인정하는 장애 1~3등급 및 중증질환자 중 차상위계층 이하자 (2012.7.2부터 적용)</li></ul><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><th>가구원 수</th><th>전국가구 월평균 소득 150% (천원)</th><th>전국가구 월평균 소득 150% (천원)</th></tr><tr><td>1인</td><td>2,175</td><td>2,901</td></tr><tr><td>2인</td><td>3,943</td><td>5,258</td></tr><tr><td>3인</td><td>5,708</td><td>7,611</td></tr><tr><td>4인</td><td>6,581</td><td>8,774</td></tr><tr><td>5인</td><td>7,053</td><td>9,404</td></tr><tr><td>6인</td><td>7,525</td><td>10,034</td></tr><tr><td>7인</td><td>7,997</td><td>10,664</td></tr><tr><td>8인 이상</td><td>8,469</td><td>11,294</td></tr></table>※ 건강보험료 본인부담금을 기준으로 대상자 선정.<br/><ul><li>가구원수·가입유형별 건강보험료 본인부담금에 의한 소득 판정기준 (월평균 소득 200% 기준)</li></ul></br><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><th rowspan="2">가구원수</th><th rowspan="2">소득기준<br/>선정기준</th><th colspan="3">건강보험료 본인부담금(원)</th></tr><tr><th>직장가입자</th><th>지역가입자</th><th>혼합(직장+지역)</th></tr><tr><td>1인</td><td>2,901천원</td><td>84,144</td><td>93,491</td><td>85,073</td></tr><tr><td>2인</td><td>5,258천원</td><td>153,968</td><td>177,010</td><td>156,758</td></tr><tr><td>3인</td><td>7,611천원</td><td>228,117</td><td>256,287</td><td>239,272</td></tr><tr><td>4인</td><td>8,774천원</td><td>274,657</td><td>300,135</td><td>305,051</td></tr><tr><td>5인</td><td>9,404천원</td><td>274,657</td><td>300,135</td><td>305,051</td></tr><tr><td>6인</td><td>10,034천원</td><td>305,051</td><td>324,642</td><td>371,813</td></tr><tr><td>7인</td><td>10,664천원</td><td>371,813</td><td>363,058</td><td>816,519</td></tr><tr><td>8인 이상</td><td>11,294천원</td><td>371,813</td><td>363,058</td><td>816,519</td></tr></table>- 노인장기요양보험료(건강보험료의 6.55%)를 제외한 금액임</div>',
					'</div>'
				].join('')
			}, {
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html: [
					'<div id="infoContent">',
					'<h3><span>서비스 내용</span></h3>',
					'<div class="infoContent"><ul><li>신변·활동지원 : 식사도움, 세면도움, 체위변경, 옷 갈아입히기, 구강관리, 신체기능의 유지, 화장실 이용 도움, 외출동행, 목욕보조 등<br/>※ 목욕보조서비스는 보호자가 입회하는 경우에만 가능</li><li>가사·일상생활지원 : 취사, 생활필수품 구매, 청소, 세탁 등<br/>※ 의료인이 행하는 의료/조산/간호 등의 의료서비스 제공은 불가</li><li>주간보호서비스 이용 : 기능회복, 급식 및 목욕, 송영서비스</li><li><string>이용시간</strong><br/>- 방문서비스 : 원칙적으로 일별 이용시간에 제한은 없으며, 제공기관과 이용자간의 계약 체결시 별도 합의하여 결정<br/>- 주간보호서비스 : 일별 9시간 초과할수 없음(초과 시 본인부담)<br/>※ 방문서비스와 주간보호서비스의 혼용은 불가하며, 다른 유형의 서비스를 이용하기 위해서는 등급 변경 절차를 거쳐야 함.</li></ul></div>',
					'</div>'
				].join('')
			}, {
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html:[
					'<div id="infoContent"><h3><span>서비스 가격</span></h3>',
					'<div class="infoContent"><ul><li>서비스 대상자의 소득 및 서비스 시간(일)에 따라 바우처 지원금을 차등 지원</li></ul><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><th>&nbsp;</th><th>&nbsp;</th><th>서비스가격</th><th>&nbsp;</th><th>정부지원금</th><th>&nbsp;</th><th>본인부담금</th></tr><tr><th rowspan="3">월 27시간<br />(9일)</th><td>차상위 초과</td><td>월 248,400원</td><td rowspan="6">=</td><td>월 212,400원</td><td rowspan="6">+</td><td>월 36,000원</td></tr><tr><td>차상위 계층</td><td>월 248,400원</td><td>월 230,400원</td><td>월 18,000원</td></tr><tr><td>기초생활수급자</td><td>월 248,400원</td><td>월 248,400원</td><td>무료</td></tr><tr><th rowspan="3">월 36시간<br />(12일)</th><td>차상위 초과</td><td>월 331,200원</td><td>월 283,200원</td><td>월 48,000원</td></tr><tr><td>차상위 계층</td><td>월 331,200원</td><td>월 307,200원</td><td>월 24,000원</td></tr><tr><td>기초생활수급자</td><td>월 331,200원</td><td>월 322,920원</td><td>월 8,280원</td></tr></table><ul><li>본인부담금 납부 기한 및 방법<br/>- (원칙) 매월 15~27일까지, (추가연장) 익월 1~10일까지<br/>- 결정통지서 및 바우처 카드에 명시된 지정 계좌에 무통장송금, 인터넷·폰뱅킹·ATM 등을 통해 본인부담금을 입금(예금주 : 서비스 대상자명)<br/>※ 본인부담금을 입금하지 않으면 바우처가 생성되지 않음에 유의</li></ul></div>',
					'</div>'
				].join('')
			}, {
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html:['<div id="infoContent"><h3><span>서비스 신청</span></h3>',
					'<div class="infoContent">',
					'<ul><li>신청권자 : 본인, 가족 또는 그 밖의 관계인</li><li>신청서 제출 장소 : 서비스 대상자의 주민등록상 주소지 읍·면·동 주민센터</li><li>신청기간 : 매월 1일 ~ 18일 (익월 1일부터 서비스 개시)</li><li>제출서류 : 신청서 등은 읍·면·동 주민센터에 비치되어 있으며, 신분증과 소득증명 자료 필요<br/>※ 제출서류는 방문 전 읍·면·동 주민센터로 문의</li></ul></div>',
					'</div>'
				].join('')
			}, {
				xtype: 'panel',
				style:{
					'padding' : '0px 0px 30px 0px',
				},
				scrollable: true,
				html:['<div id="infoContent"><h3><span>서비스 이용</span></h3><div class="infoContent"><ul><li>서비스 제공기관 : 서비스 대상자가 이용하고자 하는 기관을 선택하여 이용<br/>- 방문서비스 : 재가노인복지시설, 지역자활센터 등<br/>- 주간보호서비스 : 노인복지법 제38조 재가노인복지시설 중 주간보호서비스를 제공하는 기관<br/>- 서비스 대상자가 이용을 원하는 제공기관과 계약 후 서비스 이용<br/>※ 제공기관 연락처는 서비스 신청 후 시·군·구에서 통보되는 사회복지서비스 이용안내 문의 사회복지서비스 제공기관 안내를 참조</li><li>서비스 제공인력 : 노인요양보호사 자격증 소지자</li></ul></div></div>'].join('')
			}]
		}]
	}
});