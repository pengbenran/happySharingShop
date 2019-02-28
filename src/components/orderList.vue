<template>
	<div class="rec-wrap centered">
		<div class="rec-li" v-for="(goodlist , index) in orderList" :key="goodlist.orderId">
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
							<span>下单时间:{{goodlist.createTime}} </span>
						</div>
					</div>
					<div class="rec-right fr">
						<div class="num ">数量 : {{goodlist.goodsNum}}</div>
						<div class="total">订单总额:{{goodlist.needPayMoney}}</div>
					</div>
				</div>
			</div>
			<div class="xian"></div>
			<div class="bottom">
				<span>购买人:{{goodlist.memberName}}</span>
				<span @click="orderDetail">订单详情</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['orderList']
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
					font-size: 12px;
					color: #999999;
				}
				.present {
					color: #ff0000;
					font-size: 17px;
				}
				.name {
					font-size: 12px;
					color: #999999;
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