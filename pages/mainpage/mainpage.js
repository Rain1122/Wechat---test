// pages/mainpage/mainpage.js
Page({

  /**
   * Page initial data
   */
  data: {
    navbar: ['玩', '乐'],
    currentTab: 0,
      wanarray: [
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
      ],
      learray: [
      {
        "id": "11",
        "img": "../image/AirJordan/429.jpg",
        "title": 'Air Jordan 1 高邦爆裂纹',
        'price': '¥1230',
        'time': '4月29日发售',
      },
      {
        "id": "12",
        "img": "../image/AirJordan/502.jpg",
        "title": '欧文 KYRIE 5 大码童鞋',
        'price': '¥690',
        'time': '5月2日发售',
      },
      {
        "id": "13",
        "img": "../image/AirJordan/507.jpg",
        "title": 'Air Jordan 6 蓝色布朗尼',
        'price': '¥1690',
        'time': '5月7日发售',
      },
      {
        "id": "14",
        "img": "../image/AirJordan/512.jpg",
        "title": 'Lebron Soldier 12 天使白（澳洲）',
        'price': '¥1250',
        'time': '5月12日发售',
      },
      {
        "id": "15",
        "img": "../image/AirJordan/527.jpg",
        "title": 'Air Jordan 12 黑红尊贵版',
        'price': '¥1980',
        'time': '5月27日发售',
      },
    ]
  },
  navbarTap: function (e) {

  },

  // onTap: function (id) {
  //   wx.navigateTo({
  //     url: "../detail/detaill?id=1"
  //   }) 
  // },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
    url: 'http://localhost:8080/test',
    data: { },
    method: 'POST',
      header: {
      'content-type': 'json'
    },
    success: function (res) {
      console.log(res.data)
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