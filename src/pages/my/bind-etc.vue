<template>
  <view class="root">
    <u--form labelPosition="left" :model="userModel" ref="uForm">
      <u-form-item class="username" label="" prop="userModel.username" borderBottom ref="item1">
        <u--input v-model="userModel.username" placeholder="请输入用户名" border="none"></u--input>
      </u-form-item>
      <u-form-item class="password" label="" prop="userModel.password" borderBottom ref="item1">
        <u--input
          password
          v-model="userModel.password"
          placeholder="请输入密码"
          border="none"
        ></u--input>
      </u-form-item>

      <u-button
        :disabled="!userModel.username || !userModel.password"
        class="btn-submit"
        @click="submit"
        >提交</u-button
      >
    </u--form>
    <view class="etc-help" @click="goEtcHelp">有疑问？查看帮助</view>
  </view>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userModel: {
        username: '',
        password: '',
      },
    }
  },
  onLoad() {
    if (!this.hasLogin) {
      uni.navigateTo({
        url: '/pages/account/login',
      })
    }
    this.userModel.username = this.userInfo.etcUsername
    this.userModel.password = this.userInfo.etcPassword
  },
  computed: {
    hasLogin() {
      return !!this.userInfo.id
    },
    userInfo() {
      return this.$store.state.user
    },
    token() {
      return this.userInfo.token
    },
  },
  methods: {
    ...mapActions(['getUserInfo', 'bindEtc']),
    async submit() {
      const res = await this.bindEtc({
        baseUrl: this.$env.BASE_URL,
        token: this.userInfo.token,
        model: this.userModel,
      })

      if (res.statusCode === 200 || res.statusCode === 201) {
        // 重新登陆获取最新数据
        const res = await this.getUserInfo({
          baseUrl: this.$env.BASE_URL,
          token: this.token,
        })
        console.log(res)

        uni.reLaunch({
          url: '/pages/account/account',
        })
      } else {
        uni.showToast({
          title: res.msg,
        })
      }
    },
    goEtcHelp() {
      uni.navigateTo({
        url: '/pages/account/etc-help',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.root {
  margin: 100rpx;

  .btn-submit {
    margin-top: 200rpx;
    color: #fff;
    background-color: #7c37ef;
  }

  .etc-help {
    margin-top: 20rpx;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
