var util=require('./../common/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    create_time:'',
    user_name:''
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
  formSubmit:function(e){
    console.log(e.detail.value)
    // 获取值,封装成一个对象
    let ubook = e.detail.value
    // 提交发布
    wx.request({
      url: 'http://localhost:8888/ubook/writeUBook',
      method:"POST",
      data:{
        "ubook":JSON.stringify(ubook),
        "user_id":wx.getStorageSync('userInfo').userId
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        wx.showToast({
          title: '发表成功'
        })
      },
      fail:function(e){

      }
    })
    // 设置时间 
    this.setData({
      user_name:wx.getStorageSync('userInfo').userName,
      create_time:util.formatTime(new Date())
    })
  },
})