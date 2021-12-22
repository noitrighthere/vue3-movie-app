<template>
  <Headline />
  <!-- search와 movie는 형제 컴포넌트, vuex로 해결 -->
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'

export default {
  components: {
    Headline,
    Search,
    MovieList
  }
}
</script>