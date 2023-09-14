<!--本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：18 26 71  4 8 2  0  6，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
  <view
    class="fui-form__item-wrap"
    :class="{ 'fui-form__highlight': highlight }"
    :style="{
      paddingTop: padding[0] || 0,
      paddingRight: padding[1] || 0,
      paddingBottom: padding[2] || padding[0] || 0,
      paddingLeft: padding[3] || padding[1] || 0,
      background: background,
      marginTop: marginTop + 'rpx',
      marginBottom: marginBottom + 'rpx',
      borderRadius: radius,
    }"
    @tap="handleClick"
  >
    <!-- #ifdef APP-NVUE -->
    <view class="fui-form__asterisk" :style="{ left: getAkPosi }" v-if="asterisk">
      <text
        :style="{ color: asteriskColor || akColor || dangerColor }"
        class="fui-form__asterisk-text"
        >*</text
      >
    </view>
    <!-- #endif -->
    <!-- #ifndef APP-NVUE -->
    <view
      class="fui-form__asterisk"
      v-if="asterisk"
      :style="{ color: asteriskColor || akColor || dangerColor, left: getAkPosi }"
      >*</view
    >
    <!-- #endif -->
    <text
      class="fui-form__item-sizing"
      :style="{
        width: getLabelWidth,
        fontSize: getLabelSize,
        color: labelColor || lColor || '#333',
        paddingRight: getLabelRight,
        textAlign: getLabelAlign,
        fontWeight: getLabelWeight,
      }"
      v-if="label"
      >{{ label }}</text
    >
    <view class="fui-form__item-content">
      <slot></slot>
    </view>
    <slot name="right"></slot>
    <view
      v-if="bottomBorder"
      :style="{ background: borderColor, left: left + 'rpx', right: right + 'rpx' }"
      class="fui-form__item-bottom"
    ></view>
    <view class="fui-form__item-arrow" v-if="arrow" :style="{ 'border-color': arrowColor }"> </view>
  </view>
</template>

<script>
export default {
  name: 'fui-form-item',
  emits: ['click'],
  inject: ['form'],
  props: {
    //padding值，上、右、下、左
    padding: {
      type: Array,
      default() {
        return ['28rpx', '32rpx']
      },
    },
    //margin-top 单位rpx
    marginTop: {
      type: [Number, String],
      default: 0,
    },
    //margin-bottom 单位rpx
    marginBottom: {
      type: [Number, String],
      default: 0,
    },
    //标签文本
    label: {
      type: String,
      default: '',
    },
    //标题字体大小 默认使用全局设置值
    labelSize: {
      type: [Number, String],
      default: 0,
    },
    labelColor: {
      type: String,
      default: '',
    },
    //label宽度 rpx 默认使用全局设置值
    labelWidth: {
      type: [Number, String],
      default: 0,
    },
    //默认使用全局设置值
    labelRight: {
      type: [Number, String],
      default: 0,
    },
    //label 对齐方式：left，right
    labelAlign: {
      type: String,
      default: '',
    },
    labelWeight: {
      type: [Number, String],
      default: 0,
    },
    //是否显示必填的红色星号
    asterisk: {
      type: Boolean,
      default: false,
    },
    asteriskColor: {
      type: String,
      default: '',
    },
    //left,right
    asteriskPosition: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '#fff',
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    arrowColor: {
      type: String,
      default: '#B2B2B2',
    },
    bottomBorder: {
      type: Boolean,
      default: true,
    },
    borderColor: {
      type: String,
      default: '#EEEEEE',
    },
    //下边框left值，单位rpx
    left: {
      type: [Number, String],
      default: 32,
    },
    //下边框right值，单位rpx
    right: {
      type: [Number, String],
      default: 0,
    },
    radius: {
      type: String,
      default: '0',
    },
    param: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    //优先级：form-item组件props > form组件props > 全局属性值
    getLabelSize() {
      const labelSize = (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.labelSize) || 32
      return `${this.labelSize || this.lSize || labelSize}rpx`
    },
    getLabelWidth() {
      const labelWidth =
        (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.labelWidth) || 160
      return `${this.labelWidth || this.lWidth || labelWidth}rpx`
    },
    getLabelRight() {
      const labelRight = (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.labelRight) || 30
      return `${this.labelRight || labelRight}rpx`
    },
    getLabelAlign() {
      const labelAlign =
        (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.labelAlign) || 'left'
      return this.labelAlign || this.lAlign || labelAlign
    },
    getLabelWeight() {
      const global = (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.labelWeight) || 400
      return this.labelWeight || this.lWeight || global
    },
    getAkPosi() {
      const akPosi =
        (uni.$fui && uni.$fui.fuiFormItem && uni.$fui.fuiFormItem.asteriskPosition) || 'left'
      const position = this.asteriskPosition || this.akPosi || akPosi
      const lWidth = this.getLabelWidth.replace('rpx', '')
      const lRight = this.getLabelRight.replace('rpx', '')
      const pr = this.padding[1]
      const pdr = pr ? pr.replace('rpx', '').replace('px', '') : 0
      return position === 'right'
        ? `${Number(lWidth) + Number(pdr || 0) - Number(lRight || 0)}rpx`
        : '12rpx'
    },
    dangerColor() {
      const app = uni && uni.$fui && uni.$fui.color
      return (app && app.danger) || '#FF2B2B'
    },
  },
  data() {
    return {
      lSize: 0,
      lColor: '',
      lWidth: 0,
      lAlign: '',
      lWeight: 0,
      akColor: '',
      akPosi: '',
    }
  },
  created() {
    this.initParam()
  },
  methods: {
    initParam() {
      //后续做功能扩展，如错误消息提示
      if (this.form) {
        this.lSize = this.form.labelSize
        this.lColor = this.form.labelColor
        this.lWidth = this.form.labelWidth
        this.lWeight = this.form.labelWeight
        this.lAlign = this.form.labelAlign
        this.akColor = this.form.asteriskColor
        this.akPosi = this.form.asteriskPosition
      }
    },
    handleClick() {
      this.$emit('click', {
        param: this.param,
      })
    },
  },
}
</script>

<style scoped>
.fui-form__item-wrap {
  /* #ifndef APP-NVUE */
  width: 100%;
  box-sizing: border-box;
  display: flex;
  /* #endif */
  flex-direction: row;
  flex: 1;
  align-items: center;
  position: relative;
}

.fui-form__highlight:active {
  /* #ifdef APP-NVUE */
  background-color: rgba(0, 0, 0, 0.2) !important;
  /* #endif */

  /* #ifndef APP-NVUE */
  background-color: var(--fui-bg-color-hover, rgba(0, 0, 0, 0.2)) !important;
  /* #endif */
}

.fui-form__asterisk {
  position: absolute;
  left: 12rpx;
  /* #ifndef APP-NVUE */
  height: 30rpx;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1.15;
  /* #endif */
  /* #ifdef APP-NVUE */
  top: 28rpx;
  bottom: 28rpx;
  align-items: center;
  justify-content: center;
  /* #endif */
}

/* #ifdef APP-NVUE */
.fui-form__asterisk-text {
  font-size: 32rpx;
  height: 32rpx;
}
/* #endif */

.fui-form__item-label {
  padding-right: 12rpx;
  /* #ifndef APP-NVUE */
  display: inline-block;
  flex-shrink: 0;
  /* #endif */
}

/* #ifndef APP-NVUE */
.fui-form__item-sizing {
  box-sizing: border-box;
}

/* #endif */

.fui-form__item-content {
  flex: 1;
}

.fui-form__item-bottom {
  position: absolute;
  bottom: 0;
  /* #ifdef APP-NVUE */
  height: 0.5px;
  z-index: -1;
  /* #endif */
  /* #ifndef APP-NVUE */
  height: 1px;
  -webkit-transform: scaleY(0.5) translateZ(0);
  transform: scaleY(0.5) translateZ(0);
  transform-origin: 0 100%;
  z-index: 1;
  /* #endif */
}

.fui-form__item-arrow {
  height: 40rpx;
  width: 40rpx;
  border-width: 3px 3px 0 0;
  border-style: solid;
  transform: rotate(45deg) scale(0.5);
  /* #ifndef APP-NVUE */
  border-radius: 4rpx;
  flex-shrink: 0;
  margin-left: auto;
  box-sizing: border-box;
  /* #endif */
  /* #ifdef APP-NVUE */
  border-top-right-radius: 3rpx;
  /* #endif */
  transform-origin: center center;
  margin-right: -5.8579rpx;
}
</style>
