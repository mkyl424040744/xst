import {
   XHTTP,
   HTTP
} from '../../../utils/http.js'

let xhttp = new XHTTP()
let http = new HTTP()
let utils = require('../../../utils/utils.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {
      activitylist: [{
         "logo": "https://img.yzcdn.cn/vant/cat.jpeg",
         "name": "活动名称",
         "sponsor": "主办方",
         "place": "地点",
         "deadline": "时间",
         "credit_type": "活动类型",
         "next": 0
      }],
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.setNavigationBarTitle({
         title: "活动历史"
      });
      var jwt = wx.getStorageSync('certification');
      if (jwt == false) {
         this.setData({
            flag:false
         })
      } else {
         xhttp.request({
            url: '/api/personal/ReportedActivities',
            data: {
               page: 0,
               studentId: options.studentId,
               status: 3
            },
            success: res => {
               // this.setData({
               //   loaded: 0 + res.results.length,
               //   next: res.next
               // })
               if (res.data.results != null) {
                  for (var i = 0; i < res.data.results.length; i++) {
                     res.data.results[i].credit_type = utils.getJudgeKind(res.data.results[i].credit_type)
                     res.data.results[i].created = utils.getDateDiff(utils.getDateTimeStamp(res.data.results[i].created.replace('T', ' ')));
                     res.data.results[i].logo = "http://learningtime.oss-cn-shenzhen.aliyuncs.com/media/" + res.data.results[i].logo
                     if (res.data.results[i].name.length > 12) {
                        res.data.results[i].name = res.data.results[i].name.slice(0, 12) + "..."
                     }
                  }
                  this.setData({
                     activitylist: res.data.results,
                     flag:true
                  });
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