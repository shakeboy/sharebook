function getSignature(param) {
  // 请求历史签名 类似于ajax
  wx.request({
    url: 'http://localhost:8888/user/getSignature',
    method: "GET",
    data: {
      user_id: wx.getStorageSync('userInfo')["userId"],
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    success: res => {
      console.log(res.data)
      this.setData({
        signature: res.data.reverse()
      })
    },
    fail: res => {
      console.log(res.data)
      wx.showToast({
        title: '请求失败',
        duration: 2000
      })
    }
  })
}
module.exports = {
  getSignature: getSignature,
}