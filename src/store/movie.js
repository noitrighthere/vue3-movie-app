import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
import uniqBy from 'lodash/uniqBy'

export default {
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
    async searchMovies({ state, commit }, payload) {
      const { title, type, number ,year } = payload
      const OMDB_API_KEY = '7035c60c'

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })
      console.log(totalResults)
      console.log(typeof totalResults)

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // 10개가 넘을 시, 추가 요청
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if (page > (number / 10)) break
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
          const { Search } = res.data
          
          commit('updateState', {
            // ... 전개 연산자
            movies: [
              ...state.movies,
              ..._uniqBy(Search, 'imdbID')
            ]
          })
        }
      }
    }
  }
}