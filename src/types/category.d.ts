export type Tab = {
  id: number
  name: string
  badge?: number | string
  disabled?: boolean
  children?: TabItem[]
}

export type TabItem = {
  id: number
  name: string
  children: TabSubItem[]
}

export type TabSubItem = {
  id: number
  name: string
}
