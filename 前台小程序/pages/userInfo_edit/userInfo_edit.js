// pages/userInfo_edit/userInfo_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // wx.getStorageSync('fileInfo')!=''?wx.getStorageSync('fileInfo'):''
    filePath: 'http://localhost:8888/uploadFile/0fa956bc-1967-4354-8ba9-7ad925d39f8bLrhw3IHaOQoTbbc03a7d1c3c05b1a594c80a0a56f726.jpg',
    user_avator:'',
    user_role:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载页面")
    wx.request({
      url: 'http://localhost:8888/user/getAUserById',
      method:"GET",
      data:{
        "user_id":wx.getStorageSync('userInfo').userId
      },
      success: res=>{
        console.log(res.data)
        let user = res.data
        this.setData({
          user_avator:user.userAvator
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
    wx.showNavigationBarLoading()
    console.log("正在下拉刷新")
    console.log("请求完成",this.data.filePath)
    wx.setStorageSync('filePath', this.data.filePath)
    this.updateData() // 重新加载数据
    setTimeout(function(){
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },2000)
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
    this.onShow()
  },
  updateData:function(){
    console.log(wx.getStorageSync('filePath'))
    this.setData({
      user_avator:wx.getStorageSync('filePath'),
    })
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
  imgUpload: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:res=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'http://localhost:8888/user/upload', //此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
            'Authorization': 'Bearer ..' //若有token，此处换上你的token，没有的话省略
          },
          formData: {
            'user_id': wx.getStorageSync('userInfo').userId //其他额外的formdata，可不写
          },
          success: res=> {
            this.setData({
              filePath:res.data
            }),
            wx.showToast({
              title: '上传成功',
              duration:2000
            })
          },
          fail: function (res) {
            console.log('fail');
          },
          complete:res=>{
            console.log("请求完成",this.data.filePath)
            this.setData({
              filePath:this.data.filePath
            })
          }
        })
      }
    })
  },
  formSubmit:function(res){
    // 1.获取数据
    console.log(res.detail)
    // res.detail.value
    let user_name=res.detail.value.user_name
    let user_password=res.detail.value.user_password
    console.log(user_name,user_password,this.data.user_role)
    // 2.发送请求进行修改
    wx.request({
      url: 'http://localhost:8888/user/updateUser',
      method:"POST",
      data:{
        "user_name":user_name,
        "user_password":user_password,
        "user_id":wx.getStorageSync('userInfo').userId
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:res=>{
        wx.showToast({
          title: '修改成功',
          duration:2000
        })
      }
    })
  },
  // 自动触发
  chooseRole:function(res){
    console.log(res.detail.value)
    this.setData({
      user_role:res.detail.value
    })
  }
})