<template>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link :to="{name: 'Home'}">Title</router-link>
      </v-toolbar-title>
    </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Appbar",

  data: () => ({
    drawer: null,
  }),
  methods: {
    ...mapActions(["cerrarSesion"])
  }
};
</script>