<template>
  <v-layout mt-5 justify-center>
    <!-- Grid -->
    <v-flex xs6>
      <v-card>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="usuario.nombre"></v-card-title>

            <v-card-subtitle v-text="usuario.email"></v-card-subtitle>

            <v-card-actions>
              <v-btn color="secondary" @click="$refs.imagen.click()">Buscar Imagen</v-btn>
              <v-btn color="primary" :disabled="file === null">Subir Imagen</v-btn>
            </v-card-actions>

            <input type="file" class="d-none" ref="imagen" @change="buscarImagen($event)">
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="usuario.foto" :alt="usuario.nombre"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Admin",
  data: () => ({
    file: null,
  }),
  computed: {
    ...mapState(["usuario"])
  },
  methods: {
    buscarImagen(event) {
      console.log(event.target.files[0])
      this.file = event.target.files[0]
    }
  }
};
</script>