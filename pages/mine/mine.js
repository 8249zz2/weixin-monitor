// pages/mine/mine.js
const mineApp = getApp();
Page({
  /* 页面的初始数据*/
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /* 生命周期函数--监听页面加载*/
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '个人中心'
    });
    wx.setNavigationBarColor({
      frontColor: mineApp.globalData.frontColor,
      backgroundColor: mineApp.globalData.NavigationBarColor,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });
    if (mineApp.globalData.userInfo) {
      this.setData({
        userInfo: mineApp.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      mineApp.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          mineApp.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e){
    mineApp.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    }); 
  },
})