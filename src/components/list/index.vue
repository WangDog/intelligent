<style lang="scss" scoped>
@import "../../assets/css/mix.scss";

@mixin good {
    background-image: url(../../assets/img/good.png);
    background-repeat: no-repeat;
    background-size: px2remN(74) px2remN(338);
}

//赠
.gift {
    @include good;
    height: px2remN(30);
    width: px2remN(32);
    background-position: 0 0;
}

//京豆
.dou {
    @include good;
    height: px2remN(30);
    width: px2remN(32);
    background-position: 0 px2remN(-30);
}

//券
.coupon {
    @include good;
    height: px2remN(30);
    width: px2remN(32);
    background-position: 0 px2remN(-60);
}

//满减
.off {
    @include good;
    height: px2remN(30);
    width: px2remN(52);
    background-position: 0 px2remN(-90);
}

.new {
    @include good;
    height: px2remN(72);
    width: px2remN(72);
    background-position: 0 px2remN(-120);
}

.first {
    @include good;
    height: px2remN(72);
    width: px2remN(72);
    background-position: 0 px2remN(-192);
}

.hot {
    @include good;
    height: px2remN(74);
    width: px2remN(74);
    background-position: 0 px2remN(-264);
}

.index {
    background: #f3f3f4;
    height: 100%;
    min-height: 100%;
    background: #fff;
    .indexBanner {
        width: 100%;
        height: px2remN(140); //background-size: px2remN(750) px2remN(140);
        background-size: 100%;
        background-image: url(../../assets/img/banner.png);
    }
    .index-content {
        width: 100%;
        margin-top: px2remN(24);

        .info {
            font-size: 16px;
            color: #045085;
            margin: px2remN(24) px2remN(32) px2remN(16);
        }
        .index-main {
            background: #fff;
            padding: px2remN(16) px2remN(32);

            .good-list {
                position: relative;
                width: 47%;
                float: left;
                background-color: #fff;
                margin-right: px2remN(34);
                margin-bottom: px2remN(20);
                text-decoration: none;

                &:nth-child(2n) {
                    margin-right: 0;
                }

                .good-img {
                    border: none;

                    img {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        background-color: white;
                        min-width: 161.3px;
                        min-height: 161.3px;
                        opacity: 0;
                        transition: opacity .5s ease-in;
                    }

                    .tip {
                        position: absolute;
                        top: 0;
                        left: 0;

                        .tip-info {

                            transform: rotate(-12deg) translate(px2remN(5), px2remN(15));
                            span {
                                font-size: 14px;
                                color: #FFF;
                                font-weight: bold;
                            }
                        }
                    }
                }

                .good-info {
                    height: px2remN(190);

                    .good-title {
                        display: -webkit-box;
                        height: px2rem(70);
                        line-height: px2remN(35);
                        margin-top: px2remN(15);
                        padding: 0 px2remN(8);
                        font-size: 13px;
                        color: #000;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                    }
                    .good-evaluate {
                        position: absolute;
                        bottom: px2rem(12);
                        left: px2remN(8);
                        font-size: 12px;
                        color: #9c9c9c;
                        height: px2remN(40);
                        line-height: px2remN(40);
                        max-width: 80%;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;

                        span {
                            display: block;
                            float: left;
                            &.comment-number {
                                margin-right: 5px;
                            }
                        }
                    }
                    .price-wrap {
                        margin: px2remN(10) auto 0 px2remN(8);
                        .now-price {
                            font-size: 16px;
                            color: #e4393c;
                            font-weight: bold;
                            max-width: 100%;
                            height: px2remN(50);
                            line-height: px2remN(50);
                            margin-right: px2remN(10);
                            float: left;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            span {
                                font-size: 12px;
                                margin-right: px2rem(6);
                            }
                        }
                        .sale-icon {
                            display: inline-block;
                            margin-top: px2remN(10);
                            overflow: hidden;
                            .icon {
                                float: left;
                                margin-right: px2remN(4);
                            }
                        }
                    }
                    .buy-car {
                        position: absolute;
                        width: px2remN(60);
                        height: px2remN(60);
                        bottom: px2remN(10);
                        right: px2remN(10);
                        z-index: 10;

                        span.icon-wrap {
                            display: block;
                            position: absolute;
                            width: 25px;
                            height: 25px;
                            bottom: px2remN(10);
                            right: 0;
                            margin-top: -5px;
                            background-color: #f02b2b;
                            border-radius: 2px;

                            &:after {
                                content: "";
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                margin-top: -8px;
                                margin-left: -8px;
                                background-image: url(../../assets/img/icon.png);
                                background-size: 234px 186px;
                                background-position: -95px -169px;
                                width: 15px;
                                height: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
}

.goUp {
    width: 1.28rem;
    height: 1.28rem;
    position: fixed;
    right: 0.46667rem;
    bottom: .6rem;
    background: url(../../assets/img/scroll-to-top-icon.png) no-repeat;
    background-size: px2remN(76); //background-position: -2.30667rem -0.16rem;
    z-index: 150;
}

.pageInfo {
    width: px2remN(100);
    height: px2remN(35);
    font-size: 10px;
    color: #FFF;
    position: fixed;
    bottom: px2remN(30);
    left: 40%;
    display: inline-block;
    background: #000;
    z-index: 10;
    opacity: .6;
    line-height: px2remN(35);
    border-radius: 10px;
    text-align: center;
}
</style>
<template>
    <section class="index">
        <!--banner广告位-->
        <div :class="{indexBanner: bannerList.length>0}">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="(val, key) in bannerList" :key="val.picno">
                    <div class="indexBanner" @click="linkPage(val.url)"></div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!--广告位end-->
        <section class="index-content">
            <div class="info">
                <span>以下是为您量身推荐的手机：</span>
            </div>
            <div class="index-main clearfix">
                <a v-for="(recomSku, index) in recomSkuList" :key="index" class="good-list" :href="'https://item.m.jd.com/product/' + recomSku.skuId + '.html'">
                    <div class="good-img">
                        <img v-if="index < 4" style="opacity: 1;" :src="'https://img14.360buyimg.com/n3/' + recomSku.imagePath" alt="图片找不到了">
                        <img v-if="index >= 4" :data-src="'https://img14.360buyimg.com/n3/' + recomSku.imagePath" alt="图片找不到了">
                        <div class="tip" :class="recomSku.adTag | adTagFilter" v-if="recomSku.adTag">
                            <div class="tip-info">
                                <span>{{recomSku.adTag}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            {{recomSku.name}}
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">{{recomSku.skuCommentSummary.commentCount}}条评价</span>
                            <span class="comment-rate">{{recomSku.skuCommentSummary.goodRateShow}}%好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>{{recomSku.price}}.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                 <!-- <div class="icon off"></div>  -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
        <transition enter-active-class="goUpAni slideInUp" leave-active-class="goDownAni slideOutDown">
            <div id="pageInfo" class="pageInfo" v-show="pageInfo">
                <span>{{currentPage}}/10</span>
            </div>
        </transition>
        <transition enter-active-class="goUpAni slideInUp" leave-active-class="goDownAni slideOutDown">
            <div id="goUp" class="goUp" v-show="goUpShow" @click="goUpTop"></div>
        </transition>
    </section>
</template>
<script>
import apis from '../../util/api';
import md5 from 'blueimp-md5';
import { arrTips, getCookie, setTitle, bodyOverflow, clickSend, toShare, goTop, debounce } from '../../util';
export default {
    name: 'list',
    data() {
        return {
            bannerList: [{
                image_url: '../../assets/img/banner.png',
                url: ''
            }],
            showLoading: true,
            goUpShow: false,
            currentPage: 1,
            pageInfo: false,
            recomSkuList: null,
            imgCount: 40,
            imgCurrent: 4
        }
    },
    created() {
        setTitle('手机智能导购');

        this.searchList();

        this.$loading.show();

        window.onscroll = null;

        let height = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        let img = document.getElementsByTagName('img');

        //触屏时显示页码信息
        document.addEventListener('touchstart', () => {
            this.pageInfo = true;
        });

        window.onscroll = debounce(() => {

            let scrollTop = document.body.scrollTop;
            let clientHeight = document.body.clientHeight;
            let screenHeight = window.screenHeight;

            //图片懒加载
            for (let i = this.imgCurrent; i < this.imgCount; i++) {
                if (img[i].offsetParent.offsetTop < clientHeight + scrollTop) {
                    img[i].src = img[i].getAttribute('data-src');
                    img[i].style.opacity = 1;
                    this.imgCurrent = i + 1;
                    console.log('图片加载[' + i + ']:' + img[i].src);
                }
            }

            //显示返回顶部按钮
            if (scrollTop > 450) {
                this.goUpShow = true;
            } else {
                this.goUpShow = false;
            }

            this.currentPage = Math.floor(scrollTop / 550) + 1
            //this.pageInfo = false;
        }, 30, true);
    },
    methods: {
        linkPage(url) {  //Banner link
            //clickSend("MAirplane_Banner"); //Banner埋点
            window.location.href = url;
        },
        goUpTop() {
            goTop();
        },
        searchList() {
            let answerList = this.$route.answerList;
            const secretkey = '12345678';
            let opts = {
                method: 'recomskulist',
                appkey: '8a48b5514b0b8727014b2a490bfd1bee',
                timestamp: Math.floor((new Date().getTime()) / 1000)
            }
            let params = {
                "data": {
                    "area": window.area,
                    "pin": window.pin,
                    // "area": "2,2825,51932,0.137923392",
                    // "pin": "adcUfNKLgAriMy",
                    "tagList": [
                        {
                            "tag_id": 2
                        }
                    ],
                    "catid": "655"
                }
            }
            console.log('' + opts.timestamp + secretkey + JSON.stringify(params.data));
            params.sign = md5('' + opts.timestamp + secretkey + JSON.stringify(params.data));
            console.log(params.sign);
            this.recomskulist(params, opts);
        },
        /**
         * 查询手机信息列表
         * @param {object} opts
         */
        recomskulist(opts, body) {
            let self = this;
            apis.recomskulist(opts, body).then(data => {
                if (!data || !data.data) {
                    this.isLoading = false;
                    this.errorMsg = '网络异常, 未获取到航班信息';
                    this.errorType = 4;
                    this.$loading.close();
                    return;
                }
                self.recomSkuList = data.data.recomSkuList;
                this.$loading.close();
            }).catch(error => {
                if (apis.isCancel(error)) {
                    console.log('请求已取消');
                } else {
                    this.isLoading = false;
                    this.errorMsg = '网络异常, 未获取到航班信息';
                    this.errorType = 4;
                    console.warn('=========================', error);
                }
                this.$loading.close();
            });
        },
    }
}
</script>

