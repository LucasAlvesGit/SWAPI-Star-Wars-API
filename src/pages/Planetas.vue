<template>
  <div class="col-3">
    <q-card row reverse
      class="my-card text-white"
      style="background-color: #0C0C0C;"
    >
      <q-card-section
        v-for="Planeta in Planetas"
        :key="Planeta.name"
      >
        <div class="text-h6">{{Planeta.name}}</div>
        <div class="text-subtitle2" style="color: #FFC300">Habitantes: {{Planeta.population}}</div>
        <div class="text-subtitle2" style="color: #FFC300">Moradores: {{Planeta.residents}}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  padding: 5px
  margin: 25px
</style>

<script>
export default {
  name: 'PlanetasPage',
  data () {
    return {
      Planetas: [],
      personagem: []
    }
  },
  methods: {
    async CarregarPlaneta () {
      await this.$axios.get('https://swapi.co/api/planets/')
        .then(res => {
          this.Planetas = (res.data.results)
        })
        .then(() => {
          for (let i = 0; i < this.Planetas.length; i++) {
            this.$axios.get(this.Planetas[i].residents)
              .then(res => {
                this.Planetas[i].residents = (res.data.name)
              })
              .then(() => {
                this.$axios.get(this.Planetas[i].people)
                  .then(res => {
                    this.Planetas[i].people = res.data.name
                  })
              })
          }
        })
    }
  },
  beforeMount () {
    this.CarregarPlaneta()
  }
}
</script>
