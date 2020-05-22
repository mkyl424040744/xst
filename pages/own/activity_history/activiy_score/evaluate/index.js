import {
   XHTTP,
   HTTP
} from '../../../../../utils/http.js'

let xhttp = new XHTTP()
let http = new HTTP()
let utils = require('../../../../../utils/utils.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {
      number: '0',
      score: 0
   },
   onChange:function(e){
      this.setData({
         score: e.detail
      });
   },
   variable: function (e) {
      // console.log(e.detail)
      this.setData({
         number: e.detail.cursor,
         content: e.detail.value
      })
   },
   submit: function () {
      var that = this;
      // wx.redirectTo({
      //    url: "../index?uid=" + that.data.uid
      // })
      console.log(that.data.uid, that.data.score,that.data.content)
      xhttp.request({
         url: '/api/personal/submitActivityComments',
         data: {
            uid: that.data.uid,
            starScore: that.data.score,
            commentContent: that.data.content
         },
         method: "POST",
         success: res => {
            if (res.data === "success"){
               wx.showToast({
                  title: '评分成功',
               })
               wx.navigateBack({
                  delta:1
               })
            }
         }
      });
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      console.log(options)
      this.setData({
         uid: options.uid
      })
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