export default {
  namespaced: true,
  state: ():any => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSidebarOpend (state:any) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}
