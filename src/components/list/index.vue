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
                <a class="good-list" href="https://item.m.jd.com/product/278118.html">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip new">
                            <div class="tip-info">
                                <span>新品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip first">
                            <div class="tip-info">
                                <span>首发</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
                    </div>
                </a>
                <a class="good-list">
                    <div class="good-img">
                        <img src="../../assets/img/1.png" alt="">
                        <div class="tip hot">
                            <div class="tip-info">
                                <span>爆品</span>
                            </div>
                        </div>
                    </div>
                    <div class="good-info">
                        <div class="good-title">
                            惠普（HP）暗影精灵III代 15.6英寸游戏笔记本（i7-7700HQ 8G 128GSSD 1T GTX1050Ti 4G独
                        </div>
                        <div class="good-evaluate">
                            <span class="comment-number">878条评价</span>
                            <span class="comment-rate">95% 好评</span>
                        </div>
                        <div class="price-wrap">
                            <div class="now-price">
                                <span>¥</span>7999.00</div>
                            <div class="sale-icon">
                                <div class="icon coupon"></div>
                                <div class="icon dou"></div>
                                <!-- <div class="icon off"></div> -->
                                <div class="icon gift"></div>
                            </div>
                        </div>
                        <!-- <div class="buy-car">
                                                            <span class="icon-wrap"></span>
                                                        </div> -->
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
import { arrTips, getCookie, setTitle, bodyOverflow, clickSend, toShare, goTop, debounce } from '../../util';
export default {
    name: 'list',
    data() {
        return {
            bannerList: [{
                image_url: '../../assets/img/banner.png',
                url: ''
            }],
            goUpShow: false,
            currentPage: 1,
            pageInfo: false,
        }
    },
    created() {
        setTitle('手机智能导购');

        this.searchList();

        window.onscroll = null;
        let height = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        document.addEventListener('touchstart', () => {
            this.pageInfo = true;
        });
        window.onscroll = debounce(() => {

            let scrollTop = document.body.scrollTop;
            if (scrollTop > 450) {
                this.goUpShow = true;
            } else {
                this.goUpShow = false;
            }

            this.currentPage = Math.floor(scrollTop / 550) + 1;
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
            let params = this.$route.query;
            console.log(params);
            params = {
                "sign": "aeds32asd42323",
                "data": {
                    "pin": "adcUfNKLgAriMy",
                    "catid": "655",
                    "tagList": [
                        {
                            "tag_id": 11
                        }
                    ]
                }
            }
            let opts = {
                method: 'recomskulist',
                timestamp: 'currentTimestamp',
                appkey: 'tuniu'
            }
            this.recomskulist(opts, params);
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
                    return;
                }
                if (data.data.code == 200) {
                    let json = data.data;
                    self.intervalQuerySuccess(json, opts);
                } else if (data.data.code == 300) {
                    this.errorMsg = arrTips[2];
                    this.errorType = 2;
                    this.isLoading = false;
                } else if (data.data.code == 0) {
                    this.errorMsg = arrTips[2];
                    this.errorType = 2;
                    this.isLoading = false;
                } else {
                    this.errorMsg = arrTips[2];
                    this.errorType = 2;
                    this.isLoading = false;
                }
            }).catch(error => {
                if (apis.isCancel(error)) {
                    console.log('请求已取消');
                } else {
                    this.isLoading = false;
                    this.errorMsg = '网络异常, 未获取到航班信息';
                    this.errorType = 4;
                    console.warn('=========================', error);
                }
            });
        },
    }
}
</script>

