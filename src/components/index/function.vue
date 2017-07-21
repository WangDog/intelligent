<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@import "../../assets/css/animate.css";

@mixin bubble {
    background-image: url(../../assets/img/bubble.png);
    background-repeat: no-repeat;
    background-size: px2remN(1478) px2remN(208); // animation-name: flipInX;
    // animation-direction: alternate;
    // animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-duration: 2s; // animation-timing-function: ease-in-out;
}

.bubble_1 {
    @include bubble;
    height: px2remN(184);
    width: px2remN(184);
    background-position: px2remN(-670) 0;
    animation-name: bounceInLeft;
    animation-delay: 2s;
}

.bubble_2 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-162) 0;
    animation-name: bounceInDown;
    animation-delay: 2.25s;
}


.bubble_3 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-323) 0;
    animation-name: bounceInDown;
    animation-delay: 2s;
}

.bubble_4 {
    @include bubble;
    height: px2remN(184);
    width: px2remN(184);
    background-position: px2remN(-486) 0;
    animation-name: bounceInRight;
    animation-delay: 2.25s;
}

.bubble_5 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: 0 0;
    animation-name: bounceInUp;
    animation-delay: 2.25s;
}

.bubble_6 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-323) 0;
    animation-name: bounceInUp;
    animation-delay: 2s;
}

.bubble_7 {
    @include bubble;
    height: px2remN(208);
    width: px2remN(208);
    background-position: px2remN(-1060) 0;
    animation-name: bounceInRight;
    animation-delay: 3s;
}

.bubble_8 {
    @include bubble;
    height: px2remN(208);
    width: px2remN(208);
    background-position: px2remN(-854) 0;
    animation-name: bounceInRight;
    animation-delay: 3.25s;
}

input[type='checkbox'] {
    display: none;

    &:checked+label {
        //background-position: 0 -60px;
        animation: none;
        svg {
            opacity: 1;
        }
    }
}

label {
    display: inline-block;
    position: relative;
    transition: background .5s linear;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    span {
        //line-height: 80px;
        display: inline-block;
        position: absolute;
        top: 25px;
        left: 25px;
    }

    svg {
        opacity: 0;
        display: inline-block;
        color: rgba(0, 0, 0, 0.87);
        fill: rgb(0, 188, 212);
        height: 24px;
        width: 24px;
        user-select: none;
        transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        position: absolute;
        transform: scale(1);
        bottom: 0;
        right: 0;
    }
}

ul {
    margin: px2remN(10) px2remN(20);
    overflow: hidden;
    li {
        display: inline-block;
        margin: 0 px2remN(10);
        position: relative;

        &:first-child {
            top: px2remN(random(100));
            left: px2remN(random(100));
        }

        &:nth-child(2) {
            top: px2remN(random(100));
            left: px2remN(random(80));
        }

        &:nth-child(3) {
            top: px2remN(random(60));
            left: px2remN(random(60));
        }

        &:nth-child(4) {
            top: px2remN(random(150));
            left: px2remN(random(40));
        }
        &:nth-child(5) {
            top: px2remN(random(100));
            left: px2remN(random(100));
        }
        &:nth-child(6) {
            top: px2remN(-random(180));
            left: px2remN(20+random(100));
        }
        &:nth-child(7) {
            top: px2remN(random(1));
            left: px2remN(random(200));
        }

        &:last-child {
            top: px2remN(-random(50));
            left: px2remN(100 + random(150));
        }
    }
}
</style>
<template>
    <ul>
        <li v-for="i in 8" v-bind:key="i">
            <input type="checkbox" :id="'bubble_' + i" />
            <label :for="'bubble_' + i" :class="'bubble_' + i" class="flipInX">
                <span>拍照</span>
                <svg viewBox="0 0 24 24" style="">
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
            </label>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'func',
    data() {
        return {}
    }
}
</script>
