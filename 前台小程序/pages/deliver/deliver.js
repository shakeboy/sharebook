// pages/deliver/deliver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getArticle()
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
  toDeliverArticle:function(e){
    wx.navigateTo({
      url: '/pages/toDeliverArticle/toDeliverArticle',
    })
  },
  toDeliverVideo:function(e){
    wx.navigateTo({
      url: '/pages/toDeliverVideo/toDeliverVideo',
    })
  },
  getQuery:function(e){
    console.log(e.detail.value)
    wx.setStorageSync('query', e.detail.value)
  },
  toMap:function(e){
    // wx.setStorageSync('query', "学校")
    if(wx.getStorageSync('query')==""){
      wx.showToast({
        title: '请输入搜索地址',
      })
    }else{
      wx.navigateTo({
        url: '/pages/map/map',
      })
    }
  },
  toDeliverWord:function(e){
    wx.navigateTo({
      url: '/pages/toDeliverWord/toDeliverWord',
    })
  },
  toDetail:function(e){
    console.log(e.target.dataset.item)
    wx.setStorageSync('detailInfo', e.target.dataset.item)
    wx.navigateTo({
      url: '/pages/toDetailArticle/toDetailArticle',
    })
  },
  getArticle:function(e){
    wx.request({
      url: 'http://localhost:8888/uarticle/getAllArticleById',
      method:"GET",
      data:{
        "user_id":wx.getStorageSync('userInfo').userId
      },
      success: res=>{
        console.log(res.data)
        this.setData({
          article:res.data.reverse()
        })
      }
    })
  }
})