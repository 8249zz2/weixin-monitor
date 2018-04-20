//index.js
//获取应用实例
var indexApp = getApp();

Page({
  data: {
    userInfo: {},
    hadGetRequest:false,
    cycle: 0,
    monitor_number:0,
    img_number:0,
    href_number:0,
    href_changed:0,
    img_changed:0,
    content_changed:0
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页'
    });
    wx.setNavigationBarColor({
      frontColor: indexApp.globalData.frontColor,
      backgroundColor: indexApp.globalData.NavigationBarColor,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });
    wx.setTabBarStyle({
      color: '#000000',
      selectedColor: '#FFFFFF',
      backgroundColor: '#04BFBF',
      borderStyle: 'white'
    })
  
  }

})
