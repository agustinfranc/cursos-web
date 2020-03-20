<template>
  <v-layout justify-center mt-5>
    <v-flex xs12 sm6 md4 xl3>
      <v-card>
        <v-card-text
          class="display-1 text-uppercase white--text text-center"
          :class="registro ? 'success' : 'secondary'"
        >
          <span v-if="!registro">Ingreso</span>
          <span v-if="registro">Registro</span>
        </v-card-text>

        <v-card-text>
          <v-btn block class="error my-3" @click="google()">
            <v-icon left>mdi-google</v-icon>Google
          </v-btn>
          <v-btn block class="info my-3" @click="facebook()">
            <v-icon left>mdi-facebook</v-icon>Facebook
          </v-btn>
          <v-btn
            block
            class="my-3"
            @click="registro = !registro"
            v-if="!registro"
          >¿No tiene cuenta? Registrate</v-btn>
          <v-btn
            block
            class="my-3"
            @click="registro = !registro"
            v-if="registro"
          >¿Ya tiene cuenta? Ingresa</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { firebase } from "@/firebase"
import { mapMutations, mapActions } from 'vuex'
import router from '@/router'

export default {
  name: "Login",
  data() {
    return {
      registro: false
    };
  },
  methods: {
    ...mapMutations(['nuevoUsuario']),
    ...mapActions(['setUsuario']),
    google() {
      const provider = new firebase.auth.GoogleAuthProvider()
      this.ingresar(provider)
    },
    facebook() {

    },
    async ingresar(provider) {
      firebase.auth().languageCode = "es";
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        // The signed-in user info.
        const user = result.user;
        //console.log(user)
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;

        await this.setUsuario(user)

        router.push({name: 'Home'})

      } catch (error) {
        // Handle Errors here.
        //console.log(error)
        /* var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential; */
        // ...
      }

    }
  }
};
</script>