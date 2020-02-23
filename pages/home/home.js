// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAction:false,
    nowTime:new Date().toLocaleString(),
    num:0,
    counter:0
  },
  //--------------input显示或不显示---------
  onclick(){
    this.setData({
      isAction:!this.data.isAction
    })
  },
  //--------------失焦清空---------
   onclear(e) {
      e.detail.value=''
  },
  //--------------获取时间---------
  onLoad(){//生命
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
//--------------改变成绩---------
  oninput(e){ 
    console.log(e)
    this.setData({
      num:e.detail.value
    })
  },
  //--------------监听常用事件---------
  o(){
    console.log('0000')
  },
  onevent(e){
    console.log(e)
  },
  /*******事件监听*****************/
  j(){
    console.log('3')
  },
  j1() {
    console.log('2')
  },
  j2() {
    console.log('1')
  },
  h(){
    console.log('c')
  },
  h1() {
    console.log('b')
  },
  h2() {
    console.log('a')
  },
  //--------------接收发射的组件事件------------
  ontap(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})