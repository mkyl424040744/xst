import { config } from '../config.js'


class HTTP {

  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.apiBase + params.url,
      method: params.method,
      data: params.data,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {

        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success(res.data)
        } else {
          wx.showToast({
            title: '连接服务器失败',
            icon: 'none',
            duration: 2000
          })

        }
      },
      fail: (err) => {
        wx.showToast({
          title: '连接失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
}

class XHTTP {
  request(params) {

    if (!params.method) {
      params.method = 'GET'
    }
    let jwt_token = wx.getStorageSync('jwt_token')
    wx.request({
      url: config.apiBase + params.url,
      method: params.method,
      data: params.data,
      header: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt_token,
      },
      success: (res) => {
        params.success(res)
      },
      fail: (err) => {
        wx.showToast({
          title: '连接失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
}

export { HTTP }
export { XHTTP }
