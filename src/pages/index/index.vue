<template>
	<div class="container">
		<div class="logo"><img src="/static/images/guqin.png" /></div>
		<swiper vertical @change='stpp' style="height: 100vh;">
			<swiper-item>
				<div class="img">
					<img src="/static/images/LOGO.gif" />
				</div>
				<div class="earnings">
					<div class="earnings-top">
						<p>
							<span>总收益</span>
							<span>{{allAmount}}</span>
						</p>
						<p></p>
					</div>
					<div class="earnings-bottom">
						<p>
							<span>{{date}}</span>
							<span>{{amount}}</span>
						</p>
						<p></p>
					</div>
				</div>
				<div class="section">
					<picker mode="date" :value="date" @change="bindDateChange">
						<div class="chooseDate">
							查看更多收益
						</div>
					</picker>
				</div>
				<div style="width: 100%; height: 300px;background-color:#FFFFFF;position: absolute;bottom: 0;"></div>
			</swiper-item>
		</swiper>
	</div>
</template>
<script>
	import Api from '@/api/api'
	import NumberAnimate from "@/utils/NumberAnimate.js"
	export default {
		data() {
			return {
				allAmount: 0,
				amount: 0,
				num2: '',
				date:'今日收益'
			}
		},
		components: {

		},

		methods: {
			animateAmount(endvalue) {
				let that = this
				let amount = new NumberAnimate({
					from: endvalue,
					speed: 2000,
					refreshTime: 100,
					decimals: 2,
					onUpdate: () => {
						that.amount = amount.tempValue
					},
					onComplete: () => {

					}
				});
			},
			bindDateChange(e) {
				let time="24:00"
				let that=this
				that.date=e.mp.detail.value
				var stringTime =that.date+ ' ' + time;
				stringTime=stringTime.replace(/-/g, '/');
				var timestamp2 = Date.parse(new Date(stringTime));
				that.getorderAmount(timestamp2)
			},
			animateAllAmount(endvalue) {
				let that = this
				let allAmount = new NumberAnimate({
					from: endvalue,
					speed: 2000,
					refreshTime: 100,
					decimals: 2,
					onUpdate: () => {
						that.allAmount = allAmount.tempValue
					},
					onComplete: () => {

					}
				});
			},
			getorderAmount(currentday){
				let params = {}
				let that = this
				wx.showLoading({title: '加载中',})
				params.shopId = wx.getStorageSync('shopId')
				params.currentday = currentday;
				Api.orderAmount(params).then(function(res) {
					if(res.code == 0) {
						wx.hideLoading()
						that.animateAmount(res.amount)
						that.animateAllAmount(res.allAmount)
					}
				})
			}
		},
		mounted() {
			let that=this
			let nowTime=(new Date()).getTime()
			that.getorderAmount(nowTime)
		}

	}
</script>

<style scoped lang="less">
		.logo {
		width: 138px;
		height: 42px;
		position: fixed;
		bottom: 50px;
		left: 50%;
		margin-left: -69px;
	}
	
	.img {
		margin: 0 auto;
		width: 90px;
		height: 110px;
		position: absolute;
		top: 20px;
		left: 50%;
		margin-left: -45px;
	}
	
	.earnings {
		margin-top: 85px;
		width: 100%;
		.earnings-top,
		.earnings-bottom {
			position: relative;
			z-index: 99;
			width: 351px;
			height: 154px;
			margin: 0 auto;
			p {
				display: block;
				&:nth-child(1) {
					position: absolute;
					top: 0px;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(#047df9, #4aa2fa);
					border-radius: 6px;
					span {
						display: block;
						color: #ffffff;
						text-align: center;
						&:nth-child(1) {
							font-size: 22px;
							margin-top: 45px;
							line-height: 1;
						}
						&:nth-child(2) {
							font-size: 33px;
							line-height: 54px;
						}
					}
				}
				&:nth-child(2) {
					width: 80%;
					height: 100%;
					background: orange;
					margin: auto;
					top: 0px;
					left: 0;
					box-shadow: 0 5px 15px rgba(71, 160, 250, .7);
				}
			}
		}
		.earnings-bottom {
			margin-top: 20px;
		}
	}

			.section {
				position: relative;
				z-index: 99;
				width: 351px;
				height: 44px;
				margin: 20px auto 51px auto;
				.chooseDate {
					position: absolute;
					top: 0px;
					left: 0;
					width: 100%;
					height: 100%;
					background: #c8e1fa;
					border-radius: 6px;
					text-align: center;
					line-height: 44px;
					color: #067ef9;
					font-size: 15px;
				}
			
			}
		
</style>