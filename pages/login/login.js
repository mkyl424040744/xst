import {
  XHTTP,
  HTTP
} from '../../utils/http.js'
let xhttp = new XHTTP()
let http = new HTTP()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    picon: "closed-eye",
    ptype: "password",
    pi:"0",
    username:"",
    password:""
  },
  psh: function (e) {
    if ("0" === e.currentTarget.dataset.i){
      this.setData({
        picon: "eye-o",
        ptype: "text",
        pi: "1"
      })
    }else{
      this.setData({
        picon: "closed-eye",
        ptype: "password",
        pi: "0"
      })
    }
  },
  setusername:function(e){
    // console.log(e)
    if(true){

    }
    this.setData({
      username:e.detail.value
    })
  },
  setpassword:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  onClickButton:function(){
    var uname = this.data.username
    var pwd = this.data.password
    http.request({
      url: '/api/login',
      method: "post",
      // dataType: 'json',
      // responseType: 'text',
      data: {
        "username": uname,
        "password": pwd
      },
      // 方法
      success: function (data) {
        console.log(data)
        wx.setStorageSync('jwt_token', data);
         wx.setStorageSync('certification', true);
        wx.showToast({
          title: '登录成功',
        })
        wx.navigateBack({
          delta: 100
        })
      },
      fail: function () {
        wx.showToast({
          title: '登录失败',
          icon: none
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.username)
    if (options.username != null){
      // console.log("233")
      this.setData({
        username: options.username
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