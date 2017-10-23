Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _reactNativeBlur=require('react-native-blur');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _button=require('../button');var _button2=_interopRequireDefault(_button);
var _style=require('../../style');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





Toast=function(_BaseComponent){_inherits(Toast,_BaseComponent);function Toast(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Toast);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Toast.__proto__||Object.getPrototypeOf(Toast)).call.apply(_ref,[this].concat(args))),_this),_this.



































































state={
isVisible:false,
animationConfig:_this.getAnimationConfig(true)},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Toast,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(


nextProps){var
visible=nextProps.visible;var
isVisible=this.state.isVisible;
if(visible!==isVisible){
this.setState({
animationConfig:this.getAnimationConfig(visible)});

}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getPositionStyle',value:function getPositionStyle()

{var
position=this.props.position;
if(position==='top'){
return{top:0};
}
return{bottom:0};
}},{key:'calcHeight',value:function calcHeight()

{var _props=
this.props,height=_props.height,actions=_props.actions;
var hasTwoActions=_lodash2.default.size(actions)===2;
if(height){
return height;
}
return hasTwoActions?92:48;
}},{key:'getAnimationConfig',value:function getAnimationConfig(

shouldShow){var _this2=this;var _props2=
this.props,animated=_props2.animated,position=_props2.position;
var isPositionedTop=position==='top';
var enterAnimation=isPositionedTop?'slideInDown':'slideInUp';
var exitAnimation=isPositionedTop?'slideOutUp':'slideOutDown';
if(animated){
return{
animation:shouldShow?enterAnimation:exitAnimation,
duration:300,
onAnimationEnd:function onAnimationEnd(){return _this2.onAnimationEnd();}};

}
}},{key:'getBlurOptions',value:function getBlurOptions()

{var _getThemeProps=
this.getThemeProps(),blurOptions=_getThemeProps.blurOptions;
return _extends({
blurType:'light',
amount:5},
blurOptions);

}},{key:'renderMessage',value:function renderMessage()

{var _props3=
this.props,message=_props3.message,messageStyle=_props3.messageStyle,centerMessage=_props3.centerMessage,color=_props3.color;
return(
_react2.default.createElement(_view2.default,{flex:true,centerH:centerMessage},
_react2.default.createElement(_text2.default,{style:[this.styles.message,color&&{color:color},messageStyle]},message)));


}},{key:'renderOneAction',value:function renderOneAction()

{
var action=_lodash2.default.first(this.props.actions);
if(action){
return _react2.default.createElement(_button2.default,_extends({style:this.styles.oneActionStyle,size:'medium'},action));
}
}},{key:'renderTwoActions',value:function renderTwoActions()

{var
actions=this.props.actions;
return(
_react2.default.createElement(_view2.default,{row:true,center:true,'paddingB-14':true},
_react2.default.createElement(_button2.default,_extends({size:'small'},actions[0])),
_react2.default.createElement(_button2.default,_extends({'marginL-12':true,size:'small'},actions[1]))));


}},{key:'renderDismissButton',value:function renderDismissButton()

{var _props4=
this.props,allowDismiss=_props4.allowDismiss,onDismiss=_props4.onDismiss,color=_props4.color;
if(allowDismiss){
return(
_react2.default.createElement(_button2.default,{
link:true,
iconStyle:[this.styles.dismissIconStyle,color&&{tintColor:color}],
iconSource:_assets2.default.icons.x,
onPress:onDismiss}));


}
}},{key:'render',value:function render()

{var _getThemeProps2=
this.getThemeProps(),backgroundColor=_getThemeProps2.backgroundColor,actions=_getThemeProps2.actions,allowDismiss=_getThemeProps2.allowDismiss,enableBlur=_getThemeProps2.enableBlur;var
animationConfig=this.state.animationConfig;
var hasOneAction=_lodash2.default.size(actions)===1;
var hasTwoActions=_lodash2.default.size(actions)===2;
var positionStyle=this.getPositionStyle();
var height=this.calcHeight();
var blurOptions=this.getBlurOptions();

var shouldShowToast=this.shouldShowToast();
if(!shouldShowToast){
return null;
}

return(
_react2.default.createElement(Animatable.View,_extends({
style:[
this.styles.container,
hasOneAction&&this.styles.containerWithOneAction,
positionStyle,
backgroundColor&&{backgroundColor:backgroundColor},
{height:height}]},

animationConfig),

enableBlur&&_react2.default.createElement(_reactNativeBlur.BlurView,_extends({style:this.styles.blurView},blurOptions)),
_react2.default.createElement(_view2.default,{row:true,flex:true,centerV:true,spread:true},
this.renderMessage(),
(hasOneAction||allowDismiss)&&
_react2.default.createElement(_view2.default,{row:true,height:'100%'},
hasOneAction&&this.renderOneAction(),
this.renderDismissButton())),



hasTwoActions&&_react2.default.createElement(_view2.default,null,this.renderTwoActions())));


}},{key:'shouldShowToast',value:function shouldShowToast()

{var
visible=this.props.visible;var
isVisible=this.state.isVisible;
return isVisible||visible&&!isVisible;
}},{key:'onAnimationEnd',value:function onAnimationEnd()

{var
visible=this.props.visible;
this.setState({
isVisible:visible});

}}]);return Toast;}(_commons.BaseComponent);Toast.displayName='Toast';Toast.propTypes={visible:_propTypes2.default.bool,position:_propTypes2.default.oneOf(['top','bottom']),height:_propTypes2.default.number,backgroundColor:_propTypes2.default.string,color:_propTypes2.default.string,message:_propTypes2.default.string,messageStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),actions:_propTypes2.default.arrayOf(_propTypes2.default.shape(_button2.default.propTypes)),onDismiss:_propTypes2.default.func,allowDismiss:_propTypes2.default.bool,centerMessage:_propTypes2.default.bool,animated:_propTypes2.default.bool,enableBlur:_propTypes2.default.bool,blurOptions:_propTypes2.default.object};Toast.defaultProps={position:'top',color:_style.Colors.white,animated:true};exports.default=Toast;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
position:'absolute',
left:0,
right:0,
backgroundColor:_style.Colors.rgba(_style.ThemeManager.primaryColor,0.8),
paddingHorizontal:15},

containerWithOneAction:{
paddingRight:0},

message:_extends({
color:_style.Colors.white},
_style.Typography.text80),

oneActionStyle:{
borderRadius:_style.BorderRadiuses.br0,
minWidth:undefined,
height:'100%',
backgroundColor:_style.Colors.rgba(_style.ThemeManager.primaryColor,0.7)},

dismissIconStyle:{
width:12,
height:12,
tintColor:_style.Colors.white},

blurView:_extends({},
_reactNative.StyleSheet.absoluteFillObject)});


}