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
    uid: "",
    name: "",
    password: "",
    password2: "",
    email: "",
    code: "",
    sidMessage: "",
    nameMessage: "",
    passwordMessage: "",
    password2Message: "",
    emailMessage: "",
    vcMessage: "",
  },
  formSubmit: function (e) {
    console.log(e)
  },
  sidb: function (event) {
    var sid = event.detail.value;
    this.setData({
      uid: sid
    })
    // console.log(event)
    if (12 == sid.length) {
      this.setData({
        sidMessage: ""
      })
    } else {
      this.setData({
        sidMessage: "学号格式错误(12位)"
      })
    }
  },
  nameb: function (event) {
    var nameb = event.detail.value;
    this.setData({
      name: nameb
    })
    if (0 >= nameb.length) {
      this.setData({
        nameMessage: "姓名不能为空"
      })
    } else {
      this.setData({
        nameMessage: ""
      })
    }
  },
  pawb: function (event) {
    var passwordb = event.detail.value;
    this.setData({
      password: passwordb
    })
    if (0 >= passwordb.length) {
      this.setData({
        passwordMessage: "密码不能为空"
      })
    } else {
      this.setData({
        passwordMessage: ""
      })
      if (this.data["password2"].length > 0) {
        this.pvs();
      }
    }
  },
  paw2b: function (event) {
    var password2b = event.detail.value;
    this.setData({
      password2: password2b
    })
    if (0 >= password2b.length) {
      this.setData({
        password2Message: "密码不能为空"
      })
    } else {
      this.setData({
        password2Message: ""
      })
    }
    this.pvs();
  },
  pvs: function () {
    if (this.data["password"] === this.data["password2"]) {
      this.setData({
        password2Message: ""
      })
    } else {
      this.setData({
        password2Message: "两次密码不一致"
      })
    }
  },
  emailb: function (event) {
    var emailb = event.detail.value;
    this.setData({
      email: emailb
    })
    if (0 >= emailb.length){
      this.setData({
        emailMessage: "邮箱不能为空"
      })
    }else{
      if (!(/^[a-z0-9A-Z]+[a-z0-9A-Z._]+@[a-z0-9A-Z]+\.[a-z]{2,}$/).test(emailb)){
        this.setData({
          emailMessage: "邮箱格式错误"
        })
      }else{
        this.setData({
          emailMessage: ""
        })
      }
    }
  },
  vcb:function(event){
    var vcb = event.detail.value;
    console.log(vcb)
    this.setData({
      code: vcb
    })
    if (0 >= vcb.length) {
      this.setData({
        vcMessage: "验证码不能为空"
      })
    }else{
      this.setData({
        vcMessage: ""
      })
    }
  },
  getcode:function(){
    var email1 = this.data['email']
    console.log(email1)
    http.request({
      url: '/api/auth/email',
      method: "post",
      // dataType: 'json',
      // responseType: 'text',
      data: {
        "email": email1
      },
      // 方法
      success: function (data) {
        wx.showToast({
          title: '发送成功',
        })
      },
      fail:function(){
        wx.showToast({
          title: '发送失败',
        })
      }
    })
  },
  onClickButton: function () {
    var name = this.data.name;
    var email = this.data.email;
    var uid = this.data.uid;
    var password = this.data.password;
    var password2 = this.data.password2;
    var code = this.data.code;
    http.request({
      url: '/api/auth/register',
      method: "post",
      data: {
        "name":name,
        "uid":uid,
        "password": password,
        "password2": password2,
        "email": email,
        "code": code
      },
      success: function (data) {
        wx.showToast({
          title: '注册成功',
        })
        wx.redirectTo({
          url: '/pages/login/login?username=' + uid
        })
      },
      fail: function () {
        wx.showToast({
          title: '注册失败',
        })
      }
    })
  },
  oncs:function(){
    var uid="201706120107"
    wx.navigateTo({
      url: '/pages/login/login?username=' + uid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "注册"
    });
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