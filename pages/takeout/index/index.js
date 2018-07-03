const funDta = require('../../../utils/functionData.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        is_load:false,
        has_data:true,
        locationName:'',

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        funDta.amapFilePackage((data)=>{
            that.setData({
                locationName: data[0].regeocodeData.pois[0].name
            });
        }, null);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 在当前页面显示导航条加载动画
        // wx.showNavigationBarLoading();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    /**
     * 选择地址
     */
    chooseAddress:function(){
        wx.navigateTo({
            url: '/pages/takeout/chooseAddress/chooseAddress',
        })
    },

    /**
     * 滚动到顶部/左边，会触发 scrolltoupper 事件
     */
    scrollToUpper:function(){},

    /**
     * 滚动到底部/右边，会触发 scrolltolower 事件
     */
    scrollToLower:function(){},
})