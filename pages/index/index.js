//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    cycle: null,
    monitor_number:null,
    img_number:null,
    href_number:null,
    href_changed:null,
    img_changed:null,
    content_changed:null
  },
  onLoad: function () {
    var that = this;
    
    wx.request({
      url: 'http://localhost:8080/?username=xt12321',
      header: {
        'content-type':'application/json'
      },
      success: function (res){
        that.setData({
        cycle : res.data[0].cycle,
        href_number : res.data[0].href_number,
        img_number  : res.data[0].img_number,
        monitor_number : res.data[0].monitor_number,
        })
      }
    })


  }
})
