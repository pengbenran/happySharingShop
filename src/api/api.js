import * as API from './base'
export default {
	// 用户登录
	userLogin(params){
		return API.userLogin('http://192.168.2.132:8013/api/shopChat/login',params)
	},
	orderAmount(params){
		return API.GET('/api-order/api/shopOrder/orderShopAmount',params)
	},
	getGoods(params){
		return API.GET('/api-good/api/good/merchant',params)	
	}
}