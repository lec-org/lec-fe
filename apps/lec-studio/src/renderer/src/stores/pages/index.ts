import { create } from 'zustand'

interface IPageStore {
  isShowHeader: boolean
  isShowSideBar: boolean
  setIsShowHeader: (value: boolean) => void
  setIsShowSideBar: (value: boolean) => void
}

const pageStore = create<IPageStore>()((set) => ({
  isShowHeader: true,
  isShowSideBar: true,
  setIsShowHeader: (value: boolean) => set(() => ({ isShowHeader: value })),
  setIsShowSideBar: (value: boolean) => set(() => ({ isShowSideBar: value }))
}))

export default pageStore
