//index.js
//获取应用实例
var api = require('../../api/api.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: '../dashboard/view'
    })
  },
  gotoPage: function(e) {
    var page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: '../charts/' + page + '/' + page
    });
  },
  onFlexClick: function () {
    wx.navigateTo({
      url: '../flex/flex'
    })
  },
  onIconClick: function () {
    wx.navigateTo({
      url: '../icon/icon'
    })
  },
  onTextClick: function () {
    wx.navigateTo({
      url: "../text/text"
    })
  },
  onProgressClick: function () {
    wx.navigateTo({
      url: "../progress/progress"
    })
  },
  onCalculator: function () {
    wx.navigateTo({
      url: "../calculator/calculator"
    })
  },
  onDataClick:function(){
    wx.navigateTo({
      url: '../data/data',
    })
  },
  onLoad: function () {
    api.queryRequest('/', null);
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
