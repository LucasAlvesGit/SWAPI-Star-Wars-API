<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background: radial-gradient(circle, #000429 0%, #080300 100%; padding: 0 3%;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title style="color: #E6CE21; font-size: 2em;">
          The Star Wars API
        </q-toolbar-title>

        <div style="color: #FFf">Lucas Alves - Turma 4</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above

    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>
        <EssentialLink style="font-size: 1.25em; margin-top: 5%;"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Filmes',
          caption: 'Conheça os filmes',
          icon: 'movie_filter',
          link: 'http://localhost:8080/#/filmes'
        },
        {
          title: 'Personagens',
          caption: 'Principais personagens',
          icon: 'supervisor_account',
          link: 'http://localhost:8080/#/personagens'
        },
        {
          title: 'Planetas',
          caption: 'Planetas da saga Star Wars',
          icon: 'public',
          link: 'http://localhost:8080/#/planetas'
        }
      ]
    }
  }
}
</script>
