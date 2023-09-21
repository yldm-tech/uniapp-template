import type { Tab, TabItem } from '@/types/category'

// 二级：热门-图片工具
const hotPicture: TabItem = {
  id: 1,
  name: '图片工具',
  children: [
    {
      id: 1,
      name: '图片压缩',
    },
    {
      id: 2,
      name: '图片裁切',
    },
    {
      id: 3,
      name: '图片转换',
    },
    {
      id: 4,
      name: '图片转换',
    },
  ],
}

// 二级：热门-视频工具
const hotVideo: TabItem = {
  id: 2,
  name: '视频工具',
  children: [
    {
      id: 1,
      name: '视频压缩',
    },
    {
      id: 2,
      name: '视频裁切',
    },
    {
      id: 3,
      name: '视频转换',
    },
    {
      id: 4,
      name: '视频转码',
    },
  ],
}

// 二级：热门-文本工具
const hotText: TabItem = {
  id: 3,
  name: '文本工具',
  children: [
    {
      id: 1,
      name: '文本压缩',
    },
    {
      id: 2,
      name: '文本裁切',
    },
    {
      id: 3,
      name: '文本转换',
    },
    {
      id: 4,
      name: '文本转码',
    },
  ],
}

// 一级
export const tabs: Tab[] = [
  {
    id: 1,
    name: '热门',
    badge: 1,
    disabled: false,
    children: [hotPicture, hotVideo, hotText],
  },
  {
    id: 2,
    name: '图片',
    disabled: false,
    children: [hotPicture, hotVideo],
    badge: 0,
  },
  {
    id: 3,
    name: '开发',
    disabled: false,
    badge: 0,
    children: [hotPicture, hotVideo],
  },
  {
    id: 4,
    name: '文本',
    disabled: false,
    badge: 0,
    children: [hotPicture, hotVideo],
  },
  {
    id: 5,
    name: '视频',
    disabled: false,
    badge: 0,
    children: [hotPicture, hotVideo],
  },
  {
    id: 6,
    name: '查询',
    badge: 'new',
    disabled: false,
    children: [hotPicture, hotVideo],
  },
  {
    id: 7,
    name: '开发',
    disabled: false,
    badge: 0,
    children: [hotPicture, hotVideo],
  },
  {
    id: 8,
    name: '其他',
    disabled: false,
    badge: 0,
    children: [hotPicture, hotVideo],
  },
]
