<template>
	<div class="container">
		<!--tab-->
		<div class="tab">
			<span v-for="(item,index) in tab"  @click="tabs(index)" :class="curr==index?'on':''">{{item.title}}</span>
		</div>
		
		<!--shop-->
        <div class="shop">
          <div class="shop-li" v-for="(item,index) in shop" >
             <div class="shop-li-img">
             	 <img :src="shop.img"/> 
             </div>
             <div class="shop-li-cant">
             	<p>{{item.name}}</p>
             	<p>
             		<span>销量: {{item.xl}}</span>
             		<span>库存: {{item.kc}}</span>
             	</p>
             </div>
          </div>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				curr:0,
				tab:[
				   {title:"已上架"},
				   {title:"已下架"}
				],
                shop:[
                   {name:"尚方美味自助火锅",img:"/static/images/LOGO.gif",xl:9999,kc:9999},
                   {name:"尚方美味自助火锅",img:"/static/images/LOGO.gif",xl:9999,kc:9999},
                   {name:"尚方美味自助火锅",img:"/static/images/LOGO.gif",xl:9999,kc:9999},
                ]
			}
		},
		components: {

		},

		methods: {
           tabs:function(index){            	
           	 let that = this
           	 that.curr = index
           }
		},

	}
</script>

<style scoped lang="less">
     .tab{
     	width: 100%;
     	background: #FFFFFF;
     	height: 40px;
     	display: flex;
     	justify-content: center;
     	span{
     		display:block; 
     		width:50px;
     		height: 38px;
     		color: #999999;
     		text-align: center;
     		line-height: 40px;
     		font-size: 14px;
     		&:nth-child(1){margin-right: 23px;}
     		&:nth-child(2){margin-left: 23px;}
     	}
     	.on{
     		color: #01a4bf;
     		border-bottom: 1px solid #1AAD19;
     	}
     }


	.shop{
		width: 100%;
	    padding-bottom: 40px;
		.shop-li{
				display: flex;
				align-items: center;
				padding: 12px 12px 0 12px;
				box-sizing: border-box;
			    width: 100%;
			    &:nth-child(1){
			    	padding: 20px 12px 0 12px;
			    }
			.shop-li-img{
				width: 60px;
				height: 60px;
				background-color: orange;
				margin-right: 12px;
				border-radius: 6px;
				overflow: hidden;
			}
			.shop-li-cant{
				line-height: 28px;
				p{
					&:nth-child(1){
						color: #111111;
						font-size: 15px;
						font-weight: bold;
					}
					&:nth-child(2){
						color: #666666;
						font-size: 13px;
						span{
							&:nth-child(2){
								margin-left: 35px;
							}
						}
					}
				}
			}
		}
	}
</style>