// components/my-shop/my-shop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array, //传入类型
      value: "无", //默认值
      observer: function (newval, nowval) {
        //(新值，旧值)
      }
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      isactive:0,
      number:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onactive(e){
      const index = e.currentTarget.dataset.index
     this.setData({
       isactive: index
     })
      this.triggerEvent('itemclick',{index,title: this.properties.title[index]},{})
    },
    Jia(){
      this.setData({
        number:this.data.number+1
      })
    }
  }
})
