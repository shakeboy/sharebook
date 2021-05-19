// pages/bookstar/bookstar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrBook: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refreshStar()
  },
  refreshStar:function(e){
    let that = this
    // 获取用户收藏地书籍编号
    wx.request({
      url: 'http://localhost:8888/book/getStarId',
      method: "get",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data: {
        "user_id": wx.getStorageSync('userInfo').userId,
      },
      success: res => {
        let userId = wx.getStorageSync('userInfo').userId
        let arrStarBook = []
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].userId == userId) {
            wx.request({
              url: 'http://localhost:8888/book/getBookById',
              method: "get",
              header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              },
              data: {
                "book_id": res.data[i].bookId
              },
              success: res => {
                arrStarBook.push(res.data)
                this.setData({
                  arrBook:arrStarBook
                })
              }
            })
            console.log(this.data.arrBook)
          }
          // console.log(arrStarBook+"sss")
        }
        this.setData({
          arrBook:arrStarBook
        })
        console.log(that.data.arrBook+"shakeboy")
      }
    })
  },
  toBookDetail:function(e){
    console.log(e.currentTarget.dataset.item)
    wx.setStorageSync('bookdetail', e.currentTarget.dataset.item)
    wx.setStorageSync('cancelStar', "取消")
    wx.navigateTo({
      url: '/pages/todetailbook/todetailbook',
    })
  },
  // cancelBook:function(e){
  //   wx.request({
  //     url: 'http://localhost:8888/book/cancelStar',
  //     method:"POST",
  //     header: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  //     },
  //     data:{
  //       "user_id":wx.getStorageSync('userInfo').userId,
  //       "book_id":this.data.item.bookId
  //     },
  //     success: res=>{
  //       console.log(res.data)
  //       if(res.data==false){
  //         wx.showToast({
  //           title: '已经取消收藏过了，请不要重复取消',
  //           duration: 2000,
  //           icon: "none",
  //         })
  //       }else{
  //         wx.showToast({
  //           title: '取消成功',
  //           duration:2000
  //         })
  //       }
  //     }
  //   })
  // },
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
    this.refreshStar()
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