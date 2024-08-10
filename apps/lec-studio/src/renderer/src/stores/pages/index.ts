import { create } from 'zustand'

interface IPageStore {
	sideBar_isShow: boolean
	sideBar_isFloat: boolean
	header_isShow: boolean
	toggleHeaderShow: [() => void, () => void]
	toggleSideBarFloat: () => void
	toggleSideBarShow: [() => void, () => void]
}

const usePageStore = create<IPageStore>()((set) => {
	const header_isShow = true
	const sideBar_isFloat = false
	const sideBar_isShow = true

	const toggleSideBarFloat = () =>
		set((state) => ({ sideBar_isFloat: !state.sideBar_isFloat }))

	const toggleSideBarShow = [
		() => set(() => ({ sideBar_isShow: true })),
		() => set(() => ({ sideBar_isShow: false })),
	]

	const toggleHeaderShow = [
		() => set(() => ({ header_isShow: true })),
		() => set(() => ({ header_isShow: false })),
	]

	return {
		header_isShow,
		sideBar_isFloat,
		sideBar_isShow,
		toggleHeaderShow,
		toggleSideBarFloat,
		toggleSideBarShow,
	}
})

export default usePageStore
