import axios from 'axios';
//const apiHost = process.env.NODE_ENV == 'development' ? 'http://dgapi.jd.com/dgmobile/' : (location.protocol + '//xxxxx');

const ip = 'localhost' || process.env.ip;
const apiHost = process.env.NODE_ENV == 'development' ? `/intelligent/dgmobile` : (location.protocol + '//dgapi.jd.com/dgmobile/');

/**
 * api方法声明。
 * type：Get, Post
 * url: 请求的url
 */
const apiUrl = {
    recomskulist: { //用户获取根据答案推荐的商品接口
        type: 'post',
        url: apiHost + '/recomskulist',
    },
    getQuestion: {
        type: 'post',
        url: apiHost + '/questionandanswer'
    }
}

let apis = {};
let CancelToken = axios.CancelToken;
apis.isCancel = axios.isCancel; // 判断是否是取消
Object.keys(apiUrl).forEach((item) => {
    /**
     * 创建api请求function，返回promise对象
     */
    apis[item] = function apiFunc(data, params) {
        let obj = apiUrl[item];
        let promise;
        let dataTmp = data;
        let paramsTmp = params;
        promise = axios({
            method: obj.type,
            url: obj.url,
            timeout: 20000,
            data: obj.type === 'get' ? {} : dataTmp,
            params: paramsTmp,
            // params: obj.type === 'get' ? dataTmp : {},
            withCredentials: process.env.NODE_ENV == 'development' ? false : (process.env.test == 'true' ? false : true),
            cancelToken: new CancelToken(function executor(c) {
                apis[item + 'Cancel'] = c;
            })
        }).then(response => {
            let data = response.data;
            return data;
        });
        return promise;
    }
});

// apis中包含基本的请求接口和取消接口，如 apis.test 和 apis.textCancel，
// 同时还包含apis.isCancel判断是否是用户主动取消的请求
export default apis;