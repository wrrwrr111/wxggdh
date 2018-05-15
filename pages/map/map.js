Page({
  data: {
    latitude: 39.95933,
    longitude: 116.29845,
    markers: [{
      id: 1,
      latitude: 39.95933,
      longitude: 116.29845,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 39.95933,
      longitude: 116.29745,
      iconPath: '/resources/location.png'
    }, {
        latitude: 39.95933,
        longitude: 116.29945,
      iconPath: '/resources/location.png'
    }],
    formData:{
      latitude:0,
      longitude:0,
      telNumber:0,
      telName:'',
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        this.setData({
          latitude: latitude,
          longitude: longitude
        })
      }
    })
  },
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function (res) {
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },
  bindTelNumberInput:function(e){
    this.setData({
      'formData.telNumber': e.detail.value
    })
  },
  bindTelNameInput: function(e){
    this.setData({
      'formData.telName': e.detail.value
    })
  },
  addOneTel:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        this.setData({
          'formData.latitude': latitude,
          'formData.longitude': longitude
        })
        console.log(this.data.formData)
        wx.showToast({
          title: '成功：' + this.data.formData.telName,
          icon: 'success',
          duration: 2000
        })
      }
    })


    //接着add
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  // translateMarker: function () {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude: 23.10229,
  //       longitude: 113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function () {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude: 23.10229,
  //       longitude: 113.3345211,
  //     }, {
  //       latitude: 23.00229,
  //       longitude: 113.3345211,
  //     }]
  //   })
  // }
})
