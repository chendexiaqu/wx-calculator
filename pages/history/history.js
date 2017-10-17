Page({
  data:{
    logs:[]
  },
  onLoad:function(options){
    var logs = wx.getStorageSync('calclogs');
    this.setData({"logs":logs});
  },
  onReady:function(){
  },
  onShow:function(){
  },
  onHide:function(){
  },
  onUnload:function(){
  }
})