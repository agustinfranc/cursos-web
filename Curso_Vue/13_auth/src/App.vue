<template>
  <v-app id="inspire">

    <Nav v-if="usuario"></Nav>

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
//import Appbar from "@/components/Appbar"
import Nav from "@/components/Nav"
import { mapState } from "vuex";

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
    ...mapState(['usuario'])
  }
};
</script>
