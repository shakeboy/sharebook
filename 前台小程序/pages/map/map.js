// 引用百度地图微信小程序JSAPI模块 
var bmap = require('./../common/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.detail.markerId;
    // console.log(e.detail.markerId)
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    this.searchByMap()
  },
  searchByMap:function(e){
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'ZGIovf7H68lfID8BWGqkIkbbPGZVYmwO'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      "query": wx.getStorageSync('query'),
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: './../icon/发表.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: './../icon/发表s.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    console.log(data+i)
    that.setData({
      placeData: {
        "title": '名称：' + data[i].title + '\n',
        "address": '地址：' + data[i].address + '\n',
        "telephone": '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "./../icon/个人中心.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "./../icon/个人中心s.png";
      }
      markers[j]=data[j].iconPath;
    }
    that.setData({
      markers: markers
    });
  }
})