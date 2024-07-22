import { create } from 'zustand'

const useConfigStore = create(() => ({
  cssConfig: {
    backgroundColor: 'white',
    textColor: 'black',
    fontSize: '16px'
  }
}))

export default useConfigStore
