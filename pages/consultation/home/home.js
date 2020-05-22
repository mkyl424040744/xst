var wxParser = require('../../../wxParser/index.js');
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
      credit: "0",
      wtCredit: "0",
      sxddCredit: "0",
      xlCredit: "0",
      flCredit: "0",
      cxcyCredit: "0"
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onShow: function (options) {
      // console.log("233")
      xhttp.request({
         url: '/api/student/credit',
         data: {

         },
         method: "post",
         success: res => {
            console.log(res)
            this.setData({
               credit: res.data.credit == null ? '0' : res.data.credit,
               wtCredit: res.data.wtCredit == null ? '0' : res.data.wtCredit,
               sxddCredit: res.data.sxddCredit == null ? '0' : res.data.sxddCredit,
               xlCredit: res.data.xlCredit == null ? '0' : res.data.xlCredit,
               flCredit: res.data.flCredit == null ? '0' : res.data.flCredit,
               cxcyCredit: res.data.cxcyCredit == null ? '0' : res.data.cxcyCredit
            });
         }
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
   // onShow: function () {
   //   this.onLoad;
   // },

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