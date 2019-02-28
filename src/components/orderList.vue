<template>
	<div class="rec-wrap centered">
		<div class="rec-li" v-for="(goodlist , index) in orderList" :key="goodlist.orderId">
			<div class="top">
				<span>订单编号:{{goodlist.sn}}</span>
				<span>下单时间:{{goodlist.createTime}} </span>
			</div>
			<div class="center">
				<div class="cant clr"> 
					<div class="img fl"><img :src="goodlist.thumbnail" /></div>
					<div class="rec-center fl">
						<div class="tit fontHidden">{{goodlist.goodName}}</div>
						<!-- <div class="name">{{goodlist.name}}</div> -->
						<div class="present">
							<span>￥:{{goodlist.goodsAmount}}</span>
							<span class="num">数量 : {{goodlist.goodsNum}}</span>
						</div>
						<div class="time"><span>推荐师优惠:{{goodlist.recommend}}元</span><span>佣金抵扣:{{goodlist.balance}}元</span></div>
						<!---->			
					</div>
				</div>
			</div>
			<div class="xian"></div>
			<div class="bottom">
				<span>购买人:{{goodlist.memberName}}</span>
				<span @click="orderDetail(index)">订单详情</span>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store/store'
export default {
  props: ['orderList'],
  data(){
  	return{

  	}
  },
  methods:{
  	orderDetail(index){
  		let that=this
  		store.commit("stateGoodDetail",that.orderList[index])
  		wx.navigateTo({
  			url:'../order-detail/main'
  		})
  	},
  }
}
</script>

<style scoped lang="less">
/*列表*/
	
	.rec-li {
		padding-bottom: 36px;
		&:nth-child(1) {
			margin-top: 56px;
		}
		.top {
			display: flex;
			justify-content: space-between;
			height: 40px;
			line-height:40px;
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
				width: 250px;
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
					display: flex;
					justify-content: space-between;
					.num {
					color: #999999;
					font-size: 12px;
					line-height: 23px;
				}
				}
			
				.original {
					text-decoration: line-through;
					color: #999999;
					font-size: 12px;
				}
				.time {
					color: #ffb10f;
					font-size: 11px;
					display: flex;
					justify-content: space-between;
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
			justify-content: space-between;
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