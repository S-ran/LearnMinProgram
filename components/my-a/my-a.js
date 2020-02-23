Component({
//---------------让使用者可以传入数据---------------
  properties: {
  },
//---------------定义组件内的数据---------------
  data: {
    message:null
  },
//---------------用于定义组件内的函数---------------
  methods: {
  },
//---------------定义组件的配置选项---------------
//multipleSlots：在使用具名插槽时需要设置为true
//styleIsolation：设置样式的隔离方式
options(){
  multipleSlots:true
},
//---------------外界给组件传入额外的样式---------------
//externalClasses:['titleclass'] //[要传递的样式名]
externalClasses: [],

//---------------可以监听properties/data的改变---------------
observers:{
  message:function(newVal){
    console.log(newVal)
  }
},

////---------------组件中监听生命函数---------------
//1.监听所在页面的生命周期
pageLifetimes:{
  show() { console.log('监听页面显示时')},
  hide() { console.log('监听页面隐藏时') },
  resize() { console.log('监听页面尺寸改变时') }
},
//2.监听本身的生命周期
lifetimes:{
  created() { console.log('监听组件创建时') },
  attached() { console.log('监听组件被添加到页面时') },
  ready() { console.log('监听组件渲染出来时') },
  moved() { console.log('监听组件被移到另一个节点时') },
  detached() { console.log('监听组件被移除时') },
}
})
