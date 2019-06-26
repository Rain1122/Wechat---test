// pages/detial/detial.js
Page({

  /**
   * Page initial data
   */
  data: {
    wandetail: [
      {
        "id": "1",
        "img": "../image/AirJordan/429.jpg",
        "title": 'Air Jordan 1 高邦爆裂纹',
        'price': '¥1230',
        'time': '4月29日发售',
      },
      {
        "id": "2",
        "img": "../image/AirJordan/502.jpg",
        "title": '欧文 KYRIE 5 大码童鞋',
        'price': '¥690',
        'time': '5月2日发售',
      },
      {
        "id": "3",
        "img": "../image/AirJordan/507.jpg",
        "title": 'Air Jordan 6 蓝色布朗尼',
        'price': '¥1690',
        'time': '5月7日发售',
      },
      {
        "id": "4",
        "img": "../image/AirJordan/512.jpg",
        "title": 'Lebron Soldier 12 天使白（澳洲）',
        'price': '¥1250',
        'time': '5月12日发售',
      },
      {
        "id": "5",
        "img": "../image/AirJordan/527.jpg",
        "title": 'Air Jordan 12 黑红尊贵版',
        'price': '¥1980',
        'time': '5月27日发售',
      },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const _this = this;
    // 拼接请求url
    const url = '../detail/detail/' + options.id;
    console.log(url)
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          title: res.data.title,
          loading: false // 关闭等待框
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})