export const state = () => ({
    mode: 'list',
    menuVisible: 1
});

export const mutations = {
    closeMenu(state) {
        state.menuVisible = 0;
    },
    openMenu(state) {
        state.menuVisible = 1;
    },
    selectCard(state) {
        state.mode = 'card';
    },
    selectList(state) {
        state.mode = 'list';
    }
}; 
