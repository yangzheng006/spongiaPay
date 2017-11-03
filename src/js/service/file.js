/**
 * File
 * Created by WangChao on 11/15 0015.
 */
var file =function (fn) {
    this.fn=fn;
};
file.prototype={
    /**
     * 图片上传接口
     * @param file 文件
     * @return 图片url
     */
    uploadImage:function (data) {
        ajax.post({
            url:base+"weixin/file/upload_image.jhtml",
            data:data,
            contentType:false,
            processData:false,
            success:this.fn
        });
    },
    uploadToTempImage:function (data) {
        ajax.post({
            url:base+"app/file/upload_to_temp_image.jhtml",
            data:data,
            contentType:false,
            processData:false,
            success:this.fn
        });
    }
};