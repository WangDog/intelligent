<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@mixin price {
    background-image: url(../../assets/img/price.png);
    background-repeat: no-repeat;
    background-size: px2remN(546) px2remN(840);
}

.price-1 {
    @include price;
    height: px2remN(82);
    width: px2remN(320);
    background-position: 0 0;
}

.price-1-selected {
    @include price;
    height: px2remN(82);
    width: px2remN(342);
    background-position: 0 px2remN(-85);
}

.price-2 {
    @include price;
    height: px2remN(84);
    width: px2remN(370);
    background-position: 0 px2remN(-168);
}

.price-2-selected {
    @include price;
    height: px2remN(84);
    width: px2remN(394);
    background-position: 0 px2remN(-252);
}

.price-3 {
    @include price;
    height: px2remN(82);
    width: px2remN(420);
    background-position: 0 px2remN(-336);
}

.price-3-selected {
    @include price;
    height: px2remN(82);
    width: px2remN(444);
    background-position: 0 px2remN(-420);
}

.price-4 {
    @include price;
    height: px2remN(84);
    width: px2remN(470);
    background-position: 0 px2remN(-504);
}

.price-4-selected {
    @include price;
    height: px2remN(84);
    width: px2remN(494);
    background-position: 0 px2remN(-588);
}

.price-5 {
    @include price;
    height: px2remN(84);
    width: px2remN(522);
    background-position: 0 px2remN(-672);
}

.price-5-selected {
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
    &.price-1 {
        animation-delay: 3s;
    }
    &.price-2 {
        animation-delay: 3.25s;
    }
    &.price-3 {
        animation-delay: 3.5s;
    }
    &.price-4 {
        animation-delay: 3.75s;
    }
    &.price-5 {
        animation-delay: 4s;
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
        <li v-for="i in 5" v-bind:key="i">
            <transition name="toggle" class="" mode="out-in">
                <div @click="select(i, $event)" class="price" :class="'price-' + i" key="albed" v-if="price[i-1].disabled">
                    <span>{{price[i-1].range}}</span>
                </div>
                <div @click="select(i, $event)" class="price" :class="'price-' + i + '-selected'" key="disabled" v-else>
                    <span>{{price[i-1].range}}</span>
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
            price: [{
                disabled: true,
                range: '1500元以下'
            }, {
                disabled: true,
                range: '1500元-2500元'
            }, {
                disabled: true,
                range: '2500元-3500元'
            }, {
                disabled: true,
                range: '3500元-4500元'
            }, {
                disabled: true,
                range: '4500元以上'
            }],
            init: true
        }
    },
    methods: {
        select: function (i, event) {
            this.init = false
            this.price[i - 1].disabled = !this.price[i - 1].disabled;
        }
    }
}
</script>