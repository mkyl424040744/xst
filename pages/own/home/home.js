import {
   XHTTP,
   HTTP
} from '../../../utils/http.js'

let xhttp = new XHTTP()
let http = new HTTP()
Page({

   /**
    * 页面的初始数据
    */
   data: {
      show: false,
      login_mark: false,
      img: "../../tabbar/t.jpg",
      name: "张三",
      number: "201788888888",
      sex: "../../tabbar/ptxs.png",
   },
   onClickShow() {
      this.setData({ show: true });
   },
   onClickHide() {
      this.setData({ show: false });
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      //  console.log(xhttp)
      var jwt = wx.getStorageSync('certification');
      var that = this;
      if (jwt == false) {
      } else {
         xhttp.request({
            url: '/api/student/myInformation',
            data: {},
            method: "post",
            success: res => {
               //   console.log(res)
               //   console.log(res.data)
               if (null == res.data.uid) {
                  that.setData({
                     login_mark: false,
                  })
               } else {
                  that.setData({
                     login_mark: true,
                     name: res.data.name,
                     number: res.data.uid
                  })
               }
            }
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
      this.onLoad()
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