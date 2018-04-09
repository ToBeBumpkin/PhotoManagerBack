module.exports = {
  proxy:{
    '/gw-member':{
      target:"http://test.ewezx.com", //接口域名
      changeOrigin:true,  //是否跨域
      // pathRewrite: {
      //              '^/apis': ''   //需要rewrite的,
      //          }
    },
    '/gw-bgcheck':{
      target:"http://test.ewezx.com", //接口域名
      changeOrigin:true,  //是否跨域
      // pathRewrite: {
      //              '^/apis': ''   //需要rewrite的,
      //          }
    }
  }
}
