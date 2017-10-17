var app = getApp()
Page({
  data: {
    motto: 'Simple Calculator',
    userInfo: {},
    defaultSize: 'default',
    disabled: false,
    iconType:'info_circle'
  },
  
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toCalc:function(){
    wx.navigateTo({
      url:'../calc/calc'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
  
    app.getUserInfo(function(userInfo){
      
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
