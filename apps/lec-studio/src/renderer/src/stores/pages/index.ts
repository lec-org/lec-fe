import { create } from 'zustand'

interface IPageStore {
	isShowHeader: boolean
	isFloatSideBar: boolean
	setIsShowHeader: (value: boolean) => void
	setIsFloatSideBar: (value: boolean) => void
}

const usePageStore = create<IPageStore>()((set) => ({
	isShowHeader: true,
	isFloatSideBar: true,
	setIsShowHeader: (value: boolean) => set(() => ({ isShowHeader: value })),
	setIsFloatSideBar: (value: boolean) =>
		set(() => ({ isFloatSideBar: value })),
}))

export default usePageStore
