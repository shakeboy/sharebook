// pages/self_setting/self_setting.js
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
    loginOut:function(e){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    },
    toUserInfoEdit:function(e){
      wx.navigateTo({
        url: '/pages/userInfo_edit/userInfo_edit',
      })
    }
  }
})
