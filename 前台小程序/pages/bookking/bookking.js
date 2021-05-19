// pages/bookking/bookking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend:[],
    isred1:"no",
    isred2:"no",
    isred3:"no",
    isred4:"no",
    isred5:"no",
    isred6:"no",
    isred7:"no",
    keyvalue:''
  },
  toCanlendar:function(e){
    wx.navigateTo({
      url: '/pages/calendar/calendar',
    })
  },
  toStar:function(e){
    wx.navigateTo({
      url: '/pages/bookstar/bookstar',
    })
  },
  refreshByType:function(e){
    wx.request({
      url: 'http://localhost:8888/book/searchByType',
      method:"GET",
      data:{
        "book_type":this.data.book_type
      },
      success: res=>{
        this.setData({
          recommend:res.data
        })
      }
    })
  },
  isred1:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"",
      isred2:"no",
      isred3:"no",
      isred4:"no",
      isred5:"no",
      isred6:"no",
      isred7:"no",
      book_type:"文学"
    })
    this.refreshByType()
  },
  isred2:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"",
      isred3:"no",
      isred4:"no",
      isred5:"no",
      isred6:"no",
      isred7:"no",
      book_type:"计算机"
    })
    this.refreshByType()
  },
  isred3:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"no",
      isred3:"",
      isred4:"no",
      isred5:"no",
      isred6:"no",
      isred7:"no",
      book_type:"神话"
    })
    this.refreshByType()
  },
  isred4:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"no",
      isred3:"no",
      isred4:"",
      isred5:"no",
      isred6:"no",
      isred7:"no",
      book_type:"小说"
    })
    this.refreshByType()
  },
  isred5:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"no",
      isred3:"no",
      isred4:"no",
      isred5:"",
      isred6:"no",
      isred7:"no",
      book_type:"诗歌"
    })
    this.refreshByType()
  },
  isred6:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"no",
      isred3:"no",
      isred4:"no",
      isred5:"no",
      isred6:"",
      isred7:"no",
      book_type:"名著"
    })
    this.refreshByType()
  },
  isred7:function(e){
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    this.setData({
      isred1:"no",
      isred2:"no",
      isred3:"no",
      isred4:"no",
      isred5:"no",
      isred6:"no",
      isred7:"",
      book_type:"戏剧"
    })
    this.refreshByType()
  },
  getQuery:function(e){
    console.log(e.detail.value)
    this.setData({
      keyvalue:e.detail.value
    })
    this.toQuery()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTenBook()
  },
  getTenBook:function(e){
    wx.request({
      url: 'http://localhost:8888/book/getAllBooks',
      method:"GET",
      data:{
      },
      success: res=>{
        // console.log(res.data)
        this.setData({
          recommend:res.data.slice(0,10)
        })
        console.log(this.data.recommend)
      }
    })
  },
  toBookDetail:function(e){
    console.log(e.currentTarget.dataset.item)
    wx.setStorageSync('bookdetail', e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/pages/todetailbook/todetailbook',
    })
  },
  toQuery:function(e){
    console.log("hello")
    wx.request({
      url: 'http://localhost:8888/book/search',
      method:"GET",
      data:{
        "value":this.data.keyvalue
      },
      success: res=>{
        if(this.data.keyvalue!=""){
          console.log(res.data)
          this.setData({
            recommend:res.data
          })
          console.log(this.data.recommend)
          this.onShow()
        }else{
          this.getTenBook()
        }
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