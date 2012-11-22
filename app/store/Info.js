Ext.define('VoucherGuideForSilvers.store.Info', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Info'],

	config : {
		autoLoad: true,
		model: 'VoucherGuideForSilvers.model.Info',
		storeId: 'infoStore',

		data: [{
			title: '목적',
			content:'혼자 힘으로 일상생활을 영위하기 어려운 노인과 독거노인에게 욕구에 따라 안전확인, 생활교육, 서비스 연계, 가사·활동지원, 주간보호서비스 등 맞춤형 복지서비스 제공'
		}, {
			title: '서비스 대상',
			content: '<ul><li>만 65세 이상 치매 또는 중풍의 노인성 질환자로서 전국가구평균소득 200% 이하자 (2012.2.15부터 적용)</li><li>만 65세 이상 장기요양등급외 A,B 해당자로서 전국가구평균소득 150% 이하자 (2012.7.2부터 적용)</li><li>시군구청장이 인정하는 장애 1~3등급 및 중증질환자 중 차상위계층 이하자 (2012.7.2부터 적용)</li></ul><table><tr><td>가구원 수</td><td>전국가구 월평균 소득 150% (천원)</td><td>전국가구 월평균 소득 150% (천원)</td></tr><tr><td>1인</td><td>2,175</td><td>2,901</td></tr><tr><td>2인</td><td>3,943</td><td>5,258</td></tr><tr><td>3인</td><td>5,708</td><td>7,611</td></tr><tr><td>4인</td><td>6,581</td><td>8,774</td></tr><tr><td>5인</td><td>7,053</td><td>9,404</td></tr><tr><td>6인</td><td>7,525</td><td>10,034</td></tr><tr><td>7인</td><td>7,997</td><td>10,664</td></tr><tr><td>8인 이상</td>8,469<td></td><td>11,294</td></tr></table>※ 건강보험료 본인부담금을 기준으로 대상자 선정.<br/>가구원수·가입유형별 건강보험료 본인부담금에 의한 소득 판정기준 (월평균 소득 200% 기준) '
		}, {
			title: '서비스 내용',
			content:''
		}, {
			title: '서비스 신청',
			content:''
		}, {
			title: '서비스 이용',
			content:''
		}]
	}
});