<template>
	<div class="container">
		<div class="img">
			<img  src="/static/images/LOGO.gif"/>
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
					<span>今日收益</span>
					<span>{{amount}}</span>
				</p>
				<p></p>
			</div>
		</div>
		<div class="section">
			<picker
			mode="date"
			:value="date"
			bindchange="bindDateChange"
			>
			<div class="chooseDate">
				查看更多收益
			</div>
		</picker>
	</div>
</div>
</template> 

<script>
	import Api from '@/api/api'
	import NumberAnimate from "@/utils/NumberAnimate.js"
	export default {
		data() {
			return {
				allAmount:0,
				amount:0,
				num2:'',
			}
		},
		components: {

		}, 

		methods: {
			animateAmount(endvalue){
				let that=this
				let amount = new NumberAnimate({
					from:endvalue,
					speed:2000,
					refreshTime:100,
					decimals:2,
					onUpdate:()=>{
					 that.amount=amount.tempValue
					},
					onComplete:()=>{

					}
				});
			},
			animateAllAmount(endvalue){
				let that=this
				let allAmount = new NumberAnimate({
					from:endvalue,
					speed:2000,
					refreshTime:100,
					decimals:2,
					onUpdate:()=>{
					 that.allAmount=allAmount.tempValue
					},
					onComplete:()=>{

					}
				});
			}		
		},
		mounted(){
			let params={}
			let that=this
			params.shopId=wx.getStorageSync('shopId')
			params.currentday= (new Date()).getTime();
			Api.orderAmount(params).then(function(res){
				if(res.code==0){
					that.animateAmount(100.22)
					that.animateAllAmount(300.44)
				}
			})
		}

	}
</script>

<style scoped lang="less">
	.img{
		margin: 0 auto;
		width: 90px;
		height: 110px;
		position: absolute;
		top:20px;
		left: 50%;
		margin-left: -45px;
	}
	.earnings{
		margin-top: 85px;
		width: 100%;
		.earnings-top,.earnings-bottom{
			position: relative;
			z-index: 99;
			width: 351px;
			height: 154px;
			margin:  0 auto;
			p{
				display: block;
				&:nth-child(1){
					position: absolute;
					top: 0px;
			        left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(#047df9,#4aa2fa);
					border-radius: 6px;
					span{
						display: block;
						color:#ffffff; 
						text-align: center;
						
						&:nth-child(1){
							font-size: 22px;
						    margin-top: 45px;
						    line-height: 1;	
						}
						&:nth-child(2){
							font-size: 33px;
							line-height: 54px;
						}
					}
				}
				&:nth-child(2){
					width: 80%;
				    height: 100%;
					background: orange;
					margin: auto;
					top: 0px;
					left: 0;
					box-shadow: 0 5px 15px rgba(71,160,250,.7);
				}
			}
		}
		.earnings-bottom{
			margin-top: 20px;
		}
	}
		.section{
			position: relative;
			z-index: 99;
			width: 351px;
			height: 44px;
			margin:  20px auto 51px auto;
			.chooseDate{
					position: absolute;
					top: 0px;
			        left: 0;
					width: 100%;
					height: 100%;
					background:#c8e1fa;
					border-radius: 6px;
					text-align: center;
					line-height:44px;
					color: #067ef9;
					font-size: 15px;
				}
		}
</style>