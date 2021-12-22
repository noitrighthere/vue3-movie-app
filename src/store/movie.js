import axios from 'axios'

export default ({
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // computed(계산된 상태)
  getters: {},
  // methods(데이터를 활용)
  // 변이
  mutations: {
    updateState(state, payload) {
      // 객체 데이터의 이름들만 가지고 하나의 배열로 반환
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기로 동작
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number ,year } = payload
      const OMDB_API_KEY = '7035c60c'

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search
      })
    }
  }
})