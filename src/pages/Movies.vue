<template>
    <q-card row reverse
      class="my-card text-white"
      style="background-color: #0C0C0C;"
    >
      <q-card-section
        v-for="Movie in Movies"
        :key="Movie.name"
        style="text-align: center"
      >
        <div class="text-h6">Star Wars Episódio: {{Movie.episode_id}} - {{Movie.title}}</div>
        <div class="text-subtitle2" style="color: #FFC300">{{Movie.opening_crawl}}</div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: 'MoviesPage',
  data () {
    return {
      Movies: []
    }
  },
  methods: {
    async LoadMovies () {
      await this.$axios.get('https://swapi.co/api/films/')
        .then(res => {
          this.Movies = (res.data.results)
        })
    }
  },
  beforeMount () {
    this.LoadMovies()
  }
}
</script>
