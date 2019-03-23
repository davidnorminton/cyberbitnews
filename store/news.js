export const state = () => ({
  news: [],
  empty: []
});

/*
 * use Mutations to change state 
 *
 */
export const mutations = {
  // add to news 
  addToNewsList(state, article) {
    state.news.push(article)
  },
  resetNewsList(state) {
    const empty = [];
    state.news = [];
  }
}; 

/*
 * Use Actions to run mutations
 */
export const actions = {
  resetState({ commit }) {
    commit('resetNewsList');
  }
}