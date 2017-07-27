<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@mixin price {
    background-image: url(../../assets/img/price.png);
    background-repeat: no-repeat;
    background-size: px2remN(546) px2remN(840);
}

.price-0 {
    @include price;
    height: px2remN(82);
    width: px2remN(320);
    background-position: 0 0;
}

.price-0-selected {
    @include price;
    height: px2remN(82);
    width: px2remN(342);
    background-position: 0 px2remN(-85);
}

.price-1 {
    @include price;
    height: px2remN(84);
    width: px2remN(370);
    background-position: 0 px2remN(-168);
}

.price-1-selected {
    @include price;
    height: px2remN(84);
    width: px2remN(394);
    background-position: 0 px2remN(-252);
}

.price-2 {
    @include price;
    height: px2remN(82);
    width: px2remN(420);
    background-position: 0 px2remN(-336);
}

.price-2-selected {
    @include price;
    height: px2remN(82);
    width: px2remN(444);
    background-position: 0 px2remN(-420);
}

.price-3 {
    @include price;
    height: px2remN(84);
    width: px2remN(470);
    background-position: 0 px2remN(-504);
}

.price-3-selected {
    @include price;
    height: px2remN(84);
    width: px2remN(494);
    background-position: 0 px2remN(-588);
}

.price-4 {
    @include price;
    height: px2remN(84);
    width: px2remN(522);
    background-position: 0 px2remN(-672);
}

.price-4-selected {
    @include price;
    height: px2remN(84);
    width: px2remN(546);
    background-position: 0 px2remN(-756);
}

.price-panel {
    margin-top: px2remN(54);

    li {
        margin: 0 auto px2remN(26);

        .price {
            margin: 0 auto;
            animation-name: fadeIn;
            animation-duration: .5s;
            animation-fill-mode: backwards; //display: inline-block;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            line-height: px2remN(84);
            padding-left: px2remN(40);
        }
        span {
            transition: 0.6s;
            transform-style: preserve-3d;
        }
    }
}

.price-init .price {
    $delayTime: 2s;
    &.price-0 {
        animation-delay: $delayTime;
    }
    &.price-1 {
        animation-delay: $delayTime + .25s;
    }
    &.price-2 {
        animation-delay: $delayTime + .5s;
    }
    &.price-3 {
        animation-delay: $delayTime + .75s;
    }
    &.price-4 {
        animation-delay: $delayTime + 1s;
    }
}

@keyframes fadeIn {
    from {
        transform: translateX(50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.toggle-enter-active {
    transition: all .2s;
}

.toggle-leave-active {
    transition: all .5s;
}

.toggle-enter {
    opacity: 0;
    transform: rotateY(180deg);
}

.toggle-leave-to {
    opacity: 0;
    transform: rotateY(-180deg);
}

.toggle-enter-to .toggle-leave {
    opacity: 1;
    transform: rotateY(180deg);
}
</style>
<template>
    <ul class="price-panel" :class="{'price-init': init}">
        <li v-for="(answer, index) in  questionAndAnswerPrice.answerList" v-bind:key="index">
            <transition name="toggle" mode="out-in">
                <div @click="select(answer, 'select')" class="price" :class="'price-' + index" key="albed" v-if="priceSelectedList[0] != answer">
                    <span>{{answer.text}}</span>
                </div>
                <div @click="select(answer, 'cancel')" class="price" :class="'price-' + index + '-selected'" key="disabled" v-if="priceSelectedList[0] == answer">
                    <span>{{answer.text}}</span>
                </div>
            </transition>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'price',
    data() {
        return {
            init: true,
        }
    },
    props: {
        questionAndAnswerPrice: {
            type: Object,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        priceSelectedList: {

        }
    },
    methods: {
        select: function (answer) {
            this.init = false;
            if(!(this.priceSelectedList.pop() == answer)){
                this.priceSelectedList.push(answer)
            };
        }
    }
}
</script>