<style lang="scss" scoped>
@import "../../assets/css/mix.scss";
@mixin img{
    background:url(../../assets/img/who.png) no-repeat;
    background-size: px2remN(452);
}
@mixin female{
    height: px2remN(182);
    width: px2remN(180);
    background-position: px2remN(-18) px2remN(-411);
}
@mixin male{
    height: px2remN(192);
    width: px2remN(180);
    background-position: px2remN(-15) px2remN(0);
}
@mixin husband{
    height: px2remN(192);           
    width: px2remN(180);
    background-position: px2remN(-17) px2remN(-208);
}
@mixin wife{
    height: px2remN(182);
    width: px2remN(180);
    background-position: px2remN(-21) px2remN(-604);
}
@mixin husband-selected{
    height: px2remN(196);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-205);
}
@mixin male-selected{
    height: px2remN(196);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(0);
}
@mixin wife-selected{
    height: px2remN(188);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-604);
}
@mixin female-selected{
    height: px2remN(188);
    width: px2remN(188);
    background-position: px2remN(-209) px2remN(-409);
}
@mixin child{
    height: px2remN(196);
    width: px2remN(198);
    background-position: px2remN(-7) px2remN(-801);
}
@mixin child-selected{
    height: px2remN(200);
    width: px2remN(198);
    background-position: px2remN(-214) px2remN(-800);
}
@mixin friend{
    height: px2remN(188);
    width: px2remN(200);
    background-position: px2remN(-1) px2remN(-1214);
}
@mixin friend-selected{
    height: px2remN(192);
    width: px2remN(200);
    background-position: px2remN(-227) px2remN(-1217);
}
@mixin parent{
    height: px2remN(192);
    width: px2remN(220);
    background-position: px2remN(-232) px2remN(-1009);
}
@mixin parent-selected{
    height: px2remN(196);
    width: px2remN(220);
    background-position: px2remN(0) px2remN(-1010);
}

.male, .female, .husband, .wife, .parent, .child, .friend,
.male-selected, .female-selected, .husband-selected, .wife-selected, .parent-selected, .child, .friend-selected {
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

    li {
        display: inline-block;

        &:first-child {
            margin: px2remN(69) 0 0 px2remN(142);
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
    animation-name: a;
    animation-duration: 3s;
    animation-duration: ease-in-out;
    //animation-direction: alternate;
    animation-iteration-count: infinite;
}
.ani-husband {
    animation-delay: .15s;
}
.ani-child {
    animation-delay: .35s;
}
.ani-parent {
    animation-delay: .25s;
}
.ani-friend {
    animation-delay: .15s;
}
@keyframes a {
    from {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    to{
        transform: scale(1);
    }
}
</style>

<template>
    <ul>
        <li class="female ani ani-female"></li>
        <li class="husband ani ani-husband"></li>
        <li class="child ani ani-child"></li>
        <li class="parent ani ani-parent"></li>
        <li class="friend ani ani-friend"></li>
    </ul>
</template>


<script>
export default {
    name: 'who',
    data() {
        return {}
    }
}
</script>
