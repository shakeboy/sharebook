const time = require('./../common/utils.js')
const signature = require('./../common/signature.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  lifetimes: {
    ready: function () {
      this.getSignature()
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    signature: [],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    start:res=>{
      console.log("开始")
    },
    move:res=>{
      wx.showToast({
        title: '正在刷新',
      })
    },
    end:function(res){
      console.log(this)
      this.getSignature(res)
    },
    getSignature:function(res){
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
          // 数据传递
          this.setData({
            signature: res.data.reverse()
          })
          this.data.signature.forEach(element => {
            // 利用时间戳转化
            console.log(time.formatTimeTwo(element.createTime, 'Y/M/D h:m:s'))
            element.createTime=time.formatTimeTwo(element.createTime, 'Y/M/D h:m:s')
            console.log(element.createTime)
          });
          this.setData({
            signature: res.data.reverse()
          })
          console.log(this.data.signature)

        },
        fail: res => {
          console.log(res.data)
          wx.showToast({
            title: '请求失败',
            duration: 2000
          })
        }
      })
    },
    formSubmit: (res) => {
      // 1.获取文本值表示个性签名
      let signature_content = res.detail.value["signature_content"]
      console.log(signature_content)
      console.log(signature_content.length)
      if (signature_content.length > 5 && signature_content.length < 100) {
        // 2.发送请求
        wx.request({
          url: 'http://localhost:8888/user/editSignature',
          method: "GET",
          data: {
            user_id: wx.getStorageSync('userInfo')["userId"],
            signature_content: signature_content
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          success: res => {
            console.log(res.data)
            wx.showToast({
              title: '发表成功',
              duration: 2000
            })
          }
        })
      } else {
        wx.showToast({
          title: '长度不符合',
        })
      }
    },
    delete:(res)=>{
      console.log(res.currentTarget.dataset)
      console.log(res.currentTarget.dataset.id)
      let signature_id = res.currentTarget.dataset.item.signatureId
      console.log(res.currentTarget.dataset.item)
      wx.request({
        url: 'http://localhost:8888/user/deleteSignature',
        method: "GET",
        data: {
          "signature_id": signature_id,
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success: res => {
          console.log(res.data)
          wx.showToast({
            title: '删除成功',
            duration: 2000
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
  }
})