// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({     //设置弹窗对象
      title: '你好啊',  //显示文字
      duration:3000,   //显示时长
      icon:'loading',   //设置图标
      mask:true,       //是否显示透明蒙层，防止触摸穿透
      success(){
        console.log('弹窗调用成功')
      },
      fail(){
        console.log('弹窗调用失败')
      },
      complete(){
        console.log('弹窗调用结束')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '哈哈哈',
      showCancel:true,  //是否显示取消按钮
      cancelText: '退出啦',  //取消按钮的文字，最多 4 个字符,confirmText确定按钮文本
      cancelColor: 'red',      //取消按钮的文字颜色,confirmColor
      success(res) {       //接口调用成功的回调函数
        // console.log(res)
        if(res.cancel){
          console.log('取消')
        }else{
          console.log('确定')
        }
      }
    })
  },
  handleShowLoading(){
   wx.showLoading({
     title: '加载Loading',
     mask:true
   })
   setTimeout(()=>{
     wx.hideLoading()  //调用该函数该提示框消失
   },2000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],  //按钮的文字数组，数组长度最大为 6
      itemColor: 'red',            //按钮的文字颜色
      success(res){
        console.log(res)
      }

    })
  }
})