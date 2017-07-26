<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
.question {
    position: absolute;
    top: px2remN(20);
    left: px2remN(40);
    background-size: 100%;
    background-repeat: no-repeat;

    h2 {
        position: absolute;
        top: px2remN(50);
        left: px2remN(70);
        font-size: 16px;
        color: #fff;
        line-height: px2remN(40);
        letter-spacing: px2remN(3); //white-space: nowrap;
        .limit {
            font-size: 12px;
            .limit-count {
                font-size: 13px;
                font-style: oblique;
            }
        }
    }
    &.question-1 {
        background-image: url(../../assets/img/question_1.png);
        width: px2remN(480);
        height: px2remN(205);
        //background-size: 100% 100%;
        h2 {
            max-width: px2remN(400);
        }
    }

    &.question-2 {
        background-image: url(../../assets/img/question_2.png);
        width: px2remN(480);
        height: px2remN(205);
        background-size: 100% 100%;
        h2 {
            max-width: px2remN(480);
        }
    }
    &.question-3 {
        background-image: url(../../assets/img/question_3.png);
        width: px2remN(468);
        height: px2remN(190);
        h2 {
            max-width: px2remN(420);
        }
    }
    .tooltip {
        opacity: .8;
        transform: all 1s ease;
    }
}

.question-panel-enter {
    opacity: 0;
    transform: scale(0);
    transform-origin: bottom right;
}

.question-panel-enter-active,
.question-panel-leave-active {
    transform: all 1s ease-in-out;
}

.question-panel-enter-to {
    opacity: 1;
    transform: scale(1);
    transform-origin: bottom right;
}

.question-panel-leave {
    opacity: 1;
}

.question-panel-leave-to {
    opacity: 0;
}
</style>

<template>
    <transition name="question-panel">
        <div class="question" :class="'question-' + step" v-if="show">
            <h2>
                <span v-text="content"></span>
                <!-- </br> -->
                <div v-if="showLimit">
                    <span v-if="limit === 1" class="limit">请选择<strong class="limit-count">1</strong>个选项答案</span>
                    <span v-else class="limit">请选择<strong class="limit-count">1-{{limit}}</strong>个选项答案</span>
                </div>
            </h2>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'quesitonPanel',
    props: {
        step: {
            type: Number,
            required: true
        },
        msg: {
            // type: String,
            // required: true
        },
        limit: {

        }
    },
    data() {
        return {
            content: '',
            show: true,
            showLimit: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.showQuestion(this.msg);
        }, 1000);
    },
    methods: {
        showQuestion(msg) {
            let self = this;
            let t = setInterval(function () { write() }, 150);
            let i = 1;
            let len = msg.length;
            this.showLimit = false;
            function write() {
                var msg1 = self.msg.substring(0, i);
                self.content = msg1;
                if (i == len) {
                    clearInterval(t);
                    setTimeout(() => {
                        self.showLimit = true;
                    }, 500);
                }
                else
                    i++;
            }
        },
    },
    watch: {
        msg: function () {
            this.show = false;
            this.showLimit = false;
            this.content = '';
            setTimeout(() => {
                this.show = true;
                setTimeout(() => {
                    this.showQuestion(this.msg);
                }, 1000);
            }, 0);
        }
    }
}
</script>


