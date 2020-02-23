// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  itemclick(e){
    console.log(e) 
  },
  hand(){
    //获取组件对象
    const my_cpn = this.selectComponent('#shop')
    // console.log(my_cpn)
    //通过setData修改组件内的值，不推荐
    // my_cpn.setData({
    //   number: my_cpn.data.number+1
    // })
    my_cpn.Jia()
  }
})