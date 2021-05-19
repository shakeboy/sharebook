// pages/selfCenter1/selfCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avator: '',
    username: '456',
    userInfo: [],
    showDialog:false,
    weather:[],
    test:[],
    province:"",
    city:"",
    Qu:""
  },
  toggleDialog() {
    if(this.data.province==""||this.data.city==""){
      wx.showToast({
        title: '请输入省份和城市(必选)',
        icon:"none"
      })
    }else{
      wx.request({
        url: 'https://wis.qq.com/weather/common?source=xw&weather_type=forecast_1h|forecast_24h|index|alarm|limit|tips',
        method:"GET",
        header:{
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        data:{
          "province":this.data.province,
          "city":this.data.city,
          "country":this.data.Qu
        },
        success:res=>{
          this.setData({
            test:res.data.data.forecast_24h
          })
          console.log(res.data.data.forecast_24h)
        }
      })
      this.setData({
        showDialog: !this.data.showDialog
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getProvince:function(e){
    this.setData({
      province:e.detail.value
    })
  },
  getQu:function(e){
    this.setData({
      Qu:e.detail.value
    })
  },
  getCity:function(e){
    console.log(e.detail.value)
    this.setData({
      city:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
    console.log("hello")
    this.setData({
        // username:wx.getStorageSync('userInfo').userName,
        avator: wx.getStorageSync('filePath')
        // userInfo:wx.getStorageSync('userInfo')
      }),
      wx.request({
        url: 'http://localhost:8888/user/getAUserById',
        method: "GET",
        data: {
          "user_id": wx.getStorageSync('userInfo').userId
        },
        success: res => {
          // console.log(res.data)
          let user = res.data
          this.setData({
            username: user.userName,
            avator: user.userAvator,
            userInfo: user
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
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
  goToSetting: function (e) {
    wx.navigateTo({
      url: '/pages/self_setting/self_setting',
    })
    // console.log(this.data.username)
  },
  goToWriteSignature: function (e) {
    wx.navigateTo({
      url: '/pages/signature/signature',
    })
  },
  goToHistoryPhoto: function (e) {
    wx.navigateTo({
      url: '/pages/photo/photo',
    })
  },
  goToBookKing: function (e) {
    wx.navigateTo({
      url: '/pages/bookking/bookking',
    })
  }, //经典研读，书籍库
  goToGoodFriend: function (e) {
    wx.navigateTo({
      url: '/pages/goodfriend/goodfriend',
    })
  }, //好友列表
  goToBookStar: function (e) {
    wx.navigateTo({
      url: '/pages/bookstar/bookstar',
    })
  }, //书籍收藏
  goToWriteBook: function (e) {
    wx.switchTab({
      url: '/pages/deliver/deliver',
    })
  } //写文章
})