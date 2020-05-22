import {
   XHTTP,
   HTTP
} from '../../../../utils/http.js'

let xhttp = new XHTTP()
let http = new HTTP()
let utils = require('../../../../utils/utils.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {
      imghead: 'https://img.yzcdn.cn/vant/cat.jpeg',
      open: false
   },
   onChange: function (event) {
      this.setData({
         value: event.detail
      });
   },
   onClick: function () {
      console.log(this.data.uid)
      wx.navigateTo({
         url: 'evaluate/index?uid=' + this.data.uid,
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   initialization: function (that, uid) {
      xhttp.request({
         url: '/api/personal/ActivityReviewDetailList/' + uid,
         data: {
            uid: uid
         },
         success: res => {
            console.log(res);
            that.setData({
               title: res.data.name,
               host: res.data.sponsor,
               time: res.data.time,
               place: res.data.place,
               totalScore: res.data.markScore,
               list: res.data.list
            });
         }
      });
   },
   onLoad: function (options) {
      console.log(options);
      if (this.data.open == true) {
         let uid = wx.getStorageSync('score_uid');
         this.initialization(this, uid)
      } else {
         this.setData({
            uid: options.uid
         })
         wx.setStorageSync('score_uid', options.uid)
         this.initialization(this, options.uid)
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
      this.setData({
         open: true
      })
      this.onLoad();
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