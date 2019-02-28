<template>
	<div class="container">
		<div class="logo"><img src="/static/images/guqin.png"/></div>
		<swiper vertical  @change='stpp' style="height: 100vh;">
			   <swiper-item>
			<div class="img">
				<img src="/static/images/LOGO.gif" />
			</div>
			<div class="earnings">
				<div class="earnings-top">
					<p>
						<span>总收益</span>
						<span>84566</span>
					</p>
					<p></p>
				</div>
				<div class="earnings-bottom">
					<p>
						<span>今日收益</span>
						<span>3424</span>
					</p>
					<p></p>
				</div>
			</div>
			<div  class="more">
				<p>查看更多收益</p>
				<p></p>
			</div>
			<div style="width: 100%; height: 300px;background-color:#FFFFFF;position: absolute;bottom: 0;"></div>
			  </swiper-item>
		</swiper>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},

		methods: {
		
			stpp:function(){
				console.log(1111)
			}
		},

	}
</script>

<style scoped lang="less">
.logo{
	width:138px ;height: 42px;position: fixed;bottom: 50px;
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
	
	.more {
		position: relative;
		z-index: 99;
		width: 351px;
		height: 44px;
		margin: 20px auto 51px auto;
		font-weight: bold;
		p {
			display: block;
			&:nth-child(1) {
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
				span {}
			}
			&:nth-child(2) {
				width: 80%;
				height: 100%;
				background: #c8e1fa;
				margin: auto;
				top: 0px;
				left: 0;
				box-shadow: 0 5px 10px rgba(6, 126, 249, .3);
			}
		}
	}
</style>