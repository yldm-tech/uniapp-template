<template>
  <view class="root">
    <view>注册</view>
    <u-link
      href="https://www2.smile-etc.jp/NASApp/etcmlg/MlgReq?gvlddpef=1028000000&mdwsetmb=1028000000"
      text="积分注册"
    ></u-link>
    <view class="step-1">
      <view>仮登録</view>
      <image src="../../static/images/point_register.png" mode="widthFix"></image>

      <view>仮登録確認</view>
      <image src="../../static/images/point_register_confirm.png" mode="widthFix"></image>
      <view>仮登録完了</view>
      <image src="../../static/images/point_register_result.png" mode="widthFix"></image>
      <view>仮登録通知メール</view>
      <image src="../../static/images/email.png" mode="widthFix"></image>
    </view>
    <view class="step-2">
      <view class="header">绑定Point</view>
      <image src="../../static/images/point_bind.png" mode="widthFix"></image>
    </view>
    <view class="step-3">
      <u-button type="primary" class="header" text="绑定积分" @click="goBindPoint"></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBindPoint() {
      uni.navigateTo({
        url: '/pages/account/bind-point',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.root {
  image {
    width: 100%;
    height: auto;
  }

  .step-1 {
    .login-link {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .step-3 {
    display: flex;
    justify-content: center;

    .header {
      margin: 50rpx 100rpx;
      font-size: 50rpx;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
