var option1 = [{
   text: '默认',
   value: 0
}, {
   text: '升序',
   value: 1
},]

var option2 = [{
   text: '默认排序',
   value: '3'
}, {
   text: '创新创业',
   value: 'cxcy_credit'
}, {
   text: '身心素质',
   value: 'xl_credit'
}, {
   text: '思想品德',
   value: 'sxdd_credit'
}, {
   text: '文体素质',
   value: 'wt_credit'
}, {
   text: '法律素养',
   value: 'fl_credit'
}]

var swiperList = [{
   id: 0,
   type: 'image',
   url: 'http://oa.gzcc.cn/uploadfile/2018/0413/20180413111630488.jpg'
}, {
   id: 1,
   type: 'image',
   url: 'https://oa.gzcc.cn/uploadfile/2018/0413/20180413112235848.jpg'

}, {
   id: 2,
   type: 'image',
   url: 'https://oa.gzcc.cn/uploadfile/2018/0413/20180413111702748.jpg'
}, {
   id: 3,
   type: 'image',
   url: 'https://oa.gzcc.cn/uploadfile/2018/0413/20180413111708122.jpg'
}]

var activitylist=[{
   "logo": "https://img.yzcdn.cn/vant/cat.jpeg",
   "name": "活动名称",
   "sponsor": "主办方",
   "place": "地点",
   "deadline": "时间",
   "credit_type": "活动类型",
   "next": 0
}]

module.exports = {
   option1: option1,
   option2: option2,
   swiperList: swiperList,
   activitylist: activitylist
}