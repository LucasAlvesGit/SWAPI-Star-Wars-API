<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section
      v-for="Personagem in Personagens, Planeta in Planetas"
      :key="Personagem.name"
    >
      <div class="text-h6">{{Personagem.name}}</div>
      <div class="text-subtitle2">{{Planeta.name}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      Personagens: []
    }
  },
  methods: {
    CarregarPersonagem () {
      this.$axios.get('https://swapi.co/api/people/')
        .then(res => {
          this.Personagens = (res.data.results)
        })
    }
  },
  beforeMount () {
    this.CarregarPersonagem()
  }
}
</script>
