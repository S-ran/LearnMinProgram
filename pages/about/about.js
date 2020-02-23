// pages/about/about.js
Page({
  globalData:{
    token:''
  },
  onLoad: function (options) {
    //先从缓存中取出token
    const token = wx.getStorageSync('token')
    //判断token是否有值
    if(token&&token.length!==0){
      //已经有token了验证token是否过期
      this.check(token)
    }else{this.logo()}
  },
  //验证操作
  check(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success(res){
        if(!res.data.errCode){
          this.globalData.token = token;
        }
      },
      fail(err) {
        this.logo()
      }
    })
  },
    //登陆操作
    logo(){
      wx.login({
        success:(res)=>{
          console.log(res)
          //获取code
          const code = res.code;

          //2.将code发送给服务器
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            data:{
              code
            },
            success:(res) =>{
              console.log(res)
              //1.取出token
              const token = res.data.token;
              //2.将token保存在globalData中
              this.globalData.token = token;
              //3.进行本地存储
              wx.setStorageSync('token', token)
        
            }
          })
        }
      })
    }
  
})