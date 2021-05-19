// pages/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    // 登录的用户名和密码
    username:'',
    password:'',
    userInfo:[]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit:function(e){
      if(e.detail.value.u_account.length == 0 || e.detail.value.u_password.length == 0){
        wx.showToast({
          title: '用户名不能为空或者密码不能为空',
          icon:'loading',
          duration: 1500
        })
      }else{
        console.log("发送请求");
        wx.request({
          url: 'http://localhost:8888/user/loginTest',
          header: {
            "Content-Type": "application/json"
          },
          method: "POST",
          data:{u_account:e.detail.value.u_account,u_password:e.detail.value.u_password},
          dataType:JSON,
          success:res=>{
            console.log(res.data);
            console.log("提交数据了");
            if (res.data.status == 0) {
              wx.showToast({
                title: '提交失败！！！',
                icon: 'loading',
                duration: 1500
              })
            } else if(res.data==true){
              wx.switchTab({
                url: '/pages/index/index',
              })
              wx.showToast({
                title: '提交成功！！！',//这里打印出登录成功
                icon: 'success',
                duration: 1000
              })
            }else{
              wx.switchTab({
                url: '/pages/selfCenter/selfCenter',
              })
            }
          },
          fail:e=>{
            console.log(e)
          }
        })
      }
    },
    login:function(e){
      console.log(this.data.username)
      console.log(this.data.password)
      if(this.data.username == ''){
        wx.showToast({
          title: '用户名不为空',
          duration:2000,
        })
      }
      if(this.data.password == ''){
        wx.showToast({
          title: '密码不为空',
          duration:2000,
        })
      }
      if(this.data.username != '' && this.data.password != ''){
        wx.request({
          url: 'http://localhost:8888/user/userLogin',
          method:'Post',
          header:{
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          data:{
            username: this.data.username,
            password: this.data.password
          },
          success: res=>{
            if(res.data!=null){
              console.log(res.data)
              wx.setStorageSync('userInfo',res.data)
              wx.showToast({
                title: '登陆成功',
                duration:2000,
              }),
              wx.reLaunch({
                url: '/pages/selfCenter/selfCenter',
              })
            }else{
              wx.showToast({
                title: '登陆失败，用户名或密码错误',
                duration:2000,
                icon:"none"
              })
            }
          },
          fail: res=>{
            console.log(res),
            wx.showToast({
              title: '请求错误',
              duration:2000,
            })
          }
        })
      }
    },
    inputName:function(e){
      this.setData({
        username:e.detail.value
      })
    },
    inputPassword:function(e){
      this.setData({
        password:e.detail.value
      })
    },
    reset:function(e){
      const that = this
      wx.showModal({
        title: '提示',
        content: '确定要重置吗',
        success (res) {
          if (res.confirm) {
          console.log('用户点击确定')
          that.setData({
            username:"",
            password:""
          })
          } else if (res.cancel) {
          console.log('用户点击取消')
          }
        }
      })
    },
    toRegister:function(e){
      wx.navigateTo({
        url: '/pages/register/register',
      })
    },
    weixinLogin(){
      let self = this
      wx.getUserProfile({
        desc: "获取你的昵称、头像、地区及性别", // 不写不弹提示框
        success: res => {
          console.log(res)
          self.setData({
            userInfo: res.userInfo
          })
          wx.switchTab({
            url: '/pages/selfCenter/selfCenter',
          })
        },
        fail: res => {
          //拒绝授权
          wx.showToast({
            title: '您拒绝了授权',
            icon: 'none'
          })
          return;
        }
      })
    }
  }
})
