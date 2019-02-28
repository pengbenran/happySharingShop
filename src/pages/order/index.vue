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
		<swiper  style="height:100vh; overflow: scroll;"   duration='350' :current="curr" @change="changeTab">
			<!--1-->
			<swiper-item>
				<div class="rec-wrap centered">
					<div class="rec-li" v-for="(goodlist , index) in orderArry[0]" :key="goodlist.orderId">
						<div class="center">
							<div class="cant clr"> 
								<div class="img fl"><img :src="goodlist.thumbnail" /></div>
								<div class="rec-center fl">
									<div class="tit fontHidden">{{goodlist.goodName}}</div>
									<!-- <div class="name">{{goodlist.name}}</div> -->
									<div class="present ">￥:{{goodlist.goodsAmount}}</div>
									<div class="time ">{{goodlist.time}}</div>
									<!---->
									<div class="top">
										<span>订单编号:{{goodlist.sn}}</span>
										<span>下单时间:{{}} </span>
									</div>
								</div>
								<div class="rec-right fr">
									<div class="num ">数量 : {{goodlist.num}}</div>
									<div class="total">订单总额:{{goodlist.needPayMoney}}</div>
								</div>
							</div>
						</div>
						<div class="xian"></div>
						<div class="bottom">
							<span>买家名称</span>
							<span @click="orderDetail">订单详情</span>
						</div>
					</div>
				</div>
			</swiper-item>
			<!--2-->
			<swiper-item>
				2
			</swiper-item>
			<!--3-->
			<swiper-item>
				3
			</swiper-item>
			<!--4-->
			<swiper-item>
				4
			</swiper-item>
		</swiper>

	</div>
</template>

<script>
	import api from "@/api/api"
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
				orderArry: [],
			}
		},

		components: {

		},

		methods: {
			change(e) {
				let that = this
				that.curr = e
			},
			changeTab(e) {
				this.curr = e.mp.detail.current;
			},
			orderDetail(){
				wx.navigateTon({
					url:'../order-detail/main'
				})
				let that=this
				that.curr = e.mp.detail.current;
			    that.getAllOrder(that.curr)
				
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
						that.orderArry[that.curr]=res.orderStatus
					}
					console.log(that.orderArry)
				})		
			}
		},
		mounted(){ // 调用应用实例的方法获取全局数据
			let that=this
			that.getAllOrder(0)
		}
	}
</script>

<style scoped lang="less">
	/*空空如也*/
	
	.xian {
		width: 100%;
		height: 1px;
		background-color: #dedede;
		padding: 0 12px;
		box-sizing: border-box;
		margin: 12px 0;
	}
	
	.not {
		width: 133px;
		height: 181px;
		position: absolute;
		left: 50%;
		top: 112px;
		margin-left: -65px;
	}
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
	/*列表*/
	
	.rec-li {
		padding-bottom: 36px;
		&:nth-child(1) {
			margin-top: 56px;
		}
		.top {
			span {
				font-size: 12px;
				color: #999999;
				display: block;
			}
		}
		.center {
			.img {
				width: 80px;
				height: 80px;
				overflow: hidden;
				img {
					border-radius: 5px;
					width: 100%;
					height: 100%;
				}
			}
			.rec-center {
				width: 210px;
				line-height: 23px;
				overflow: hidden;
				padding-left: 12px;
				box-sizing: border-box;
				.tit {
					font-size: 15px;
					color: #111111;
					line-height: 24px;
				}
				.name {
					color: #111111;
					font-size: 15px;
					font-weight: bold; 
				}
				.present {
					color: #ff0000;
					font-size: 17px;
				}
			
				.original {
					text-decoration: line-through;
					color: #999999;
					font-size: 12px;
				}
				.time {
					color: #ffb10f;
					font-size: 11px;
				}
			}
			.rec-right {
				width: 65px;
				/*line-height: 65px;*/
				text-align: right;
				.total {
					color: #333333;
					font-size: 12px;
					line-height: 68px;
				}
				.num {
					color: #999999;
					font-size: 12px;
					line-height: 23px;
				}
				.sell {
					color: #666666;
					font-size: 12px;
				}
			}
			.rec-bottom {
				font-size: 14px;
				text-align: right;
				height: 25px;
				line-height: 25px;
				padding-right: 10px;
				box-sizing: border-box;
			}
		}
		.bottom {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			span {
				&:nth-child(1) {
					color: #333333;
					font-size: 14px;
					display: block;
					margin-right: 11px;
				}
				&:nth-child(2) {
					width: 80px;
					height: 30px;
					border-radius: 15px;
					line-height: 32px;
					text-align: center;
					font-size: 14px;
					display: block;
					border: 1px solid #999999;
					color: #666666;
				}
			}
		}
	}
</style>