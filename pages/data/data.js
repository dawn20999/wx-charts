Page({
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.info("onLoad");
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.info("onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.info("onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.info("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.info("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.info("onPullDownRefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.info("onReachBottom");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})