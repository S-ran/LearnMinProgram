// pages/home/home.js
//getApp()获取app产生的实列对象
const app = getApp()
console.log(app.Date.name+','+app.Date.age)

Page({
   // --------------------------------数据------------------------------------
  data: {
    list:null
  },
// -----------------------------生命周期函数---------------------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({//加载时请求数据并展示
      url: 'http://106.54.54.237:8000/api/hy/home/multidata',
      success:(res) =>{
        console.log(res)
        const date = res.data.data.recommend.list;     
        this.setData({
          list:date
        })
         console.log(this.data.list)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // -----------------------------事件监听---------------------------------
  getuser(event) {//点击时获取信息
    console.log(event)
  },
  // -----------------------------其他事件监听---------------------------------
  //监听页面滚动
  onPageScroll(obj) {
    //  console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('上拉加载更多')
  },
  //监听顶部下拉
  onPullDownRefresh() {
      console.log('下拉刷新')
  },

})