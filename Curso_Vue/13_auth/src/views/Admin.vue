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
              <v-btn
                color="primary"
                @click="subirImagen"
                :disabled="file === null"
                :loading="loading"
              >Subir Imagen</v-btn>
            </v-card-actions>

            <input type="file" class="d-none" ref="imagen" @change="buscarImagen($event)" />

            <v-card-text v-if="file">
              <h4>{{file.name}}</h4>
              <v-img :src="url"></v-img>
            </v-card-text>

            <v-card-text v-if="message">
              <h4>{{message}}</h4>
            </v-card-text>
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
import { storage, db } from "@/firebase";

export default {
  name: "Admin",
  data: () => ({
    file: null,
    url: "",
    loading: false,
    error: null,
    message: null,
  }),
  computed: {
    ...mapState(["usuario"])
  },
  methods: {
    buscarImagen(event) {
      //console.log(event.target.files[0]);

      const typeFile = event.target.files[0].type;

      if (typeFile === "image/jpeg" || typeFile === "image/png") {
        this.file = event.target.files[0];
        this.message = null;
      } else {
        this.message = "Archivo no valido";
        this.file = null;
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = e => {
        //console.log(e.target.result);
        this.url = e.target.result;
      };
    },
    async subirImagen() {
      try {
        this.loading = true;

        const refImagen = storage
          .ref()
          .child(this.usuario.email)
          .child("Foto Perfil");
        const res = await refImagen.put(this.file);
        //console.log(res);

        const urlImagen = await refImagen.getDownloadURL();

        this.usuario.foto = urlImagen;

        await db
          .collection("usuarios")
          .doc(this.usuario.uid)
          .update({
            foto: urlImagen
          });

          this.message = 'Imagen subida con exito'
          this.file = null;
      } catch (error) {
        //console.log(error);
        this.error = error
        this.message = 'Ocurrió un erro al subir la imagen'
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>