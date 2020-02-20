Page({
  data:{
    name:'Codewhy',
    students:[
      {name:'张三',age:13},
      {name:'李四',age:18}
    ],
    counter:0
  },
  onClick(){
    //错误修改data方法
    // this.data.counter++;
    //正确的修改方法
    this.setData({
      counter:this.data.counter++
    })
  }
})