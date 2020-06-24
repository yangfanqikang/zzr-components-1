(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{328:function(t,e,a){},330:function(t,e,a){"use strict";var n=a(328);a.n(n).a},331:function(t,e,a){"use strict";var n={name:"zzr-show-card",props:{obj:{type:Object,default:function(){return new Object}},title:String,des:String,content:String,isFlex:!1,multiple:!1,realWidth:{type:String,default:"180px"}}},s=(a(330),a(11)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zzr-show-card"},[a("h4",[t._v(t._s(t.title||t.obj.title))]),t._v(" "),a("p",[t._v(t._s(t.des||t.obj.des))]),t._v(" "),a("div",{staticClass:"ex1",class:[{"is-flex":t.isFlex}],style:{width:t.realWidth}},[t._t("default")],2),t._v(" "),a("pre",[a("code",[t._v(t._s(t.content||t.obj.content))])])])}),[],!1,null,"b9ff86b0",null);e.a=r.exports},333:function(t,e,a){},368:function(t,e,a){"use strict";var n=a(333);a.n(n).a},379:function(t,e,a){},382:function(t,e,a){"use strict";a(85);var n=a(58),s={name:"zzr-tag",components:{ZzrIcon:n.a},props:{text:String,closable:Boolean,type:String,hit:Boolean,disableTransitions:Boolean,color:String,size:String,effect:{type:String,default:"light",validator:function(t){return-1!==["dark","light","plain"].indexOf(t)}}},methods:{handleClose:function(t){t.stopPropagation(),this.$emit("close",t)},handleClick:function(t){this.$emit("click",t)}},computed:{tagSize:function(){return this.size||(this.$ELEMENT||{}).size}},render:function(t){var e=this.type,a=this.tagSize,s=this.hit,r=this.effect,i=t("span",{class:["zzr-tag",e?"zzr-tag--".concat(e):"",a?"zzr-tag--".concat(a):"",r?"zzr-tag--".concat(r):"",s&&"is-hit"],style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,this.closable&&t("i",{class:"zzr-tag__close zzr-icon-close",on:{click:this.handleClose}},[t(n.a,{attrs:{name:"close"}})])]);return this.disableTransitions?i:t("transition",{attrs:{name:"zzr-zoom-in-center"}},[i])}},r=(a(368),a(11)),i=Object(r.a)(s,void 0,void 0,!1,null,null,null);e.a=i.exports},450:function(t,e,a){"use strict";var n=a(379);a.n(n).a},470:function(t,e,a){"use strict";a.r(e);a(16),a(27),a(193);var n=a(331),s=a(382),r=a(120),i={name:"tag-demos",components:{ZzrInput:a(122).a,ZzrButton:r.a,ZzrTag:s.a,ZzrShowCard:n.a},data:function(){return{obj1:{title:"基础用法",des:"由type属性来选择tag的类型，也可以通过color属性来自定义背景色。",content:'\n<zzr-tag>标签</zzr-tag>\n<zzr-tag type="success">标签</zzr-tag>\n<zzr-tag type="info">标签</zzr-tag>\n<zzr-tag type="warning">标签</zzr-tag>\n<zzr-tag type="danger">标签</zzr-tag>'.replace(/^ {8}/gm,"").trim()},obj2:{title:"可移除标签",des:"设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。",content:'\n<zzr-tag closable>标签</zzr-tag>\n<zzr-tag closable type="success">标签</zzr-tag>\n<zzr-tag closable type="info">标签</zzr-tag>\n<zzr-tag closable type="warning">标签</zzr-tag>\n<zzr-tag closable type="danger">标签</zzr-tag>'.replace(/^ {8}/gm,"").trim()},obj3:{title:"不同尺寸",des:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。",content:'\n<zzr-tag closable>默认标签</zzr-tag>\n<zzr-tag size="medium" closable>中等标签</zzr-tag>\n<zzr-tag size="small" closable>小型标签</zzr-tag>\n<zzr-tag size="mini" closable>超小标签</zzr-tag>'.replace(/^ {8}/gm,"").trim()},obj4:{title:"不同主题",des:"Tag 组件提供了三个不同的主题：dark、light 和 plain",content:'\n<zzr-tag closable>默认标签</zzr-tag>\n<zzr-tag size="medium" closable>中等标签</zzr-tag>\n<zzr-tag size="small" closable>小型标签</zzr-tag>\n<zzr-tag size="mini" closable>超小标签</zzr-tag>'.replace(/^ {8}/gm,"").trim()},obj5:{title:"动态编辑标签",des:"动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现",content:'\n<zzr-tag closable>默认标签</zzr-tag>\n<zzr-tag size="medium" closable>中等标签</zzr-tag>\n<zzr-tag size="small" closable>小型标签</zzr-tag>\n<zzr-tag size="mini" closable>超小标签</zzr-tag>'.replace(/^ {8}/gm,"").trim()},inputVisible:!1,dynamicTags:["标签一","标签二","标签三"],inputValue:""}},methods:{showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){console.log("***************");var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""}}},z=(a(450),a(11)),l=Object(z.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("zzr-show-card",{attrs:{title:t.obj1.title,des:t.obj1.des,content:t.obj1.content}},[a("div",{staticClass:"zzr-tag-ex1"},[a("zzr-tag",[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{type:"success"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{type:"info"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{type:"warning"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{type:"danger"}},[t._v("标签")])],1)]),t._v(" "),a("zzr-show-card",{attrs:{title:t.obj2.title,des:t.obj2.des,content:t.obj2.content}},[a("div",{staticClass:"zzr-tag-ex1"},[a("zzr-tag",{attrs:{closable:""}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{closable:"",type:"success"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{closable:"",type:"info"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{closable:"",type:"warning"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{closable:"",type:"danger"}},[t._v("标签")])],1)]),t._v(" "),a("zzr-show-card",{attrs:{title:t.obj3.title,des:t.obj3.des,content:t.obj3.content}},[a("div",{staticClass:"zzr-tag-ex1"},[a("zzr-tag",{attrs:{closable:""}},[t._v("默认标签")]),t._v(" "),a("zzr-tag",{attrs:{size:"medium",closable:""}},[t._v("中等标签")]),t._v(" "),a("zzr-tag",{attrs:{size:"small",closable:""}},[t._v("小型标签")]),t._v(" "),a("zzr-tag",{attrs:{size:"mini",closable:""}},[t._v("超小标签")])],1)]),t._v(" "),a("zzr-show-card",{attrs:{title:t.obj4.title,des:t.obj4.des,content:t.obj4.content}},[a("div",{staticClass:"zzr-tag-ex1"},[a("zzr-tag",{attrs:{effect:"dark"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"dark",type:"success"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"dark",type:"info"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"dark",type:"warning"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"dark",type:"danger"}},[t._v("标签")])],1),t._v(" "),a("div",{staticClass:"zzr-tag-ex1"},[a("zzr-tag",{attrs:{effect:"plain"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"plain",type:"success"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"plain",type:"info"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"plain",type:"warning"}},[t._v("标签")]),t._v(" "),a("zzr-tag",{attrs:{effect:"plain",type:"danger"}},[t._v("标签")])],1)]),t._v(" "),a("zzr-show-card",{attrs:{title:t.obj5.title,des:t.obj5.des,content:t.obj5.content}},[a("div",{staticClass:"zzr-tag-ex1"},[t._l(t.dynamicTags,(function(e){return a("zzr-tag",{attrs:{closable:""}},[t._v(t._s(e))])})),t._v(" "),t.inputVisible?a("zzr-input",{ref:"saveTagInput",on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):a("zzr-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+Tag")])],2)])],1)}),[],!1,null,"56109809",null);e.default=l.exports}}]);