/*
* @Author: Marte
* @Date:   2017-05-26 19:13:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 19:29:51
*/
// 封装resouse相关http方法
import VueResource from 'vue-resource'

export const http = {
  request (method, url, data, successCb = null, errorCb = null) {
    axios.request({
      url,
      data,
      method: method.toLowerCase()
    }).then(successCb).catch(errorCb)
  },

  get (url, successCb = null, errorCb = null) {
    return this.request('get', url, data, successCb, errorCb)
  },

  post (url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb)
  },

  put (url, data, successCb = null, errorCb = null) {
    return this.request('put', url, data, successCb, errorCb)
  },

  delete (url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb)
  }
}