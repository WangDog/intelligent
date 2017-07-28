<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@import "../../assets/css/animate.css";
@mixin img {
    background: url(../../assets/img/who.png) no-repeat;
    background-size: px2remN(452);
}

@mixin female {
    height: px2remN(188);
    width: px2remN(188);
    background-position: px2remN(-18) px2remN(-411);
}

@mixin male {
    height: px2remN(192);
    width: px2remN(180);
    background-position: px2remN(-15) px2remN(0);
}

@mixin husband {
    height: px2remN(196);
    width: px2remN(188);
    background-position: px2remN(-17) px2remN(-208);
}

@mixin wife {
    height: px2remN(182);
    width: px2remN(180);
    background-position: px2remN(-21) px2remN(-604);
}

@mixin husband-selected {
    height: px2remN(196);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-205);
}

@mixin male-selected {
    height: px2remN(196);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(0);
}

@mixin wife-selected {
    height: px2remN(188);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-604);
}

@mixin female-selected {
    height: px2remN(188);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-409);
}

@mixin child {
    height: px2remN(200);
    width: px2remN(198);
    background-position: px2remN(-7) px2remN(-801);
}

@mixin child-selected {
    height: px2remN(200);
    width: px2remN(198);
    background-position: px2remN(-214) px2remN(-800);
}

@mixin friend {
    height: px2remN(192);
    width: px2remN(200);
    background-position: px2remN(-1) px2remN(-1214);
}

@mixin friend-selected {
    height: px2remN(192);
    width: px2remN(200);
    background-position: px2remN(-227) px2remN(-1217);
}

@mixin parent {
    height: px2remN(196);
    width: px2remN(220);
    background-position: px2remN(-232) px2remN(-1009);
}

@mixin parent-selected {
    height: px2remN(196);
    width: px2remN(220);
    background-position: px2remN(0) px2remN(-1010);
}

.male,
.female,
.husband,
.wife,
.parent,
.child,
.friend,
.male-selected,
.female-selected,
.husband-selected,
.wife-selected,
.parent-selected,
.child,
.friend-selected {
    @include img;
}

.male {
    @include male;
}

.male-selected {
    @include male-selected;
}

.female {
    @include female;
}

.female-selected {
    @include female-selected;
}

.husband {
    @include husband;
}

.husband-selected {
    @include husband-selected;
}

.wife {
    @include wife;
}

.wife-selected {
    @include wife-selected;
}

.parent {
    @include parent;
}

.parent-selected {
    @include parent-selected;
}

.child {
    @include child;
}

.child-selected {
    @include child-selected;
}

.friend {
    @include friend;
}

.friend-selected {
    @include friend-selected;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    border-radius: 50%;

    li {
        display: inline-block;
        transition: background .5s ease-in-out;
        margin-bottom: 10px!important;

        &:first-child {
            margin: px2remN(69) 0 0 px2remN(130);
        }
        &:nth-child(2) {
            margin: px2remN(59) px2remN(140) 0 px2remN(95);
        }
        &:nth-child(3) {
            margin: px2remN(20) px2remN(275) 0 px2remN(279);
        }
        &:nth-child(4) {
            margin: px2remN(-110) 0 0 px2remN(18);
        }
        &:last-child {
            float: right;
            margin: px2remN(-110) px2remN(33) 0 0;
        }
    }
}

.ani {
    animation-name: bling;
    animation-duration: 3s;
    animation-duration: linear;
    animation-direction: alternate;
    animation-timing-function: forwards;
    animation-iteration-count: infinite;
}

.ani-husband {
    animation-delay: .5s;
}

.ani-child {
    animation-delay: 1s;
}

.ani-parent {
    animation-delay: 1.5s;
}

.ani-friend {
    animation-delay: 2s;
}

@keyframes bling {
    from {
        transform: scale(1);
        opacity: .75;
    }
    50% {
        opacity: .9;
    }
    to {
        transform: scale(1.05);
        opacity: 1;
    }
}

.flipInX {
    backface-visibility: visible!important;
    animation-name: flipInX;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-delay: 2s;
    animation-timing-function: linear;
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
    }
    100% {
        transform: perspective(400px)
    }
}

.bounceInRight {
    animation-name: bounceInRight;
    animation-duration: .8s;
    animation-fill-mode: both;
    animation-delay: 2s;
}

@keyframes bounceInRight {
    100%,
    60%,
    75%,
    90%,
    from {
        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    from {
        opacity: 0;
        transform: translate3d(3000px, 0, 0)
    }
    60% {
        opacity: 1;
        transform: translate3d(-25px, 0, 0)
    }
    75% {
        transform: translate3d(10px, 0, 0)
    }
    90% {
        transform: translate3d(-5px, 0, 0)
    }
    100% {
        transform: none
    }
}
</style>

<template>
    <ul class="flipInX">
        <li id="role_0" class="female ani ani-female" @click="selectRole(0)"></li>
        <li id="role_2" :class="[sex, 'ani', 'ani-' + sex]" @click="selectRole(2)"></li>
        <li id="role_4" class="child ani ani-child" @click="selectRole(4)"></li>
        <li id="role_1" class="parent ani ani-parent" @click="selectRole(1)"></li>
        <li id="role_5" class="friend ani ani-friend" @click="selectRole(3)"></li>
    </ul>
</template>


<script>
let roleNodeList = document.getElementsByTagName('li');

const SELF = 0;
const PARENT = 1;
const SPOUSE = 2;
const FRIEND = 3;
const CHILD = 4;

const roleMap = {
    0: 'female',
    1: 'parent',
    2: 'husband',
    3: 'friend',
    4: 'child'
}

export default {
    name: 'who',
    mounted: function () {
    },
    props: {
        questionAndAnswerRole: {
            required: true,
            typr: Object,
            twoWay: true,
        },
        limit: {
            type: Number,
            required: true
        },
        roleSelectedList: {

        }
    },
    data() {
        return {
            sex: 'husband',
        }
    },
    mounted() {
        if (this.roleSelectedList.length > 0) {
            let selectIndex = this.roleSelectedList[0].index - 1;
            document.getElementById('role_' + selectIndex).classList.add(roleMap[selectIndex] + '-selected');
        }
    },
    methods: {
        selectRole(index) {
            let role = roleMap[index];
            let classList = event.target.classList;
            let answer = this.questionAndAnswerRole.answerList[index];
            setTimeout(() => {
                classList.toggle(role + '-selected');
                classList.toggle('ani');
            }, 100);

            //去除选择
            if (this.roleSelectedList.includes(answer)) {
                this.roleSelectedList.splice(this.roleSelectedList.indexOf(answer), 1);
                //未被选择并且没有超过最大限制
            } else if (this.roleSelectedList < this.limit) {
                this.roleSelectedList.push(answer);
                //未被选择且已选最大数量
            } else {
                let delAnswerIndex = this.roleSelectedList[0].index - 1;
                let delTagName = roleMap[delAnswerIndex] + '-selected';
                document.getElementsByClassName(delTagName)[0].classList.remove(delTagName);
                this.roleSelectedList.shift();
                this.roleSelectedList.push(answer);
            }
        },
    }
}
</script>
