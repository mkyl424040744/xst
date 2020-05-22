import {
   XHTTP,
   HTTP
} from '../../../utils/http.js'

let xhttp = new XHTTP()
let http = new HTTP()
let utils = require('../../../utils/utils.js')
let data = require('../../../data/data.js')

Page({
   /**
    * 页面的初始数据
    */
   data: {
      show: false,
      itemTitle1: '时间',
      itemTitle2: '筛选',
      loaded: 0,
      loadingdown: false,
      loadingup: false
   },
   pretreatment: function (results) {
      for (var i = 0; i < results.length; i++) {
         results[i].credit_type = utils.getJudgeKind(results[i].credit_type)
         let t = results[i].created.replace('T', ' ')
         results[i].created = utils.getDateDiff(utils.getDateTimeStamp(t))
         results[i].logo = "http://learningtime.oss-cn-shenzhen.aliyuncs.com/media/" + results[i].logo
         if (results[i].name.length > 12) {
            results[i].name = results[i].name.slice(0, 12) + "..."
         }
      }
   },
   sort: function (e) {
      console.log(e)
      let condition1 = "item2" === e.currentTarget.id;
      let condition2 = "item1" === e.currentTarget.id;
      let condition3 = '3' === e.detail;
      let condition4 = 0 === e.detail;
      this.setData({
         condition: condition1 ? (condition3 ? 0 : 2) : (condition2 ? (condition4 ? 0 : 1) : 0),
         kind: condition1 ? (condition3 ? '' : e.detail) : '',
         value1: condition1 ? 0 : '',
         value2: condition2 ? '3' : ''
      })
      http.request({
         url: '/api/activities',
         data: {
            condition: this.data.condition,
            activityType: this.data.kind,
            loaded: 0
         },
         success: res => {
            this.pretreatment(res.results)
            this.setData({
               loaded: 0 + res.results.length,
               next: res.next,
               activitylist: res.results,
            })
         }
      })
   },
   showBottom() {
      this.toggle('bottom', true);
   },

   hideBottom() {
      this.toggle('bottom', false);
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      xhttp.request({
         url: '/api/student/myInformation',
         method: "post",
         success: res => {
            if (typeof (res.data.msg) === 'undefined'){
               wx.setStorageSync('certification', true);
            }else{
               wx.setStorageSync('certification', false);
            }
         }
      });
      this.setData({
         loaded: 0,
         condition: 0,
         kind: "",
         value1: 0,
         value2: "3",
         option1: data.option1,
         option2: data.option2,
         swiperList: data.swiperList,
         activitylist: data.activitylist,
      })
      http.request({
         url: '/api/activities',
         data: {},
         success: res => {
            console.log(res)
            this.pretreatment(res.results)
            this.setData({
               loaded: this.data.loaded + res.results.length,
               next: res.next,
               activitylist: res.results,
               loadingup: false
            });
         }
      })
   },
   onPostTap: function (e) {
      let jwt = wx.getStorageSync('certification')
      if (jwt === false) {
         wx.showToast({
            title: '请先登录',
            icon: 'none',
            duration: 1000
         })
      } else {
         let postId = e.currentTarget.dataset.postid
         wx.navigateTo({
            url: '/pages/activity/activies/activies?uid=' + postId,
         })
      }
   },
   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {
      this.setData({
         loadingup: true
      })
      this.onLoad();
   },
   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {
      this.setData({
         loadingdown: true
      })
      http.request({
         url: this.data['next'],
         data: {
            condition: this.data.condition,
            activityType: this.data.kind
         },
         success: res => {
            // console.log(res);
            if (this.data.loaded >= res.count) {
               this.setData({
                  loadingdown: false
               })
               wx.showToast({
                  title: '活动加载完毕',
                  icon: 'none',
                  duration: 2000
               })
            } else {
               this.pretreatment(res.results)
               this.setData({
                  loaded: this.data.loaded + res.results.length,
                  next: res.next,
                  activitylist: this.data['activitylist'].concat(res.results),
                  loadingdown: false
               });
            }
         }
      })
   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})