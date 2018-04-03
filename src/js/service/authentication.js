/**
 * commmon
 * Created by WangChao on 2016/11/24.
 */
var authentication = function (fn) {
    this.fn = fn;
};
authentication.prototype = {


    /**普通商家 推荐商家(tab下推荐商家)
     *  tenantName 商家名称
     * linkMan 联系人
     *  phone   电话号码
     *  hyId   会员id
     */
    tenantsNormal: function (data) {
        ajax.post({
            url: base + 'tenantsNormal',
            success:this.fn,
            data:data
        });
    },

    /**新普通商家 推荐商家(tab下推荐商家)
     *  tenantName 商家名称
     * linkMan 联系人
     *  phone   电话号码
     *  hyId   会员id
     */
    newTenantsNormal: function (data) {
        ajax.post({
            url: base + 'newTenantsNormal',
            success:this.fn,
            data:data
        });
    },





    /**商户认证(个人中心商户认证)
     *  tenantName 商家名称
     * linkMan 联系人
     *  phone   电话号码
     *  hyId   会员id
     */
    merchantCA: function (data) {
        ajax.post({
            url: base + 'merchantCA',
            success:this.fn,
            data:data
        });
    },

    /**商户认证(个人中心商户认证)
     *  tenantName 商家名称
     * linkMan 联系人
     *  phone   电话号码
     *  hyId   会员id
     */
    newMerchantCA: function (data) {
        ajax.post({
            url: base + 'newMerchantCA',
            success:this.fn,
            data:data
        });
    },


    /**(补充认证资料)
     *  identityCardNum 身份证号码
     *  bussinessNumber 营业执照号码
     * bbusinessLicense营业执照照片
     *  identityCardFront   身份证正面图片
     *  identityCardBack   身份证反面
     *  accounType  账号类型  normal（对公账号）、 legal（法人账号）
     *  account  户名
     *  bank 开户行
     *  bankAccount 开户行账号
     *  Authorizationletter 授权书图片
     *  placeofBusiness  营业场所图片
     *  shId   商户id
     */
    tanantsAuthoBusinessLicense: function (data) {
        ajax.post({
            url: base + 'tanantsAuthoBusinessLicense',
            success:this.fn,
            data:data
        });
    },

};