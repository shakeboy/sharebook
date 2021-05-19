// pages/goodfriend/goodfriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friends: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user_id = wx.getStorageSync('userInfo').userId
    wx.request({
      url: 'http://localhost:8888/user/getFriendList',
      method: "GET",
      data: {
        "user_id": user_id,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        let friends = res.data
        let users=[]
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].userIdo == user_id) {
            wx.request({
              url: 'http://localhost:8888/user/getAUserById',
              method: "GET",
              data: {
                "user_id": res.data[i].userIdt,
              },
              header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              },
              success:res=>{
                users.push(res.data)
                console.log(res.data+"1")
                this.setData({
                  friends:users
                })
              }
            })
          } else{
            wx.request({
              url: 'http://localhost:8888/user/getAUserById',
              method: "GET",
              data: {
                "user_id": res.data[i].userIdo,
              },
              header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              },
              success:res=>{
                users.push(res.data)
                console.log(res.data+"2")
                this.setData({
                  friends:users
                })
              }
            })
          }   
        }

        console.log(users)
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