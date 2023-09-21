<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'
import { tryOnShow, tryOnHide } from '@uni-helper/uni-use'
onLaunch(() => {
  console.log('App Launch')
})
tryOnShow(() => {
  console.log('App Show')
})
tryOnHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
// tailwind
@import './styles/tailwind.scss';
// 字体图标
@import './styles/fonts.scss';
</style>
