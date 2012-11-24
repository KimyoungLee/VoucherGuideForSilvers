 Ext.define('VoucherGuideForSilvers.store.Site', {
	extend: 'Ext.data.Store',
	requires: ['VoucherGuideForSilvers.model.Site'],

	config : {
		autoLoad: true,
		model: 'VoucherGuideForSilvers.model.Site',
		storeId: 'siteStore',

		data: [{
			info: 'KB카드 콜센터(KB고운맘카드)',
			url:'http://kbcard.kbstar.com/'
		}, {
			info: '건강가정지원센터',
			url: 'http://www.familynet.or.kr/'
		}, {
			info: '국민건강보험',
			url: 'http://www.nhic.or.kr/'
		}, {
			info: '건강보험심사평가원'
			, url: 'http://www.hira.or.kr/'
		}, {
			info: '고운맘카드',
			url: 'http://www.gounmom.co.kr/'
		}, {
			info: '국가복지정보포털',
			url: 'http://www.bokjiro.go.kr/'
		}, {
			info: '노동부',
			url: 'http://www.moel.go.kr/'
		}, {
			info: '보건복지부',
			url: 'http://www.mw.go.kr/'
		}, {
			info: '신한카드(i-사랑카드)',
			url: 'http://www.shinhancard.com/'
		}, {
			info: '여성부',
			url: 'http://www.moge.go.kr/'
		}, {
			info: '우체국카드(에버리치 고운맘카드)',
			url: 'http://www.epostbank.go.kr/'
		}, {
			info: '중앙자활센터',
			url: 'http://www.cssf.or.kr/'
		}, {
			info: '한국보건사회연구원',
			url: 'http://www.kihasa.re.kr/'
		}, {
			info: '한국장애인개발원',
			url: 'http://www.kowpad.or.kr/'
		}, {
			info: '한국재가노인복지협회',
			url: 'http://www.kacold.or.kr/'
		}, {
			info: '한국지역자활센터협회',
			url: 'http://www.jahwal.or.kr/'
		}]
	}
});
