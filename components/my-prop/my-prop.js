// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String, //传入类型
      value:"啊哈", //默认值
      observer:function(newval,nowval){
        //(新值，旧值)
      }
    }
  },
  externalClasses:['titleclass'],
  methods:{
    onclick(){
      this.triggerEvent('ontap',{},{})
    }
  }
 
})
