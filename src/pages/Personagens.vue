<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section
      v-for="Personagem in Personagens"
      :key="Personagem.name"
    >
      <div class="text-h6">{{Personagem.name}}</div>
      <div class="text-subtitle2">{{planeta}} </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'PersonagensPage',
  data () {
    return {
      Personagens: [],
      especie: null,
      planeta: []
    }
  },
  methods: {
    async CarregarPersonagem () {
      await this.$axios.get('https://swapi.co/api/people/')
        .then(res => {
          this.Personagens = (res.data.results)
        })

      for (let i = 0; i >= this.Personagens.length; i++) {
        this.$axios.get(this.Personagens[i].homeworld)
          .then(res => {
            this.planeta.push(res.data.results)
          })
      }

      /* for (let i = 0; i > this.Personagens.length; i++) {
        this.$axios.all([
          this.$axios.get(this.Personagens[i].species[0]),
          this.$axios.get(this.Personagens[i].homeworld)
        ]).then(this.$axios.spread((especie, planeta) => {
          this.specie = especie.data.results
          this.planet = planeta.data.results

          this.Personagens = [
            ...this.Personagens,
            ...this.specie,
            ...this.planet
          ]
        }))
      } */
    }
  },
  beforeMount () {
    this.CarregarPersonagem()
  }
}
</script>
