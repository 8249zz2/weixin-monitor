// pages/show/show.js
Page({ 
  data: {
  	imgUrls:[
  		'../../images/1.png',
  		'../../images/2.png',
  		'../../images/3.png'
  	],
  	indicatorDots:false,
  	autoplay:false,
   },
  btnExperience:function(){
    wx.redirectTo({
      url: '../index/index',
      success: function(res) {
        console.log("redirectTo success!")
      },

    })
  } 

});

