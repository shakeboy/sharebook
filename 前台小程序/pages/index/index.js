// pages/index1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ubook: [],
    keyvalue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllUBook()
  },
  // 获取所有书籍
  getAllUBook: function (e) {
    wx.request({
      url: 'http://localhost:8888/ubook/getAllUBook',
      method: "GET",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          ubook: res.data.reverse().slice(0,10)
        })
      }
    })
  },
  keyValueSearch: function (e) {
    // 获取文本框输入的值
    let keyvalue = e.detail.value
    wx.request({
      url: 'http://localhost:8888/ubook/getAllUBookByKeyValue',
      method: "GET",
      data: {
        "keyValue": keyvalue
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        this.setData({
          ubook: res.data
        })
      }
    })
  },
  toDetail: function (e) {
    console.log(e)
    console.log(e.target.dataset.item)
    wx.setStorageSync('detailUBook', e.target.dataset.item)
    wx.navigateTo({
      url: '/pages/detailUBook/detailUbook',
    })
  },
  ubookGood: function (e) {
    console.log(e.target.dataset.item.ubookId)
    console.log(e.target.dataset.item.ubookGood)
    let ubook = {
      "ubook_id": e.target.dataset.item.ubookId,
      "ubook_good": e.target.dataset.item.ubookGood,
      "ubook_comment": e.target.dataset.item.ubookComment,
      "ubook_transfer": e.target.dataset.item.ubookTransfer,
    }
    wx.request({
      url: 'http://localhost:8888/ubook/ubookGood',
      method: "POST",
      data: {
        "ubook_id": e.target.dataset.item.ubookId,
        "ubook_good": e.target.dataset.item.ubookGood,
        "ubook": JSON.stringify(ubook)
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        this.getAllUBook()
      }
    })
  },
  ubookTransfer: function (e) {
    console.log(e.target.dataset.item.ubookTransfer)
    console.log(e.target.dataset.item.ubookId)
    console.log(e.target.dataset.item.ubookGood)
    let ubook = {
      "ubook_id": e.target.dataset.item.ubookId,
      "ubook_good": e.target.dataset.item.ubookGood,
      "ubook_comment": e.target.dataset.item.ubookComment,
      "ubook_transfer": e.target.dataset.item.ubookTransfer,
    }
    wx.request({
      url: 'http://localhost:8888/ubook/ubookTransfer',
      method: "POST",
      data: {
        "ubook_id": e.target.dataset.item.ubookId,
        "ubook_good": e.target.dataset.item.ubookGood,
        "ubook": JSON.stringify(ubook)
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        this.getAllUBook()
      }
    })
  },
  ubookComment: function (e) {
    console.log(e.target.dataset.item.ubookComment)
    console.log(e.target.dataset.item.ubookTransfer)
    console.log(e.target.dataset.item.ubookId)
    console.log(e.target.dataset.item.ubookGood)
    let ubook = {
      "ubook_id": e.target.dataset.item.ubookId,
      "ubook_good": e.target.dataset.item.ubookGood,
      "ubook_comment": e.target.dataset.item.ubookComment,
      "ubook_transfer": e.target.dataset.item.ubookTransfer,
    }
    wx.request({
      url: 'http://localhost:8888/ubook/ubookComment',
      method: "POST",
      data: {
        "ubook_id": e.target.dataset.item.ubookId,
        "ubook_good": e.target.dataset.item.ubookGood,
        "ubook": JSON.stringify(ubook)
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: res => {
        console.log(res.data)
        this.getAllUBook()
      }
    })
  },
  toAddFriend: function (e) {
    console.log(e.target.dataset.item.userId)
    let user_id = e.target.dataset.item.userId
    wx.setStorageSync('user_id', user_id)
    console.log(user_id)
    console.log(wx.getStorageSync('userInfo').userId)
    if (user_id == wx.getStorageSync('userInfo').userId) {
      wx.switchTab({
        url: '/pages/selfCenter/selfCenter',
      })
      wx.removeStorageSync('user_id')
    } else {
      // 去对应用户主页
      wx.navigateTo({
        url: '/pages/makeFriend/makeFriend',
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
    this.getAllUBook()
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