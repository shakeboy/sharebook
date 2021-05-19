// pages/toDeliverArticle/toDeliverArticle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
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
  formSubmit:function(res){
    // 1.获取数据
    console.log(res.detail)
    // res.detail.value
    let uarticle_name=res.detail.value.title
    let uarticle_content=res.detail.value.content
    console.log(uarticle_name,uarticle_content,this.data.user_id)
    // 2.发送请求进行修改
    wx.request({
      url: 'http://localhost:8888/uarticle/writeArticle',
      method:"POST",
      data:{
        "uarticle_name":uarticle_name,
        "uarticle_content":uarticle_content,
        "user_id":wx.getStorageSync('userInfo').userId
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        wx.showToast({
          title: '发表成功',
        })
      }
    })
  },
})