import { create } from 'zustand'

type MODAL_VIEWS =
  | 'SIGNUP_VIEW'
  | 'LOGIN_VIEW'
  | 'FORGOT_VIEW'
  | 'NEW_SHIPPING_ADDRESS'
  | 'NEW_PAYMENT_METHOD'

type SIDEBAR_VIEWS =
  | 'CART_VIEW'
  | 'CHECKOUT_VIEW'
  | 'PAYMENT_METHOD_VIEW'
  | 'MOBILE_MENU_VIEW'

interface UIState {
  displaySidebar: boolean
  displayDropdown: boolean
  displayModal: boolean
  sidebarView: SIDEBAR_VIEWS
  modalView: MODAL_VIEWS
  userAvatar: string

  // Actions
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  openDropdown: () => void
  closeDropdown: () => void
  openModal: () => void
  closeModal: () => void
  setModalView: (view: MODAL_VIEWS) => void
  setSidebarView: (view: SIDEBAR_VIEWS) => void
  setUserAvatar: (avatar: string) => void
}

const useUIStore = create<UIState>((set) => ({
  // Initial state
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  sidebarView: 'CART_VIEW',
  modalView: 'LOGIN_VIEW',
  userAvatar: '',

  // Actions
  openSidebar: () => set({ displaySidebar: true }),
  closeSidebar: () => set({ displaySidebar: false }),
  toggleSidebar: () =>
    set((state) => ({ displaySidebar: !state.displaySidebar })),
  openDropdown: () => set({ displayDropdown: true }),
  closeDropdown: () => set({ displayDropdown: false }),
  openModal: () => set({ displayModal: true }),
  closeModal: () => set({ displayModal: false }),
  setModalView: (view) => set({ modalView: view }),
  setSidebarView: (view) => set({ sidebarView: view }),
  setUserAvatar: (avatar) => set({ userAvatar: avatar }),
}))

export default useUIStore
