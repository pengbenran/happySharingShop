<template>
	<div>
		<div class="order-detail">
			<!--模块1-->
			<div class="title">
				<span></span>
				<span>{{state}}</span>
			</div>
			<!---->
			<!--模块2-->
			<div class="rec-li ">
				<div class="rec-li-warp clr">
					<div class="img fl"><img :src="orderDetail.thumbnail" /></div>
					<div class="rec-center fl">
						<div class="tit fontHidden">{{orderDetail.goodName}}</div>
						<!-- <div class="name">{{orderDetail.name}}</div> -->
						<div class="present "><span>￥:{{orderDetail.goodsAmount}}</span></div>
					</div>
					<div class="rec-right fr">
						<div class="clr">
						</div>	
					</div>
				</div>
				<!--总价-->
				<div class="prices">
					<div class="price1">
						<span>商品总价: </span>
						<span> ¥ {{orderDetail.goodsAmount}}</span>
					</div>
					<div class="price2">
						<span>推荐师优惠：</span>
						<span> ¥ {{orderDetail.recommend}}</span>
					</div>
					<div class="price3">
						<span>会员折扣：</span>
						<span> ¥ {{orderDetail.discount*10}}折</span>
					</div>
					<div class="price3">
						<span>佣金抵扣：</span>
						<span> ¥ {{orderDetail.balance}}</span>
					</div>
					<div class="price4">
						<span>实付金额：</span>
						<span> ¥ {{orderDetail.needPayMoney}}</span>
					</div>
				</div>
			</div>

			<!--订单详情-->
			<div class="detail-order">
				<div class="tit">订单信息</div>
				<div class="detail-order-li">
					<div>
						<span>买家姓名:</span>
						<span>{{orderDetail.memberName}}</span>
					</div>
					<div>
						<span>预定数量:</span>
						<span>{{orderDetail.goodsNum}}</span>
					</div>
					<div>
						<span>获得积分:</span>
						<span>{{orderDetail.gainedpoint}}</span>
					</div>
					<div>
						<span>下单时间:</span>
						<span>{{orderDetail.createTime}}</span>
					</div>
					<div>
						<span>备注信息:</span>
						<span>{{orderDetail.buyRemark}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '@/store/store'
	export default {
		data() {
			return {
				orderDetail:{},
				title: "买家不可使用"
			}
		},
		computed: {
			state(){
				let that=this
				return that.orderDetail.status==1?'待付款':that.orderDetail.status==2?"待使用":"已使用"
			}
		},	
		mounted(){
			let that=this
			that.orderDetail=store.state.goodDetail
		}
	}
</script>

<style lang="less">
	.order-detail {
		background-color: #F9F9F9;
		/*模块1*/
		.title {
			width: 100%;
			height: 128px;
			position: relative;
			
			/*background-color: #ff7d28;*/
			background: linear-gradient(#ff7d28, #ff9a4c);
			span {
				display: block;
				&:nth-child(1) {
					padding-top: 40px;
					padding-left: 28px;
					color: #ffffff;
					font-size: 19px;
				}
				&:nth-child(2) {
					border-radius: 3px;
					position: absolute;
					bottom: -20px;
					width: 351px;
					height: 60px;
					color: #ff7d28;
					font-size: 25px;
					text-align: center;
					line-height: 60px;
					background-color: #fff;
					left: 50%;
					margin-left: -175px;
					font-weight: bold;
				}
			}
		}
		/*模块2*/
		.rec-li {			
			.rec-li-warp {
				margin-top: 30px;
				background-color: #fff;				
				border-bottom: 1px solid #dedede;
				padding: 12px  10px;
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
					width: 176px;
					line-height: 20px;
					overflow: hidden;
					padding-left: 12px;
					box-sizing: border-box;
					margin-top: 8px;
					.tit {
						font-size: 15px;
						color: #111111;
					}
					.name {
						font-size: 12px;
						color: #999999;
					}
					.present {
						span {
							&:nth-child(1) {
								color: #111111;
								font-size: 12px;
							}
							&:nth-child(2) {
								color: #999999;
								font-size: 10px;
								margin-left: 12px;
								text-decoration: line-through;
							}
						}
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
					.dianzhan {
						width: 68px;
						height: 15px;
						color: #ffb10f;
						border: 1px solid #ffb10f;
						border-radius: 5px;
						text-align: center;
						line-height: 15px;
						font-size: 11px;
						font-family: "宋体";
					}
				}
				.rec-right {
					width: 70px;
					line-height: 24px;
					overflow: hidden;
					margin-top: 8px;
					text-align: right;
					.make {
						font-size: 10px;
						color: #4aa9fe;
						width: 40px;
						height: 15px;
						border-radius: 5px;
						border: 1px solid #4aa9fe;
						line-height: 15px;
						text-align: center;
					}
					.people {
						color: #999999;
						font-size: 12px;
					}
					.sell {
						color: #666666;
						font-size: 12px;
					}
				}
			}
			.prices {
				background-color: #fff;
				padding: 18px 12px;
				.price1,
				.price2,
				.price3,
				.price4,
				{
					display: flex;
					justify-content: space-between;
					margin-bottom: 11px;
				}
				.price1,
				.price2,
				{
					span {
						color: #999999;
						font-size: 11px;
					}
				}
				.price3,
				{
					margin-bottom: 22px;
					span {
						color: #111111;
						font-size: 13px;
					}
				}
				.price4,
				{
					margin-bottom: 0;
					span {
						color: #fd0200;
						font-size: 13px;
					}
				}
			}
		}
	
		/*订单详情*/
		.detail-order {
			background-color: #fff;
			margin-top: 8px;
			padding-bottom: 20px;
			.tit {
				font-size: 14px;
				font-weight: bold;
				color: #111111;
				padding: 20px 12px 9px 12px;
			}
			.detail-order-li {
				padding: 0px 12px 50px 12px;
				div {
					span {
						display: inline-block;
						font-size: 12px;
						color: #666666;
						margin-top: 10px;
						&:nth-child(1) {
							width: 65px;
							margin-top: 0;
						}
						&:nth-child(2) {
							margin-left: 22px;
						}
					}
				}
			}
		}
	
	}
</style>