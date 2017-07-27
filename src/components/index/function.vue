<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@import "../../assets/css/animate.css";

@mixin bubble {
    animation-fill-mode: both;
    animation-duration: 1.5s; // animation-timing-function: ease-in-out;
}

.bubble_0 {
    @include bubble;
    height: 104px;
    width: 104px; // height: px2remN(184);
    // width: px2remN(182);
    animation-name: bounceInLeft;
    animation-delay: 2s;
}

.bubble_1 {
    @include bubble;
    height: 92px;
    width: 92px; // height: px2remN(162);
    // width: px2remN(162);
    animation-name: bounceInDown;
    animation-delay: 2.25s;
}


.bubble_2 {
    @include bubble;
    height: 81px;
    width: 81px; // height: px2remN(162);
    // width: px2remN(162);
    animation-name: bounceInDown;
    animation-delay: 1.5s;
}

.bubble_3 {
    @include bubble;
    height: 104px;
    width: 104px; // height: px2remN(162);
    // width: px2remN(162);
    animation-name: bounceInUp;
    animation-delay: 1.75s;
}

.bubble_4 {
    @include bubble;
    height: 92px;
    width: 92px; // height: px2remN(184);
    // width: px2remN(184);
    animation-name: bounceInRight;
    animation-delay: 1.25s;
}

.bubble_5 {
    @include bubble;
    height: 81px;
    width: 81px; // height: px2remN(162);
    // width: px2remN(162);
    animation-name: bounceInUp;
    animation-delay: 2s;
}

.bubble_6 {
    @include bubble;
    height: 104px;
    width: 104px; // height: px2remN(208);
    // width: px2remN(208);
    animation-name: bounceInRight;
    animation-delay: 2s;
}

.bubble_7 {
    @include bubble;
    height: 81px;
    width: 81px; // height: px2remN(208);
    // width: px2remN(208);
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
        position: relative;
    }
    svg {
        display: inline-block;
        fill: #fff;
        user-select: none;
        transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        position: absolute;
        transform: scale(1);
        top: 0;
        left: 0;
    }
}

ul {
    margin: px2remN(10) px2remN(20);
    overflow: hidden;
    height: 400px;
    li {
        display: inline-block;
        margin: 0 px2remN(10);
        position: relative;
        color: #20b9f1;

        &:first-child {
            top: px2remN(30 + random(60));
            left: px2remN(30 + random(30));
        }

        &:nth-child(2) {
            top: px2remN(random(80));
            left: px2remN(random(60));
        }

        &:nth-child(3) {
            top: px2remN(random(30));
            left: px2remN(-20 + random(40));
        }
        &:nth-child(4) {
            top: px2remN(random(50));
            left: px2remN(random(80));
        }

        &:nth-child(5) {
            top: px2remN(random(20));
            left: px2remN(random(60));
        }
        &:nth-child(6) {
            top: px2remN(-random(20));
            left: px2remN(20+random(20));
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
    animation-delay: 0s; //box-shadow: 5px 5px 5px #20b9f1, -5px 5px 5px #20b9f1, 5px -5px 5px #20b9f1, -5px -5px 5px #20b9f1;
    border-radius: 50%;
    transform: box-shadow 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.5s;

    svg {
        circle {
            fill-opacity: 1;
        }
        path:first-child {
            opacity: 0;
            color: red;
            transform: scale(0);
            transform-origin: initial;
            transition: transform 1s ease, opacity 1s ease-in-out;
        }
        path:last-child {
            opacity: 0;
            color: red;
            transform: scale(0);
            transform-origin: initial;
            transition: transform 1s ease, opacity 1s ease-in-out;
        }
    }
}

@keyframes selected {
    from {
        opacity: 1;
        transform: scale(1);
    }
    30% {
        opacity: 1;
        transform: scale(1.2);
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
        <li v-for="(answer, index) in questionAndAnswerFunc.answerList" v-bind:key="index" @click.prevent="selectFunc(index)">
            <input type="checkbox" :id="'bubble_' + index" />
            <label :for="'bubble_' + index" :class="'bubble_' + index">
                <!--0  -->
                <svg v-if="index == 0" width="104px" height="104px" viewBox="0 0 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#EBD5FF" stroke-linecap="round" stroke-linejoin="round" cx="51" cy="51" r="50"></circle>
                    <path d="M3.27203797,65.5990983 C9.42737373,86.1425201 28.4775137,101.113324 51.0242723,101.113324 C78.5514666,101.113324 100.866667,78.7981238 100.866667,51.2709295 C100.866667,41.5279295 98.0711487,32.4378578 93.2384629,24.7590644 C94.5981374,29.2969757 95.3286229,34.1067974 95.3286229,39.0872331 C95.3286229,66.6144274 73.0134228,88.9296275 45.4862285,88.9296275 C27.7020342,88.9296275 12.0932864,79.6154335 3.27203797,65.5990983 Z" id="Combined-Shape" fill="#E2C1FF" opacity="0.5"></path>
                    <path d="M36.6330962,11.5924677 C27.2584141,15.0110862 19.4466104,21.6795623 14.5608313,30.2347497 M11.7195287,36.2893731 C10.7599581,38.8504659 10.0436854,41.5304228 9.59884947,44.3011046" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--1  -->
                <svg v-if="index == 1" width="92px" height="92px" viewBox="0 0 92 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#FFD795" stroke-linecap="round" stroke-linejoin="round" cx="46" cy="46" r="45"></circle>
                    <path d="M2.88709233,57.8815573 C8.31827093,76.008106 25.127218,89.2176387 45.0214168,89.2176387 C69.3101176,89.2176387 89,69.5277563 89,45.2390555 C89,36.6422908 86.5333665,28.6216392 82.2692319,21.8462333 C83.4689448,25.8502727 84.1134908,30.094233 84.1134908,34.4887351 C84.1134908,58.777436 64.4236083,78.4673184 40.1349075,78.4673184 C24.4429713,78.4673184 10.6705469,70.2489119 2.88709233,57.8815573 Z" id="Combined-Shape" fill="#FFD795" opacity="0.5"></path>
                    <path d="M32.3233202,10.228648 C24.0515419,13.2450761 17.1587739,19.1290255 12.8477923,26.6777203 M10.3407606,32.0200351 C9.49408068,34.2798229 8.86207532,36.6444907 8.46957306,39.0892099" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--2  -->
                <svg v-if="index == 2" width="81px" height="81px" viewBox="0 0 81 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#FFBCBD" stroke-linecap="round" stroke-linejoin="round" cx="39.5" cy="39.5" r="39"></circle>
                    <path d="M2.53422549,50.8071447 C7.30159338,66.7182264 22.0561136,78.3132606 39.5187991,78.3132606 C60.838881,78.3132606 78.1222222,61.0299194 78.1222222,39.7098376 C78.1222222,32.1637886 75.9570661,25.1234389 72.2141036,19.1761381 C73.2671849,22.6907949 73.832953,26.416049 73.832953,30.2734453 C73.832953,51.5935271 56.5496118,68.8768683 35.2295299,68.8768683 C21.4554971,68.8768683 9.36636891,61.6629338 2.53422549,50.8071447 Z" id="Combined-Shape" fill="#FFBCBD" opacity="0.5"></path>
                    <path d="M28.3726922,8.97847992 C21.111909,11.6262334 15.0615904,16.7910335 11.2775066,23.4171101 M9.07688986,28.1064752 C8.33369304,30.0900668 7.77893279,32.1657196 7.43440302,34.3116398" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--3  -->
                <svg v-if="index == 3" width="104px" height="104px" viewBox="0 0 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#FFFEA8" stroke-linecap="round" stroke-linejoin="round" cx="51" cy="51" r="50.5"></circle>
                    <path d="M3.27203797,65.5990983 C9.42737373,86.1425201 28.4775137,101.113324 51.0242723,101.113324 C78.5514666,101.113324 100.866667,78.7981238 100.866667,51.2709295 C100.866667,41.5279295 98.0711487,32.4378578 93.2384629,24.7590644 C94.5981374,29.2969757 95.3286229,34.1067974 95.3286229,39.0872331 C95.3286229,66.6144274 73.0134228,88.9296275 45.4862285,88.9296275 C27.7020342,88.9296275 12.0932864,79.6154335 3.27203797,65.5990983 Z" id="Combined-Shape" fill="#FFFEA8" opacity="0.5"></path>
                    <path d="M36.6330962,11.5924677 C27.2584141,15.0110862 19.4466104,21.6795623 14.5608313,30.2347497 M11.7195287,36.2893731 C10.7599581,38.8504659 10.0436854,41.5304228 9.59884947,44.3011046" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--4  -->
                <svg v-if="index == 4" width="92px" height="92px" viewBox="0 0 92 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.400000006" fill="#7CD9FB" stroke-linecap="round" stroke-linejoin="round" cx="45" cy="45" r="44"></circle>
                    <path d="M2.88709233,57.8815573 C8.31827093,76.008106 25.127218,89.2176387 45.0214168,89.2176387 C69.3101176,89.2176387 89,69.5277563 89,45.2390555 C89,36.6422908 86.5333665,28.6216392 82.2692319,21.8462333 C83.4689448,25.8502727 84.1134908,30.094233 84.1134908,34.4887351 C84.1134908,58.777436 64.4236083,78.4673184 40.1349075,78.4673184 C24.4429713,78.4673184 10.6705469,70.2489119 2.88709233,57.8815573 Z" id="Combined-Shape" fill="#7CD9FB" opacity="0.5"></path>
                    <path d="M32.3233202,10.228648 C24.0515419,13.2450761 17.1587739,19.1290255 12.8477923,26.6777203 M10.3407606,32.0200351 C9.49408068,34.2798229 8.86207532,36.6444907 8.46957306,39.0892099" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--5  -->
                <svg v-if="index == 5" width="81px" height="81px" viewBox="0 0 81 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#83FFE6" stroke-linecap="round" stroke-linejoin="round" cx="39.5" cy="39.5" r="39"></circle>
                    <path d="M2.53422549,50.8071447 C7.30159338,66.7182264 22.0561136,78.3132606 39.5187991,78.3132606 C60.838881,78.3132606 78.1222222,61.0299194 78.1222222,39.7098376 C78.1222222,32.1637886 75.9570661,25.1234389 72.2141036,19.1761381 C73.2671849,22.6907949 73.832953,26.416049 73.832953,30.2734453 C73.832953,51.5935271 56.5496118,68.8768683 35.2295299,68.8768683 C21.4554971,68.8768683 9.36636891,61.6629338 2.53422549,50.8071447 Z" id="Combined-Shape" fill="#83FFE6" opacity="0.5"></path>
                    <path d="M28.3726922,8.97847992 C21.111909,11.6262334 15.0615904,16.7910335 11.2775066,23.4171101 M9.07688986,28.1064752 C8.33369304,30.0900668 7.77893279,32.1657196 7.43440302,34.3116398" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--6  -->
                <svg v-if="index == 6" width="104px" height="104px" viewBox="0 0 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#B8E986" stroke-linecap="round" stroke-linejoin="round" cx="51" cy="51" r="50"></circle>
                    <path d="M3.27203797,65.5990983 C9.42737373,86.1425201 28.4775137,101.113324 51.0242723,101.113324 C78.5514666,101.113324 100.866667,78.7981238 100.866667,51.2709295 C100.866667,41.5279295 98.0711487,32.4378578 93.2384629,24.7590644 C94.5981374,29.2969757 95.3286229,34.1067974 95.3286229,39.0872331 C95.3286229,66.6144274 73.0134228,88.9296275 45.4862285,88.9296275 C27.7020342,88.9296275 12.0932864,79.6154335 3.27203797,65.5990983 Z" id="Combined-Shape" fill="#B8E986" opacity="0.5"></path>
                    <path d="M36.6330962,11.5924677 C27.2584141,15.0110862 19.4466104,21.6795623 14.5608313,30.2347497 M11.7195287,36.2893731 C10.7599581,38.8504659 10.0436854,41.5304228 9.59884947,44.3011046" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <!--7  -->
                <svg v-if="index == 7" width="81px" height="81px" viewBox="0 0 81 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval-7" stroke="#045085" stroke-width="2" fill-opacity="0.4" fill="#BADAFF" stroke-linecap="round" stroke-linejoin="round" cx="39.5" cy="39.5" r="39"></circle>
                    <path d="M2.53422549,50.8071447 C7.30159338,66.7182264 22.0561136,78.3132606 39.5187991,78.3132606 C60.838881,78.3132606 78.1222222,61.0299194 78.1222222,39.7098376 C78.1222222,32.1637886 75.9570661,25.1234389 72.2141036,19.1761381 C73.2671849,22.6907949 73.832953,26.416049 73.832953,30.2734453 C73.832953,51.5935271 56.5496118,68.8768683 35.2295299,68.8768683 C21.4554971,68.8768683 9.36636891,61.6629338 2.53422549,50.8071447 Z" id="Combined-Shape" fill="#BADAFF" opacity="0.5"></path>
                    <path d="M28.3726922,8.97847992 C21.111909,11.6262334 15.0615904,16.7910335 11.2775066,23.4171101 M9.07688986,28.1064752 C8.33369304,30.0900668 7.77893279,32.1657196 7.43440302,34.3116398" id="Oval-7" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>{{answer.text}}</span>
            </label>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'func',
    created: function () {
        this.answerNodeList = document.getElementsByTagName('li');
    },
    props: {
        questionAndAnswerFunc: {
            type: Object,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        funcSelectedList: {
            
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
            let curSelect = this.questionAndAnswerFunc.answerList[index];
            //let curIndex = _.indexOf(this.funcSelectedList, curSelect);
            if (this.funcSelectedList.includes(curSelect)) {
                liNode.classList.toggle('selected');
                this.funcSelectedList.splice(this.funcSelectedList.indexOf(curSelect), 1);
                return;
            }
            //已经选择最大数，删除第一个选中
            if (this.funcSelectedList.length >= this.limit) {
                let answer = this.funcSelectedList.shift();
                let i = answer.index - 1;
                this.answerNodeList[i].classList.remove('selected');
            }

            this.funcSelectedList.push(curSelect);
            liNode.classList.toggle('selected');
            console.log(this.funcSelectedList);
        },
    }
}
</script>
