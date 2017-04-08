var util = require('../../utils/wxcharts-min.js')

var helloData = {
  name: 'WeChat'
}

Page({
  data: helloData,
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  onLoad: function () {
    console.log('hello, world')
  }
})