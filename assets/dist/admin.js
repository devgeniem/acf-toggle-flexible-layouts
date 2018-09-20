!function webpackUniversalModuleDefinition(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("acftoggleflexiblefields",[],factory):"object"==typeof exports?exports.acftoggleflexiblefields=factory():root.acftoggleflexiblefields=factory()}("undefined"!=typeof self?self:this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6)}([function(module,exports,__webpack_require__){module.exports=!__webpack_require__(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},function(module,exports){var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},function(module,exports){var core=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=core)},function(module,exports,__webpack_require__){var anObject=__webpack_require__(16),IE8_DOM_DEFINE=__webpack_require__(17),toPrimitive=__webpack_require__(19),dP=Object.defineProperty;exports.f=__webpack_require__(0)?Object.defineProperty:function defineProperty(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _classCallCheck2=__webpack_require__(7),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(8),_createClass3=_interopRequireDefault(_createClass2),$=window.jQuery,AcfToggleFlexibleLayouts=function(){function AcfToggleFlexibleLayouts(){(0,_classCallCheck3.default)(this,AcfToggleFlexibleLayouts),this.$acfWrapper=$("#acf-article"),this.$flexibleContentWrappers=$(".acf-flexible-content"),this.activeFlexible="",this.$flexibleContentWrappers.length&&(this.init(),this.checkAllFlexibleLayouts(this.$flexibleContentWrappers),this.events())}return(0,_createClass3.default)(AcfToggleFlexibleLayouts,[{key:"init",value:function init(){this.wrapperClasses=localization_data.data.wrapper_classes,this.arrowUp=localization_data.data.arrow_up,this.arrowDown=localization_data.data.arrow_down,this.buttonClasses=localization_data.data.toggle_button_classes,this.showText=localization_data.localized_string.show_text+" "+this.arrowUp,this.hideText=localization_data.localized_string.hide_text+" "+this.arrowDown;var toggleButtonWrapper=$("<div></div>").addClass(this.wrapperClasses),toggleButton=$("<button></button>").addClass("button closed js-acf-toggle-flexible-button "+this.buttonClasses).html(this.showText),toggleButtonWithWrapper=toggleButtonWrapper.append(toggleButton);this.$flexibleContentWrappers.prepend(toggleButtonWithWrapper)}},{key:"events",value:function events(){var _this=this;$(".js-acf-toggle-flexible-button").on("click",function(e){return _this.toggleFlexibleLayouts(e)}),acf.add_action("show_field",function($el){return _this.checkClosestFlexibleLayoutsStatuses($el)}),acf.add_action("hide_field",function($el){return _this.checkClosestFlexibleLayoutsStatuses($el)}),acf.add_action("append",function($el){return _this.acfAppendCallback($el)})}},{key:"checkAllFlexibleLayouts",value:function checkAllFlexibleLayouts($flexibleContentWrappers){var _this2=this;$flexibleContentWrappers.each(function(index,flexibleContentWrapper){_this2.checkFlexibleLayoutsStatuses($(flexibleContentWrapper))})}},{key:"acfAppendCallback",value:function acfAppendCallback($el){if($el.hasClass("layout")){var $flexibleContentWrapper=$el.closest(".acf-flexible-content");this.checkFlexibleLayoutsStatuses($flexibleContentWrapper)}}},{key:"checkFlexibleLayoutsStatuses",value:function checkFlexibleLayoutsStatuses($flexibleContentWrapper){if($flexibleContentWrapper){var $layoutWrappers=$flexibleContentWrapper.children(".values").children(".layout"),anyOpen=!1;if($layoutWrappers.length){$layoutWrappers.each(function(index,layoutWrapper){$(layoutWrapper).hasClass("-collapsed")||(anyOpen=!0)});var $toggleButton=$flexibleContentWrapper.find(".js-acf-toggle-flexible-button");!1===anyOpen?($toggleButton.addClass("closed"),$toggleButton.html(this.showText)):($toggleButton.removeClass("closed"),$toggleButton.html(this.hideText))}}return!1}},{key:"checkClosestFlexibleLayoutsStatuses",value:function checkClosestFlexibleLayoutsStatuses($el){var $parentLayout=$el.parent(".acf-fields").parent(".layout");if($parentLayout.length){var $flexibleContentWrapper=$parentLayout.closest(".acf-flexible-content");this.checkFlexibleLayoutsStatuses($flexibleContentWrapper)}}},{key:"toggleFlexibleLayouts",value:function toggleFlexibleLayouts(e){this.stop(e);var $target=$(e.target);$target.hasClass("closed")?($target.removeClass("closed"),$target.html(this.hideText),$target.closest(".acf-flexible-content").children(".values").children(".layout").removeClass("-collapsed")):($target.closest(".acf-flexible-content"),$target.addClass("closed"),$target.html(this.showText),$target.closest(".acf-flexible-content").children(".values").children(".layout").addClass("-collapsed"))}},{key:"stop",value:function stop(e){e.preventDefault?e.preventDefault():e.returnValue=!1}}]),AcfToggleFlexibleLayouts}();$(document).ready(function(){new AcfToggleFlexibleLayouts})},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(9),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(10),__esModule:!0}},function(module,exports,__webpack_require__){__webpack_require__(11);var $Object=__webpack_require__(3).Object;module.exports=function defineProperty(it,key,desc){return $Object.defineProperty(it,key,desc)}},function(module,exports,__webpack_require__){var $export=__webpack_require__(12);$export($export.S+$export.F*!__webpack_require__(0),"Object",{defineProperty:__webpack_require__(4).f})},function(module,exports,__webpack_require__){var global=__webpack_require__(2),core=__webpack_require__(3),ctx=__webpack_require__(13),hide=__webpack_require__(15),has=__webpack_require__(21),PROTOTYPE="prototype",$export=function(type,name,source){var IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE],key,own,out;IS_GLOBAL&&(source=name);for(key in source)(own=!IS_FORCED&&target&&void 0!==target[key])&&has(exports,key)||(out=own?target[key]:source[key],exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export},function(module,exports,__webpack_require__){var aFunction=__webpack_require__(14);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},function(module,exports,__webpack_require__){var dP=__webpack_require__(4),createDesc=__webpack_require__(20);module.exports=__webpack_require__(0)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(1);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},function(module,exports,__webpack_require__){module.exports=!__webpack_require__(0)&&!__webpack_require__(5)(function(){return 7!=Object.defineProperty(__webpack_require__(18)("div"),"a",{get:function(){return 7}}).a})},function(module,exports,__webpack_require__){var isObject=__webpack_require__(1),document=__webpack_require__(2).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(1);module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}}])});