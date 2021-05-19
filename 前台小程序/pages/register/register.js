// pages/register/register.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit:e=>{
      console.log(e)
      let user_account=e.detail.value["username"]
      let user_password=e.detail.value["password"]
      let password_confirm=e.detail.value["password_confirm"]
      if(user_account==''||user_password==''){
        wx.showToast({
          title: '用户名和密码不能为空',
        })
      }else if(user_password!=password_confirm){
        wx.showToast({
          title: '两次密码不一致',
        })
      }else{
        //发请求
        wx.request({
          url: 'http://localhost:8888/user/userRegister',
          data:
          {
            "user_account":user_account,
            "user_password":user_password
          },
          method:"POST",
          header:{
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          success:(res)=>{
            //请求成功，注册成功
            if(res.data==true){
              wx.showToast({
                title: '注册成功,去登陆吧！',
                duration:3000
              })
              wx.reLaunch({
                url: '/pages/login/login',
              })
            }else{
              wx.showToast({
                title: '注册失败',
              })
            }
          },
          fail:(res)=>{
            alert("请求失败")
          }
        })
      }
    }
  }
})
