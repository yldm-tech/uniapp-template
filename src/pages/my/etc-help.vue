<template>
  <view class="root">
    <view class="step-1">
      <view class="header">注册账号</view>
      <view class="login-link"
        ><u-link
          href="https://www2.etc-meisai.jp/etc/R?funccode=1011000000&nextfunc=1011000000"
          text="注册ETC明细账号"
          color="#19be6b"
          line-color="#19be6b"
        ></u-link
      ></view>
      <view>仮登録</view>
      <image src="../../static/images/register.png" mode="widthFix"></image>

      <view>仮登録確認</view>
      <image src="../../static/images/register_confirm.png" mode="widthFix"></image>
      <view>仮登録完了</view>
      <image src="../../static/images/register_result.png" mode="widthFix"></image>
      <view>仮登録通知メール</view>
      <image src="../../static/images/email.png" mode="widthFix"></image>
    </view>
    <view class="step-2">
      <view class="header">绑定ETC</view>
      <image src="../../static/images/bind.png" mode="widthFix"></image>
      <view>ログイン</view>
      <image src="../../static/images/login.png" mode="widthFix"></image>
    </view>
    <view class="step-3">
      <u-button type="primary" class="header" text="绑定ETC" @click="goBindEtc"></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBindEtc() {
      uni.navigateTo({
        url: '/pages/account/bind-etc',
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
