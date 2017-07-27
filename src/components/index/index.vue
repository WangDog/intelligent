<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@mixin button {
    background-image: url(../../assets/img/button.png);
    background-repeat: no-repeat;
    background-size: px2remN(344) px2remN(500);
}

.next-page-2-disabled {
    @include button;
    height: px2remN(100);
    width: px2remN(304);
    background-position: 0 0;
}

.next-page-2 {
    @include button;
    height: px2remN(100);
    width: px2remN(304);
    background-position: 0 px2remN(-100);
}

.next-page-1 {
    @include button;
    height: px2remN(100);
    width: px2remN(304);
    background-position: 0 px2remN(-200);
}

.search-disabled {
    @include button;
    height: px2remN(100);
    width: px2remN(344);
    background-position: 0 px2remN(-300);
}

.search {
    @include button;
    height: px2remN(100);
    width: px2remN(344);
    background-position: 0 px2remN(-400);
}

.index {
    background: #fff;
    height: 100%;
    min-height: 100%;
    position: relative;
    .question-guide {
        position: relative;
        width: px2remN(714);
        height: px2remN(442);
        top: px2remN(80);
        left: px2remN(18);
        right: px2remN(18);
        background: url(../../assets/img/guide.png) no-repeat;
        background-size: 100%;
        color: #fff;
    }
    .button-group {
        position: fixed;
        bottom: px2remN(32);
        width: 100%; //height: px2remN(400);
        padding: px2remN(0) px2remN(46);
        button.next-step {
            display: block; //width: px2remN(304);
            //height: px2remN(100);
            margin: px2remN(50) auto;
            border: none;
        }
        .pre-step {
            float: left;
            width: px2remN(84);
            height: px2remN(28); //margin-right: px2remN(46);
            background: url('../../assets/img/pre_page.png') no-repeat;
            background-size: px2remN(84) px2remN(28);
        }
        .skip {
            float: right;
            width: px2remN(56);
            height: px2remN(28); //margin-left: px2remN(46);
            background: url('../../assets/img/skip.png') no-repeat;
            background-size: px2remN(56) px2remN(28);
        }
    }
}

.question-guide-animation {
    animation-name: question-guide-animation;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
}

@keyframes question-guide-animation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.question-panel-animation {
    animation-name: size;
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: backwards;
}

@keyframes size {
    from {
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom right;
    }
    to {
        opacity: 1;
        transform: scale(1);
        transform-origin: bottom right;
    }
}

.answer-panel-init {
    animation-name: init;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-fill-mode: backwards;
}

@keyframes init {
    from {
        transform: translateX(20px);
        opacity: 0;
    }
    to {
        transform: translateX(1);
        opacity: 1;
    }
}

.button-animation {
    animation-name: fadeInUp;
    animation-delay: 3s;
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0)
    }
    100% {
        opacity: 1;
        transform: none
    }
}

@keyframes fadeOutDown {
    from {
        opacity: 1
    }
    100% {
        opacity: 0;
        transform: translate3d(0, 100%, 0)
    }
} //答案面板进场出场动画效果
.question-answer-enter {
    transform: translateX(px2remN(500));
    opacity: 0;
}

.question-answer-enter-active {
    transition: all 1.5s ease; //transition-delay: .5s;
}

.question-answer-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.question-answer-leave {
    transform: translateX(0);
    opacity: 1;
}

.question-answer-leave-active {
    transition: all .5s ease;
}

.question-answer-leave-to {
    transform: translateX(px2remN(-500));
    opacity: 0;
} //答案面板进场出场动画效果
//按钮动画效果
.toggle-btn-enter-active {
    transition: all .5s ease;
    transition-delay: 1s;
}

.toggle-btn-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0)
}

.toggle-btn-enter-to {
    opacity: 1;
    transform: none;
}

.toggle-btn-leave {
    opacity: 1;
}

.toggle-btn-leave-active {
    transition: all 1s ease;
}

.toggle-btn-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0)
} //按钮动画效果
</style>

<template>
    <!--手下留情，没写过vue，刚学过一个礼拜，堆代码中，也不管解耦不解耦了  -->
    <!--手下留情，没写过vue，刚学过一个礼拜，堆代码中，也不管解耦不解耦了  -->
    <!--手下留情，没写过vue，刚学过一个礼拜，堆代码中，也不管解耦不解耦了  -->
    <transition name="question-panel" mode="out-in" v-if="questionAndAnswerList">
        <section class="index">
            <div class="question-guide question-guide-animation"></div>
            <question-panel v-if="questionAndAnswerList" class="question-panel-animation" :limit="questionAndAnswerList[step-1].answerLimit" :msg="questionAndAnswerList[step-1].text" :step="step"></question-panel>
            <div class="answer-panel-init">
                <transition name="question-answer" mode="out-in">
                    <div v-if="step == 1" key="step1">
                        <role :limit="questionAndAnswerList[step-1].answerLimit" :roleSelectedList.sync="roleSelectedList" :questionAndAnswerRole="questionAndAnswerList[step-1]"></role>
                    </div>
                    <div v-if="step == 2" key="step2">
                        <func :limit="questionAndAnswerList[step-1].answerLimit" :funcSelectedList.sync="funcSelectedList" :questionAndAnswerFunc="questionAndAnswerList[step-1]"></func>
                    </div>
                    <div v-if="step == 3" key="step3">
                        <price :limit="questionAndAnswerList[step-1].answerLimit" :priceSelectedList.sync="priceSelectedList" :questionAndAnswerPrice="questionAndAnswerList[step-1]"></price>
                    </div>
                </transition>
            </div>
            <transition name="toggle-btn">
                <div class="button-group clearfix" v-if="toggleBtn">
                    <button class="next-step" :class="{'next-page-1': roleLimit, 'next-page-2-disabled': !roleLimit}" @click="nextStep()" v-if="step === 1" :disabled="!roleLimit"></button>
                    <button class="next-step" :class="{'next-page-2': funcLimit, 'next-page-2-disabled': !funcLimit}" @click="nextStep()" v-if="step === 2" :disabled="!funcLimit"></button>
                    <button class="next-step" :class="{'search': priceLimit, 'search-disabled': !priceLimit}" @click="search()" v-if="step === 3" :disabled="!priceLimit"></button>
                    <div v-if="step === 2 || step === 3" class="pre-step" @click="preStep()"></div>
                    <div v-if="step === 1 || step === 2" class="skip" @click="skip()"></div>
                </div>
            </transition>
        </section>
    </transition>
</template>

<script>
import md5 from 'blueimp-md5';
import apis from '../../util/api';
import {
    arrTips,
    getCookie,
    setTitle,
    bodyOverflow,
    clickSend,
    toShare,
    goTop,
    debounce
} from '../../util';
import role from './role';
import func from './function';
import price from './price';
import questionPanel from './question_panel';

const STEP_ONE = 1;
const STEP_TWO = 2;
const STEP_THREE = 3;

export default {
    name: 'intelligent',
    data() {
        return {
            step: STEP_ONE,
            title: '挑手机',
            questionAndAnswerList: null,
            toggleBtn: false,
            roleSelectedList: [],
            funcSelectedList: [],
            priceSelectedList: []
        };
    },
    computed: {
        btnDisabled: function () {
            if (this.step == 2) return false;
            return true;
        },
        roleLimit: function () {
            return this.roleSelectedList.length >= this.questionAndAnswerList[0].answerLimit;
        },
        funcLimit: function () {
            return this.funcSelectedList.length >= 1;
            // return this.funcSelectedList.length >= this.questionAndAnswerList[1].answerLimit;
        },
        priceLimit: function () {
            return this.priceSelectedList.length >= this.questionAndAnswerList[2].answerLimit;
        }
    },
    created() {
        setTitle('手机智能导购');
        this.getQuestionAndAnswer();
        setTimeout(() => {
            this.toggleBtn = true;
        }, 1000);
    },
    components: {
        questionPanel,
        role,
        func,
        price
    },
    methods: {
        nextStep() {
            this.step++;
            this.toggleBtnFuc();
        },
        preStep() {
            this.step--;
            this.toggleBtnFuc();
        },
        skip() {
            switch (step) {
                case 1:
                    this.roleSelectedList = [];
                    break;
                case 2:
                    this.funcSelectedList = [];
                    break;
                case 3:
                    this.priceSelectedList = [];
                    break;
            }
            this.step++;
            this.toggleBtnFuc();
        },
        search() {
            this.$router.push({
                name: 'list',
                query: {
                    fromtype: 'index',
                    answerList: this.questionAndAnswerList,
                }
            });
        },
        toggleBtnFuc() {
            this.toggleBtn = false;
            setTimeout(() => {
                this.toggleBtn = true
            }, 1500);
        },
        /**
         * 获取问题答案
         * secretkey: '12345678',
         *    appkey: '8a48b5514b0b8727014b2a490bfd1bee',
         */
        getQuestionAndAnswer() {
            const secretkey = '12345678';
            let opts = {
                method: 'questionandanswer',
                appkey: '8a48b5514b0b8727014b2a490bfd1bee',
                timestamp: Math.floor((new Date().getTime()) / 1000)
            }
            let params = {
                "data": {
                    // "pin": "adcUfNKLgAriMy",
                    "pin": window.pin,
                    "catid": "655",
                }
            }
            //对时间戳、secretkey、请求body数据进行md5校验
            params.sign = md5('' + opts.timestamp + secretkey + JSON.stringify(params.data));
            console.log(params.sign);
            this.getQuestion(params, opts);
        },
        /**
         * 获取问题答案
         * @param {object} opts params
         * @param {object} body body
         */
        getQuestion(opts, body) {
            let self = this;
            apis.getQuestion(opts, body).then(data => {
                if (!data || !data.data) {
                    this.isLoading = false;
                    this.errorMsg = '网络异常, 未获取到问题列表信息';
                    this.errorType = 4;
                    return;
                }
                self.questionAndAnswerList = data.data.questionAndAnswerList;
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
    },
    watch: {
        // roleSelectedList: function () {
        //     console.log("roleSelectedList ==> " + JSON.stringify(this.roleSelectedList));
        // },
        // funcSelectedList: function () {
        //     console.log("funcSelectedList ==> " + this.funcSelectedList);
        // },
        // priceSelectedList: function () {
        //     console.log("priceSelectedList ==> " + this.priceSelectedList);
        // }
    },
    activated() {
        toShare();
    }
}
</script>