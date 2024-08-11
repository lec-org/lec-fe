import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IPageStore {
	sideBar_isShow: boolean
	sideBar_isFloat: boolean
	header_isShow: boolean
	toggleHeaderShow: [() => void, () => void]
	toggleSideBarFloat: () => void
	toggleSideBarShow: [() => void, () => void]
}

const usePageStore = create<IPageStore>()(
	persist(
		(set) => {
			const header_isShow = true
			const sideBar_isFloat = false
			const sideBar_isShow = true

			const toggleSideBarFloat = () => {
				console.log('toggleSideBarFloat', sideBar_isFloat)
				set((state) => ({ sideBar_isFloat: !state.sideBar_isFloat }))
			}

			const toggleSideBarShow = [
				() => set(() => ({ sideBar_isShow: true })),
				() => set(() => ({ sideBar_isShow: false })),
			] as [() => void, () => void]

			const toggleHeaderShow = [
				() => set(() => ({ header_isShow: true })),
				() => set(() => ({ header_isShow: false })),
			] as [() => void, () => void]

			return {
				header_isShow,
				sideBar_isFloat,
				sideBar_isShow,
				toggleHeaderShow,
				toggleSideBarFloat,
				toggleSideBarShow,
			}
		},
		{
			name: 'page-store',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				header_isShow: state.header_isShow,
				sideBar_isFloat: state.sideBar_isFloat,
				sideBar_isShow: state.sideBar_isShow,
			}),
		},
	),
)

export default usePageStore
