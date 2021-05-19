// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:8888/photo/getAllPhotoById',
      method:"POST",
      header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:{
        "user_id":wx.getStorageSync('userInfo').userId
      },
      success:res=>{
        console.log(res)
        this.setData({
          photos:res.data.reverse()
        })
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
  toUse:function(e){
    console.log(e.target.dataset.item)
    wx.request({
      url: 'http://localhost:8888/photo/toUse',
      method:"POST",
      data:{
        "uphoto_id":e.target.dataset.item.uphotoId,
        "uphoto_address":e.target.dataset.item.uphotoAddress,
        "user_id":e.target.dataset.item.userId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        wx.showToast({
          title: '使用成功',
        })
      }
    })
  },
  toDelete:function(e){
    console.log(e.target.dataset.item)
    wx.request({
      url: 'http://localhost:8888/photo/toDelete',
      method:"POST",
      data:{
        "uphoto_id":e.target.dataset.item.uphotoId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        wx.showToast({
          title: '删除成功',
        })
        this.onLoad()
      }
    })
  }
})