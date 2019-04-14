// 负责封装请求
var  request =function(url, method="get",data={},header={}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:url,
            method:method,
            header:header,
            success:function(res){
                resolve(res)
            },
            fail:function(res){
                reject(res)
            }
        })
    })
}
//暴露方法
export default request;