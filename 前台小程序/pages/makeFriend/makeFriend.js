// pages/makeFriend/makeFriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    article:[]
  },
  toDetail:function(e){
    console.log(e.target.dataset.item)
    wx.setStorageSync('detailInfo', e.target.dataset.item)
    wx.navigateTo({
      url: '/pages/toDetailArticle/toDetailArticle',
    })
  },
  addFriend:function(e){
    wx.request({
      url: 'http://localhost:8888/friend/addRequest',
      method:"GET",
      data:{
        "user_ido":wx.getStorageSync('userInfo').userId,
        "user_idt":wx.getStorageSync('user_id'),
        "message_content":"请求加好友"
      },
      header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        if(res.data==true){
          wx.showToast({
            title: '请求成功',
            duration:2000
          })
        }else{
          wx.showToast({
            title: '您已请求过，或者你们已经是好友了，去好友列表看看吧',
            duration:2000,
            icon:"none"
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取id
    let user_id = wx.getStorageSync('user_id')
    console.log(user_id)
    // 根据id查询用户信息
    wx.request({
      url: 'http://localhost:8888/user/getAUserById',
      method:"GET",
      data:{
        "user_id":user_id
      },
      header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        this.setData({
          userInfo:res.data
        })
        console.log(this.data.userInfo)
      }
    }),
    wx.request({
      url: 'http://localhost:8888/uarticle/getAllArticleById',
      method:"GET",
      data:{
        "user_id":user_id
      },
      header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        console.log(res.data)
        this.setData({
          article:res.data.slice(0,5)
        })
        console.log(this.data.article)
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

  }
})