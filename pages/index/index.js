//index.js
var app = getApp()
Page({
  data: {
    welcome: "Get Latest News Now",
    "username": "NEWS APP",
    img: "http://tva4.sinaimg.cn/crop.0.0.1080.1080.180/0066Db0Pjw8erk3vg33raj30u00u0jt0.jpg"
  },
  
  bindViewTap: function() {
    wx.navigateTo({
      url: '../text/text'
    })
  }
})
