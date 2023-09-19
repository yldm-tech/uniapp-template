import YldmHeader from './yldm/yldm-header/yldm-header.vue'
import YldmFooter from './yldm/yldm-footer/yldm-footer.vue'

declare module 'vue' {
  export interface GlobalComponents {
    'yldm-header': typeof YldmHeader
    'yldm-footer': typeof YldmFooter
  }
}

// 组件实例类型
export type YldmHeaderInstance = InstanceType<typeof YldmHeader>
export type YldmFooterInstance = InstanceType<typeof YldmFooter>
