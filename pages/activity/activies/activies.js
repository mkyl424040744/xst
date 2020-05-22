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
      aname: "",
      adata: "",
      atitle: "",
      akind: "",
      isOverlay: true,
      atext: "参赛者",
      joinef: false,
      uid: ""
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.setData({
         uid: options.uid
      })
      var uid = options.uid
      wx.setNavigationBarTitle({
         title: "活动详情"
      });
      var that = this;
      xhttp.request({
         url: '/api/activities/' + uid,
         data: {

         },
         success: res => {
            console.log(res)
            var credit_type = "思想品德"
            if ("cxcy_credit" === res.data.credit_type) {
               credit_type = "创新创业"
            } else if ("xl_credit" === res.data.credit_type) {
               credit_type = "身心素质"
            } else if ("sxdd_credit" === res.data.credit_type) {
               credit_type = "思想品德"
            } else if ("wt_credit" === res.data.credit_type) {
               credit_type = "文体素质"
            } else if ("fl_credit" === res.data.credit_type) {
               credit_type = "法律素养"
            }
            that.setData({
               aname: res.data.name,
               atitle: res.data.sponsor,
               akind: credit_type,
               isOverlay: false
            });
            wxParser.parse({
               bind: 'richText',
               html: res.data.description,
               target: that,
               enablePreviewImage: true, // 禁用图片预览功能
               tapLink: (url) => { // 点击超链接时的回调函数
                  // url 就是 HTML 富文本中 a 标签的 href 属性值
                  // 这里可以自定义点击事件逻辑，比如页面跳转
                  wx.navigateTo({
                     url
                  });
               }
            });
         }
      })
   },
   hideElasticFrame: function () {
      this.setData({
         joinef: false
      })
   },
   showElasticFrame: function () {

      this.setData({
         joinef: true
      })
   },
   join: function () {
      console.log(this.data.uid)
      xhttp.request({
         url: "/api/activities/confirmEnroll",
         data: {
            uid: this.data.uid,
         },
         method: "post",
         success: res => {
            wx.showToast({
               title: '报名成功',
            })
            this.setData({
               joinef: false
            })
         },
         fail: function () {
            wx.showToast({
               title: '报名失败',
               icon: none
            })
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