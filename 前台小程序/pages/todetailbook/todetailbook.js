// pages/todetailbook/todetailbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[],
    cancel:"",
    cancelStar:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item:wx.getStorageSync('bookdetail'),
      cancelStar:wx.getStorageSync('cancelStar')
    })
  },
  starBook:function(e){
    wx.setStorageSync('cancelStar', "")
    console.log(this.data.item)
    wx.request({
      url: 'http://localhost:8888/book/star',
      method:"POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:{
        "user_id":wx.getStorageSync('userInfo').userId,
        "book_id":this.data.item.bookId
      },
      success: res=>{
        console.log(res.data)
        if(res.data==false){
          wx.request({
            url: 'http://localhost:8888/book/cancelStar',
            method:"POST",
            header: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data:{
              "user_id":wx.getStorageSync('userInfo').userId,
              "book_id":this.data.item.bookId
            },
            success:res=>{
              console.log(res.data)
            }
          })
          wx.showToast({
            title: '取消收藏成功',
            duration: 2000,
            icon: "none",
          })
          this.setData({
            cancel:"",
            cancelStar:""
          })
        }else{
          this.setData({
            cancel:"取消",
            cancelStar:""
          })
          wx.showToast({
            title: '收藏成功',
            duration:2000
          })
        }
      }
    })
    this.onShow()
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

  }
})