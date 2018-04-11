// pages/show/show.js
Page({ 
  data: {
  	imgUrls:[
  		'../../images/1.png',
  		'../../images/2.png',
  		'../../images/3.png'
  	],
  	indicatorDots:true,
  	autoplay:false,
   },
  btnExperience:function(){
    wx.switchTab({
      url: '../index/index',
      success: function(res) {
        console.log("switchTab success!");
      },
      fail: function(res) {
        console.log("switchTab failed!");
      }
    })
  } 

});

