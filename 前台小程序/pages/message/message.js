// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personWhoRequest: [],
    isShow: "",
    close_open: "打开好友请求管理"
  },
  handleRequest: function (e) {
    if (this.data.close_open == "打开好友请求管理") {
      this.setData({
        isShow: "yes",
        close_open: "关闭好友请求管理"
      })
    } else {
      this.setData({
        isShow: "",
        close_open: "打开好友请求管理"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessageById()
  },
  getMessageById: function (e) {
    wx.request({
      url: 'http://localhost:8888/friend/getMessageById',
      method: "GET",
      data: {
        "user_idt": wx.getStorageSync('userInfo').userId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        let personWhoRequest = []
        if(res.data.length<1){
          this.setData({
            personWhoRequest:[]
          })
        }
        // 将查到的数据通过ido获取是谁发来的请求进行渲染
        for (let i = 0; i < res.data.length; i++) {
          // 请求者id
          let userIdo = res.data[i].userIdo
          // 去查询他的相关信息
          wx.request({
            url: 'http://localhost:8888/user/getAUserById',
            method: "GET",
            data: {
              "user_id": userIdo,
            },
            header: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            success: res => {
              // 获取的每个用户信息
              // console.log(res.data)
              personWhoRequest.push(res.data)
              this.setData({
                personWhoRequest: personWhoRequest
              })
            }
          })
        }
        // 测试打印结果
        console.log(personWhoRequest)

      }
    })

  },
  response: function (e) {
    let response = e.currentTarget.dataset.response
    let user_ido = e.currentTarget.dataset.user_ido
    console.log(e.currentTarget.dataset.response)
    console.log(user_ido)
    if (response == "yes") {
      // 加好友，写入好友列表，删除消息记录
      wx.request({
        url: 'http://localhost:8888/friend/add',
        method: "GET",
        data: {
          "user_ido":user_ido,
          "user_idt": wx.getStorageSync('userInfo').userId,
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success:res=>{
          console.log(res.data)
          wx.showToast({
            title: '加好友成功',
            duration:2000
          })
          // this.getMessageById()
        }
      })
    } else {
      // 加好友失败，删除消息记录
      wx.request({
        url: 'http://localhost:8888/friend/addNo',
        method: "GET",
        data: {
          "user_ido":user_ido,
          "user_idt": wx.getStorageSync('userInfo').userId,
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success:res=>{
          wx.showToast({
            title: '拒绝成功',
            duration:2000
          })
        }
      })
    }
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
    this.getMessageById()
    this.onShow()
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