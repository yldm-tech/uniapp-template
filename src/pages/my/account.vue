<template>
  <view class="user">
    <view class="top">
      <view class="group">
        <view class="userinfo" @click="goLogin">
          <view class="pic">
            <image
              :src="user.picture || '../../static/images/user-default.jpg'"
              mode="aspectFill"
            ></image>
          </view>
          <view class="text" v-if="user.id">
            <view class="nickname">{{ user.name || '匿名ユーザー' }}</view>
            <view class="year">
              <uni-dateformat
                :date="user.createdAt"
                :threshold="[3600, 99 * 365 * 24 * 60 * 60 * 1000]"
              ></uni-dateformat>
              登録
            </view>

            <view class="bind-status">
              <view class="etc">
                <view class="title"> ＥＴＣ: </view>
                <view class="status" :class="etcBind ? 'active' : 'inactive'">
                  {{ etcBindShow }}
                </view>
              </view>
              <view class="point">
                <view class="title">ポイント:</view>
                <view class="status" :class="pointBind ? 'active' : 'inactive'">
                  {{ pointBindShow }}
                </view>
              </view>
            </view>
          </view>
          <view class="text" v-else>
            <view class="nickname">ログイン</view>
          </view>
        </view>
      </view>

      <view class="bg">
        <image :src="'../../static/images/user-default.jpg'" mode="aspectFill"></image>
      </view>
    </view>

    <view class="main">
      <view class="info">
        <view class="item">設定</view>
      </view>

      <view class="list">
        <view class="group">
          <view class="item" @click="goBindETC">
            <view class="left"
              ><text class="iconfont icon-a-109-linggan"></text
              ><text class="text">{{
                this.etcBind ? 'ＥＴＣ明細連携更新' : 'ＥＴＣ明細連携'
              }}</text></view
            >
            <view class="right"><text class="iconfont icon-a-10-you"></text></view>
          </view>
          <view class="item" @click="goBindPoint">
            <view class="left"
              ><text class="iconfont icon-a-125-lianjie"></text
              ><text class="text">{{
                this.pointBind ? 'ポイント連携更新' : 'ポイント連携'
              }}</text></view
            >
            <view class="right"><text class="iconfont icon-a-10-you"></text></view>
          </view>
          <!--                    <view class="item">
                        <view class="left"><text class="iconfont icon-a-24-bianji"></text><text
                                class="text">サブスクリプション</text>
                        </view>
                        <view class="right"><text class="iconfont icon-a-10-you"></text></view>
                    </view> -->
          <view class="item" @click="goFeedback">
            <view class="left"
              ><text class="iconfont icon-a-21-xiugai"></text
              ><text class="text">フィードバック</text>
            </view>
            <view class="right"><text class="iconfont icon-a-10-you"></text></view>
          </view>
          <view class="item" @click="logout">
            <view class="left"
              ><text class="iconfont icon-a-73-tuichu"></text><text class="text">ログアウト</text>
            </view>
            <view class="right"><text class="iconfont icon-a-10-you"></text></view>
          </view>
        </view>

        <!--                <view class="group">
                    <view class="item" @click="goTwitter">
                        <view class="left"><text class="iconfont icon-a-32-wenjian"></text><text
                                class="text">开发者Twitter</text>
                        </view>
                        <view class="right"><text class="iconfont icon-a-10-you"></text></view>
                    </view>
                    <view class="item">
                        <view class="left"><text class="iconfont icon-a-5-xinxi"></text><text class="text">关于我们</text>
                        </view>
                        <view class="right"><text class="iconfont icon-a-10-you"></text></view>
                    </view>
                </view> -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    etcBind() {
      const etcUsername = this.$store.state.user.etcUsername
      return !!etcUsername
    },
    pointBind() {
      const pointUsername = this.$store.state.user.pointUsername
      return !!pointUsername
    },
    etcBindShow() {
      return this.etcBind ? '連携済み' : '未連携'
    },
    pointBindShow() {
      return this.pointBind ? '連携済み' : '未連携'
    },
    count() {
      return this.$store.state.count
    },
    user() {
      return this.$store.state.user
    },
    hasLogin() {
      return !!this.user.id
    },
  },
  methods: {
    goLogin() {
      if (this.hasLogin) {
        return
      }
      uni.navigateTo({
        url: '/pages/account/login',
      })
    },
    goTwitter() {
      // #ifdef APP
      if (plus.os.name == 'Android') {
        plus.runtime.launchApplication(
          {
            pname: 'twitter://user?screen_name=xiaomoinfo',
            extra: {
              url: 'https://twitter.com/xiaomoinfo',
            },
          },
          function (e) {
            console.log('Open Twitter failed: ' + e.message)
          },
        )
      } else if (plus.os.name == 'iOS') {
        plus.runtime.launchApplication(
          {
            action: 'twitter://xiaomoinfo',
          },
          function (e) {
            console.log('Open system default browser failed: ' + e.message)
          },
        )
      }
    },
  },
  goBindETC() {
    uni.navigateTo({
      url: '/pages/account/bind-etc',
    })
  },
  goBindPoint() {
    console.log('go bind etc...')
    uni.navigateTo({
      url: '/pages/account/bind-point',
    })
  },
  goFeedback() {
    uni.navigateTo({
      url: '/pages/account/feedback',
    })
  },
  logout() {
    uni.showModal({
      title: 'ログアウト',
      content: 'ログアウトしてもよろしいですか？',
      confirmText: '確認する',
      confirmColor: '#f7b2b2',
      cancelText: 'キャンセル',
      cancelColor: '#555',
      success: (res) => {
        if (res.confirm) {
          uni.setStorage({
            key: 'vuex',
            data: '',
            success: function () {
              uni.reLaunch({
                url: '/pages/account/login',
              })
            },
          })
        }
      },
    })
  },
}
</script>

<style lang="scss">
.user {
  .top {
    height: 300rpx;
    background: #bbb;
    padding: 0 30rpx;
    padding-top: var(--status-bar-height);
    position: relative;
    display: flex;
    align-items: center;

    .group {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: #fff;

      .userinfo {
        display: flex;
        width: 100%;
        align-items: center;

        .pic {
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #fff;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          padding-left: 20rpx;

          .nickname {
            font-size: 44rpx;
            font-weight: 600;
          }

          .year {
            font-size: 26rpx;
            padding-top: 5rpx;
          }

          .bind-status {
            padding-top: 50rpx;
            display: flex;
            justify-content: space-between;
            line-height: 50rpx;
            height: 50rpx;

            .etc {
              display: flex;
              line-height: 50rpx;
              height: 50rpx;
              justify-content: space-between;
              margin-right: 50rpx;

              .status {
                font-size: 32rpx;
              }

              .title {
                color: white;
                margin-right: 15rpx;
                font-size: 24rpx;
              }
            }

            .point {
              display: flex;
              justify-content: space-between;

              .title {
                color: white;
                margin-right: 15rpx;
                font-size: 24rpx;
              }

              .status {
                font-size: 32rpx;
              }
            }

            .active {
              color: white;
            }

            .inactive {
              color: red;
            }
          }
        }
      }

      .more {
        .iconfont {
          font-size: 40rpx;
        }
      }
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
        filter: blur(20px);
        transform: scale(2);
        opacity: 0.5;
      }
    }
  }

  .main {
    width: 100%;
    min-height: 200rpx;
    background: #fff;
    border-radius: 30rpx;
    transform: translateY(-30rpx);
    padding: 30rpx 0;

    .info {
      padding: 10rpx 30rpx;
      display: flex;
      font-size: 30rpx;

      .item {
        padding-right: 20rpx;
        margin-left: 30rpx;
        color: #000;
        font-size: 32rpx;

        text {
          font-weight: 600;
          color: #333;
        }
      }
    }

    .list {
      .group {
        padding: 15rpx 30rpx;
        border-bottom: 15rpx solid #f4f4f4;

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25rpx 30rpx;
          font-size: 28rpx;
          height: 80rpx;
          color: #000;
          border-bottom: 1rpx solid #ebebeb;

          .left {
            display: flex;
            align-items: center;

            .text {
              margin-left: 40rpx;
            }

            .iconfont {
              font-size: 50rpx;
              margin-right: 10rpx;
            }
          }

          .right {
            .iconfont {
              font-size: 26rpx;
            }
          }
        }

        .item:last-child {
          border: none;
        }
      }

      .group:last-child {
        border: none;
      }
    }
  }
}
</style>
