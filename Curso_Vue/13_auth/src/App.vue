<template>
  <v-app id="inspire">

    <Nav></Nav>

    {{drawer}}

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="setDrawer" />
      <v-toolbar-title>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
//import Appbar from "@/components/Appbar"
import Nav from "@/components/Nav"

export default {
  components: {
    //Appbar,
    Nav,
  },
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    ...mapState(['drawer']),
  },

  methods: {
    ...mapActions(['setDrawer']),
  }
};
</script>
