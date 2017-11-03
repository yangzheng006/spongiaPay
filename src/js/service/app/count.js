/**
 * 广告位
 */

var count = function (fn) {
    this.fn = fn;
};
count.prototype = {

    /**
     * 分店区域列表
     * @param sumDate 日期
     */
    areaList: function (data) {
        ajax.get({
            url:base+'probe/member/delivery_center/areaList.jhtml',
            data:data,
            success: this.fn
        });

    } ,

  /**
     * 分店区域列表
     * @param areaId 区域id
     */
  delivery_list: function (data) {
        ajax.get({
            url:base+'probe/member/delivery_center/list.jhtml',
            data:data,
            success: this.fn
        });

    } ,

    /**
     * 获取分店用户探针mac、rf
     */
    probeInfo: function (data) {
        ajax.get({
            url:base+'probe/member/delivery_center/getProberInfo.jhtml',
            data:data,
            success: this.fn
        });

    } ,


    /**
     * 小时客流统计
     * @param sumDate 日期
     */
    hourCount: function (data) {
        ajax.get({
            // url:'https://api.wwhmovie.xin/request/test',
            url: 'http://112.124.20.190/WifiAttendanceAdmin/proberDataSummary/sumHourlyCustomersAPI.json?uid=6df44c1b7ecd492490659a29e05e16de&token=2aee4672b733471d0dc79a6520444385&partnerId=001&mac=5CCF7F39E5EB&rf=-63&regularInterval=5',
            data:data,
            success: this.fn
        });

    } ,
    /**
     * 统计客流人流量的
     * @param sumDate 日期
     */
    peopleCustomer: function (data) {
        ajax.get({
            url: 'http://112.124.20.190/WifiAttendanceAdmin/proberDataSummary/sumPeopleCustomersAPI.json?uid=6df44c1b7ecd492490659a29e05e16de&token=2aee4672b733471d0dc79a6520444385&partnerId=001&mac=5CCF7F39E5EB&rf=-63&regularInterval=5 ',
            data:data,
            success: this.fn
        });

    },
    /**
     * 统计驻店跳出量的
     * @param sumDate 日期
     */
    sumStayCustomer: function (data) {
        ajax.get({
            url: 'http://112.124.20.190/WifiAttendanceAdmin/proberDataSummary/sumStayCustsAPI.json?uid=6df44c1b7ecd492490659a29e05e16de&token=2aee4672b733471d0dc79a6520444385&partnerId=001&mac=5CCF7F39E5EB&rf=-63&regularInterval=5',
            data:data,
            success: this.fn
        });

    },
    /**
     * 统计月重复来客数和重复比率的
     * @param sumDate 日期
     */
    sumMonthlyRepeat: function (data) {
        ajax.get({
            url: 'http://112.124.20.190/WifiAttendanceAdmin/proberDataSummary/sumMonthlyRepeatCustsAPI.json?uid=6df44c1b7ecd492490659a29e05e16de&token=2aee4672b733471d0dc79a6520444385&partnerId=001&mac=5CCF7F39E5EB&rf=-63&regularInterval=5',
            data:data,
            success: this.fn
        });

    }
    ,
    /**
     * 日手机品牌客流量统计
     * @param sumDate 日期
     */
    dayPhoneCount: function (data) {
        ajax.get({
            url: 'http://112.124.20.190/WifiAttendanceAdmin/customerFlowReport/sumMobileCustPeopleQtyAPI.json?uid=6df44c1b7ecd492490659a29e05e16de&token=2aee4672b733471d0dc79a6520444385&partnerId=001&mac=5CCF7F39E5EB&rf=-63&regularInterval=5 ',
            data:data,
            success: this.fn
        });

    }


};


