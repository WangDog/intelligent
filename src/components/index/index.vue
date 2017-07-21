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
    animation-delay: 3s;
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


// .question-panel-enter-active {
//   transition: all .5s ease;
// }
// .question-panel-leave-active {
//   transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .question-panel-enter {
//   transform: translateX(20px);
//   opacity: 0;
// }
// .question-panel-leave-to {
//   transform: translateX(-20px);
//   opacity: 0;
// }

/*答案面板进场出场动画效果*/

.question-answer-enter {
    transform: translateX(px2remN(500));
    opacity: 0;
}

.question-answer-enter-active {
    transition: all 1s ease;
    transition-delay: 2.5s;
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
}
</style>

<template>
    <transition name="question-panel" mode="out-in">
        <section class="index">
            <div class="question-guide question-guide-animation"></div>
            <question-panel class="question-panel-animation" :msg="questionList[step-1]" :step="step"></question-panel>
            <div class="answer-panel-init">
                <transition name="question-answer" mode="out-in">
                    <div v-if="step == 1" key="step1">
                        <who></who>
                    </div>
                    <div v-if="step == 2" key="step2">
                        <func></func>
                    </div>
                    <div v-if="step == 3" key="step3">
                        <price></price>
                    </div>
                </transition>
            </div>
            <div class="button-group clearfix">
                <button class="next-step" @click="nextStep()" v-if="step === 1 || step === 2"  :class="{'next-page-1': step === 1, 'next-page-2': step === 2}"></button>
                <button class="next-step" @click="search()" v-if="step === 3" :class="{'search': step === 3}"></button>
                <div v-if="step === 2 || step === 3" class="pre-step" @click="preStep()"></div>
                <div v-if="step === 1 || step === 2" class="skip" @click="skip()"></div>
            </div>
        </section>
    </transition>
</template>

<script>
import who from './who';
import func from './function';
import price from './price';
import questionPanel from './question_panel';
import { arrTips, getCookie, setTitle, bodyOverflow, clickSend, toShare, goTop, debounce } from '../../util';

export default {
    name: 'intelligent',
    data() {
        return {
            step: 2,
            title: '挑手机',
            rangeValue: 0,
            questionList: ['您需要为谁挑选手机？', '您最看重的手机的功能是？', '你需要的手机的价格是？'],
            questionAll: false,
            questionPanel: (() => {
                return document.getElementById('question-animation');
            })()
        };
    },
    created() {
        setTitle('手机智能导购');
    },
    components: {
        questionPanel,
        who,
        func,
        price
    },
    methods: {
        nextStep() {
            this.step++;
        },
        preStep() {
            this.step--;
        },
        search() {
            this.$router.push({
                name: 'list', query: {
                    fromtype: 'index',
                    answerList: this.questionList,
                }
            });
        }
    }
}
</script>