Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: 0,
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //切换页面导航
  changePage(event) {
    this.setData({
      pageType: event.currentTarget.dataset.pagetype
    });
  },
  swiperChange(event) {
    this.setData({
      pageType: event.detail.current
    });
  }
})