<template>
  <div class="login">
    <div class="logoimg"><span class="iconfont count">&#xe629;</span></div>
     <div class="loginwarp">
        <div class="username">
            <div class="userleft"><span class="iconfont">&#xe65e;</span></div>
            <div class="userright"><input type="text"  placeholder="请输入账号" v-model='username'  placeholder-style="font-weight: 300;color:#fff;font-size:28rpx;"/></div>
        </div>
        <div class="username">
            <div class="userleft"><span class="iconfont">&#xe679;</span></div>
            <div class="userright"><input type="text" password='true' placeholder="请输入密码" v-model='password'  placeholder-style="font-weight: 300;color:#fff;font-size:28rpx;"/></div>
        </div>
        <div class="btn" @click="login">登录</div>
    </div>
  </div>
</template> 

<script>
import Api from '@/api/api'
export default {
  data () {
    return {
      username:'admin',
      password:'111111'
    }
  },

  components: {},


  methods: {
    //会员登录
   async login(){
      let that=this;
      let data={
        userName:that.username,
        passWord:that.password
      }
      const res =await Api.userLogin(data)
      if(res.code==0){
        wx.setStorageSync('shopId',res.shopUser.shopId)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        wx.switchTab({ url: '../index/main' });
      }else{
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  mounted(){
    if(wx.getStorageSync('shopId')){
      wx.switchTab({ url: '../index/main' });
    }
    
  },
   onShareAppMessage: function () {
    return {
      title: '谷琴客户运营助手',
      desc: '谷琴客户运营助手',
      path: 'pages/Login/main'
    }
  }
}
</script>

<style lang='less'>
.logoimg{text-align: center;padding-top: 20%;
i{color: #fff;font-size: 125rpx;}
}
.count{
  font-size: 60px;
  color:#fff;
}
img{height:100%;widows: 100%;}
.login{min-height: 100vh;background:#4ab8b5;background-image: -webkit-linear-gradient(280deg, #4ab8b5, #ced7b8);}
.loginwarp{padding-top: 40rpx;}
.username{width: 70%;line-height: 65rpx;;margin:30rpx auto 0;border:1px solid rgba(255, 255, 255, 0.37);
display: flex;justify-content: space-between;

.userleft{text-align: center;color: #fff;}
}
.userleft{width: 15%;}
.userright{width: 85%;}
.userright input{height:65rpx;color: #fff;font-weight: 100;font-size: 32rpx;}

.btn{margin:45rpx auto 0;width: 70%;background: #d8e9d6;color:#7bb39a;line-height: 68rpx;text-align: center;border-radius: 10rpx;}
</style>
