<template>
  <view class="root">
    <view class="feedback">
      <view class="feedback-type">
        <view class="title">タイプ</view>
        <view class="feedback-item" v-for="(item, index) in radios" :key="index">
          <u-tag
            class="tag"
            :text="item.name"
            size="large"
            :plain="!item.checked"
            type="primary"
            :name="index"
            @click="radioClick(index, item)"
          >
          </u-tag>
        </view>
      </view>

      <view class="feedback-content">
        <u--textarea
          v-model="feedback.content"
          :maxlength="500"
          :height="200"
          count
          placeholder="内容を入力してください"
        ></u--textarea>
      </view>

      <view class="feedback-email">
        <view class="title">メールアドレス</view>
        <u--input placeholder="请输入内容" border="surround" v-model="feedback.email"></u--input>
      </view>

      <view class="feedback-submit" @click="submit">
        <u-button type="primary" text="確認"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      feedback: {
        content: '',
        email: '',
        type: 'other',
      },
      radios: [
        {
          name: 'バック',
          type: 'bug',
          checked: true,
        },
        {
          name: 'アドバイス',
          type: 'advice',
          checked: false,
        },
        {
          name: 'その他',
          type: 'other',
          checked: false,
        },
      ],
    }
  },
  methods: {
    radioClick(name, current) {
      this.radios.map((item, index) => {
        item.checked = index === name ? true : false
      })
      this.feedback.type = current.type
    },
    submit() {
      console.log(this.feedback)
    },
  },
}
</script>

<style lang="scss" scoped>
.root {
  .feedback {
    margin: 50rpx 10rpx;

    .feedback-type {
      .title {
        font-size: 36rpx;
        margin: 20rpx;
      }

      .feedback-item {
        margin: 0 10rpx;
        width: 220rpx;
        display: inline-block;

        /deep/ .u-tag {
          display: flex;
          justify-content: center;
        }
      }
    }

    .feedback-content {
      margin: 60rpx 10rpx;
    }

    .feedback-email {
      margin: 60rpx 10rpx;

      .title {
        margin: 20rpx 0;
      }
    }

    .feedback-submit {
      margin: 60rpx 10rpx;
    }
  }
}
</style>
