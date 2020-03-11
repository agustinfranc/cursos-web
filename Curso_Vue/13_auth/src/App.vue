<template>
  <v-app id="inspire">

    <Nav></Nav>

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

export default {
  components: {
    //Appbar,
    Nav,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
