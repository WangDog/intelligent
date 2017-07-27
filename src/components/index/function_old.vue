<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@import "../../assets/css/animate.css";

@mixin bubble {
    background-image: url(../../assets/img/bubble.png);
    background-repeat: no-repeat;
    background-size: px2remN(1478) px2remN(208); // animation-name: flipInX;
    animation-fill-mode: both;
    animation-duration: 1.5s; // animation-timing-function: ease-in-out;
}

.bubble_0 {
    @include bubble;
    height: px2remN(184);
    width: px2remN(182);
    background-position: px2remN(-670) 0;
    animation-name: bounceInLeft;
    animation-delay: 2s;
}

.bubble_1 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-162) 0;
    animation-name: bounceInDown;
    animation-delay: 2.25s;
}


.bubble_2 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-323) 0;
    animation-name: bounceInDown;
    animation-delay: 1.5s;
}

.bubble_3 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: px2remN(-323) 0;
    animation-name: bounceInUp;
    animation-delay: 1.75s;
}

.bubble_4 {
    @include bubble;
    height: px2remN(184);
    width: px2remN(184);
    background-position: px2remN(-486) 0;
    animation-name: bounceInRight;
    animation-delay: 1.25s;
}

.bubble_5 {
    @include bubble;
    height: px2remN(162);
    width: px2remN(162);
    background-position: 0 0;
    animation-name: bounceInUp;
    animation-delay: 2s;
}

.bubble_6 {
    @include bubble;
    height: px2remN(208);
    width: px2remN(208);
    background-position: px2remN(-1060) 0;
    animation-name: bounceInRight;
    animation-delay: 2s;
}

.bubble_7 {
    @include bubble;
    height: px2remN(208);
    width: px2remN(208);
    background-position: px2remN(-854) 0;
    animation-name: bounceInRight;
    animation-delay: 2.25s;
}

input[type='checkbox'] {
    display: none;

    &:checked+label {
        //background-position: 0 -60px;
        z-index: 10; //animation: none;
        svg {
            opacity: 1;
        }
    }
}

label {
    display: table-cell;
    vertical-align: middle;
    position: relative;
    transition: background .5s linear 1.5s;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    width: px2remN(25);

    span {
        display: inline-block;
        width: px2remN(80);
        white-space: pre-wrap;
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
    overflow: visible;
    min-height: 40%;
    li {
        display: inline-block;
        margin: 0 px2remN(10);
        position: relative;
        color: #20b9f1;

        &:first-child {
            top: px2remN(random(50));
            left: px2remN(random(50));
        }

        &:nth-child(2) {
            top: px2remN(random(50));
            left: px2remN(random(50));
        }

        &:nth-child(3) {
            top: px2remN(random(60));
            left: px2remN(random(60));
        }
        &:nth-child(4) {
            top: px2remN(random(50));
            left: px2remN(random(60));
        }

        &:nth-child(5) {
            top: px2remN(random(50));
            left: px2remN(random(50));
        }
        &:nth-child(6) {
            top: px2remN(-random(50));
            left: px2remN(20+random(50));
        }
        &:nth-child(7) {
            top: px2remN(random(50));
            left: px2remN(random(50));
        }

        &:nth-child(8) {
            top: px2remN(-random(50));
            left: px2remN(100 + random(150));
        }
    }
}

.selected {
    animation-name: selected!important;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-timing-function: cubic-bezier(0.215, .61, .355, 1);
    animation-fill-mode: forwards;
    animation-delay: 0s; 
    box-shadow: 5px 5px 5px #20b9f1, -5px 5px 5px #20b9f1, 5px -5px 5px #20b9f1, -5px -5px 5px #20b9f1;
    border-radius: 50%;
    transform: box-shadow 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.5s;
}

@keyframes selected {
    from {
        opacity: 1;
        transform: scale(1);
    }
    30% {
        opacity: 1;
        transform: scale(0.8);
    }
    70% {
        transform: scale(1);
    }
    80% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
        opacity: 1; //transform: scale(0);
    }
}
</style>
<template>
    <ul class="clearfix">
        <li v-for="(answer, index) in questionAndAnswerFunc.answerList" v-bind:key="index" @click.prevent="selectFunc(index)" >
            <input type="checkbox" :id="'bubble_' + index" />
            <label :for="'bubble_' + index" :class="'bubble_' + index">
                <span>{{answer.text}}</span>
            </label>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'func',
    created: function() {
        this.questionAndAnswerFunc.selectList = [];
        this.answerNodeList = document.getElementsByTagName('li');

    },
    props: {
        questionAndAnswerFunc: {
            type: Object,
            required: true
        },
        limit: {

        }
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        selectFunc(index) {
            let liNode = event.currentTarget;
            // let label = event.currentTarget.children[1];
            //点击添加动画效果
            console.log(index);
            //这个已经被选中,删除并去掉样式
            let selectList = this.questionAndAnswerFunc.selectList;
            let curSelect = this.questionAndAnswerFunc.answerList[index];
            //let curIndex = _.indexOf(selectList, curSelect);
            if(selectList.includes(curSelect)) {
                liNode.classList.toggle('selected');
                selectList.splice(selectList.indexOf(curSelect), 1);
                return;
            }
            //已经选择最大数，删除第一个选中
            if(selectList.length >=  this.limit) {
                let answer = selectList.shift();
                let i = answer.index - 1;
                this.answerNodeList[i].classList.remove('selected');
            }
            
            this.questionAndAnswerFunc.selectList.push(curSelect);
            liNode.classList.toggle('selected');
            console.log(selectList);
        }
    }
}
</script>
