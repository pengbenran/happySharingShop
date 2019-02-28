import * as API from './base'
export default {
	// 用户登录
	userLogin(params){
		return API.userLogin('http://192.168.2.132:8013/api/shopChat/login',params)
	},
	// 获取订单金额
	orderAmount(params){
		return API.GET('/api-order/api/shopOrder/orderShopAmount',params)
	},
	// 获取本店商品
	getGoods(params){
		return API.GET('/api-good/api/good/merchant',params)	
	},
	// 获取本店所有订单
	getAllOrder(params){
		return API.GET('/api-order/api/shopOrder/orderStatus',params)
	}
}