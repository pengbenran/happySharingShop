<template>
	<div class="container">
		<!--分类-->
		<scroll-view scroll-x>
			<div class="order-nav">
				<div @click="change(index)" v-for="(item,index) in nav" class="order-nav-li" :class="curr==index? 'active':''">
					{{item.name}}
				</div>
					 
			</div>
		</scroll-view>
		<!--数据-->
		<swiper  style="height:100vh"   duration='350' :current="curr" @change="changeTab">
			<!--1-->
			<swiper-item style="overflow: scroll;"> 
				<orderList :orderList="orderList"></orderList>
				<!--空空如也--> 	
			</swiper-item>
			<!--2-->
			<swiper-item style="overflow: scroll;"> 
				<orderList :orderList="orderList"></orderList>
			</swiper-item>
			<!--3-->
			<swiper-item style="overflow: scroll;"> 
				<orderList :orderList="orderList"></orderList>
			</swiper-item>
			<!--4-->
			<swiper-item style="overflow: scroll;"> 
				<orderList :orderList="orderList"></orderList>
			</swiper-item>
		</swiper>

	</div>
</template>

<script>
	import api from "@/api/api"
	import util from "@/utils/index"
	import orderList from "@/components/orderList"
	export default {
		data() {
			return {
				curr: 0,
				nav: [{
					name: "全部",
				}, {
					name: "待付款",
				}, {
					name: "待使用",
				}, {
					name: "已使用",
				}],
				orderArry: [[],[],[],[]],
				orderList:[]
			}
		},

		components: {
			orderList
		},

		methods: {
			change(e) {
				let that = this
				that.curr = e
			},
			changeTab(e) {
				let that=this
				that.curr = e.mp.detail.current;
				if(that.orderArry[that.curr].length==0){
					that.getAllOrder(that.curr)
				}
				else{
				   that.orderList=that.orderArry[that.curr]
				}
			},
			getAllOrder(status){
				let that=this
				let params={}
				wx.showLoading({
					title: '加载中',
				})
				params.shopId=wx.getStorageSync('shopId')
				if(status!=0){
					params.status=status
				}
				api.getAllOrder(params).then(function(res){
					wx.hideLoading();
					if(res.code==0){
						for(var i in res.orderStatus){
							res.orderStatus[i].createTime=util.formatTime(res.orderStatus[i].createTime)
						}	
						that.orderArry[that.curr]=res.orderStatus
						that.orderList=that.orderArry[that.curr]
					}
				})		
			}
		},
		async mounted(){ // 调用应用实例的方法获取全局数据
			let that=this
			that.getAllOrder(0)	
		}
	}
</script>

<style scoped lang="less">
	/**空空如也*/ 


	/*导航*/
	
	.order-nav {
		position: fixed;
		top: 0;
		display: flex;
		z-index: 99;
		justify-content: space-around;
		background-color: #fff;
		width: 100%;
		.order-nav-li {
			/*flex-grow: 1;*/
			height: 36px;
			line-height: 36px;
			text-align: center;
			font-size: 14px;
			color: #111111;
			width: 44px;
		}
		.active {
			color: #01a4bf;
			border-bottom:4px solid #01a4bf;
			border-radius: 2px; 
		}
	}
</style>