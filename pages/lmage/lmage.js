// pages/lmage/lmage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },
  onclick(){
    //启用系统api，让用户选择本地图片或拍照
    wx.chooseImage({
      success: (res)=> {
        const list = res.tempFilePaths[0];
        this.setData({
          src:list
        })
      },
    })
  },
  onload(){
    console.log('ok')
  }
})