const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active4: app.globalData.tabbar_n,
    icon1: {
      normal: '/tabbar/activity.png',
      active: '/tabbar/activity_cur.png'
    },
    icon2: {
      normal: '/tabbar/consultation.png',
      active: '/tabbar/consultation_cur.png'
    },
    icon3: {
      normal: '/tabbar/own.png',
      active: '/tabbar/own_cur.png'
    }
  },
  // onChange(event) {
  //   const { key } = event.currentTarget.dataset;
  //   this.setData({ [key]: event.detail });
  // },
  onClick(event) {
    const id = event.currentTarget.id;
    var that = this;
    if ("1" === id) {
      app.globalData.tabbar_n = 1;
    } else if ("2" === id) {
      app.globalData.tabbar_n = 2;
    } else {
      app.globalData.tabbar_n = 0;
    }
    const { switchTab, url } = event.currentTarget.dataset;
    if (switchTab) {
      wx.reLaunch({
        url,
        success:function(){
          that.setData({
            active4: app.globalData.tabbar_n
          });
        },
        fail: function () {
          console.log("跳转失败");
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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