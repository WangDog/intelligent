webpackJsonp([1],{181:function(t,n,s){s(190);var o=s(19)(s(189),s(201),"data-v-0e448eb6",null);t.exports=o.exports},189:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});s(87);n.default={name:"test",data:function(){return{chooseState:"index",bannerList:[],departments:[]}},computed:{},components:{},methods:{toggleLoading:function(t){1==t?this.$loading.show():this.$loading.close()},toggleConfirm:function(){this.$confirm.show({title:"啊哈哈",content:'<div style="color:red">呵呵呵</div>',contentClass:"cc",cancelText:"你猜",cancelClass:"cancelClass",cancelFunc:function(){alert("取消回调")},confirmText:"你再猜",confirmClass:"confirmClass",confirmFunc:function(){alert("确认回调")},singleBtn:!1})},toggleToast:function(){this.$toast("toast信息展示")},toggleClosetConfirm:function(){this.$closetConfirm.show({title:"标题（文字）",titleClass:"标题需要添加的class",subTitle:"子标题（html或文字）",subTitleClass:"子标题需要添加的class",content:"要显示的主体内容（html或文字）",contentClass:"主体内容需要添加的class",confirmFunc:function(){}})}},created:function(){}}},190:function(t,n){},201:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"index"},[t._v("\n    test\n    "),s("div",[s("div",{staticClass:"btn",on:{click:function(n){t.toggleLoading(1)}}},[t._v("点击展示loading")]),t._v(" "),s("div",{staticClass:"btn z-2000",on:{click:function(n){t.toggleLoading(0)}}},[t._v("点击关闭loading")])]),t._v(" "),s("div",[s("div",{staticClass:"btn",on:{click:t.toggleToast}},[t._v("点击展示toast")])]),t._v(" "),s("div",[s("div",{staticClass:"btn",on:{click:t.toggleConfirm}},[t._v("展示弹出框")])]),t._v(" "),s("div",[s("div",{staticClass:"btn",on:{click:t.toggleClosetConfirm}},[t._v("展示点击空白区域消失的弹出框")])])])},staticRenderFns:[]}}});