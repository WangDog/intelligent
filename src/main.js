import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App';
import { Toast, Swipe, SwipeItem} from 'mint-ui';
import Loading from './components/common/loading/';
import Confirm from './components/common/confirm/';
import ClosetConfirm from './components/common/closetConfirm';
import { storage } from './util';
import { isLogin, checkIsAuth } from './util/login';
import './assets/css/common.scss';
import Promise from 'promise-polyfill';
import * as filters from './filters';

if (!window.Promise) {
  window.Promise = Promise;
}

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])); //注册过滤器
// 注册toast loading
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$loading = Vue.prototype.$loading = Loading;
Vue.$confirm = Vue.prototype.$confirm = Confirm;
Vue.$closetConfirm = Vue.prototype.$closetConfirm = ClosetConfirm;

Vue.config.productionTip = false;

var attachFastClick = require('fastclick');
attachFastClick.attach(document.body);

Vue.$pin = Vue.prototype.$pin = window.pin = storage.getCookie('pin') ||  (process.env.NODE_ENV == 'development' ? 'adcUfNKLgAriMy' : ''); // pin
Vue.$area =  Vue.prototype.$area = window.area = storage.getCookie('ipLoc-djd') ? storage.getCookie('ipLoc-djd').replace(/-/g, ',') : (process.env.NODE_ENV == 'development' ? '2,2825,51932,0.137923392' : ''); // area
console.log('[ pin ] => ' + Vue.$pin, '[ area ] => ' + Vue.$area);
// 请求判断登录接口
// isLogin().then(() => {
//     // 已经登录，业务逻辑
// }).catch(err => {

// });
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
});
