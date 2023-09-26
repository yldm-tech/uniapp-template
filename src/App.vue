<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
// tailwind
@import './styles/tailwind.scss';
// 字体图标
@import './styles/fonts.scss';
// fui
@import './styles/fui-app.css';
</style>
