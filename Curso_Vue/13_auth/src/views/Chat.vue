<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-text>{{ usuario.nombre }}</v-card-text>

        <v-card-text style="height: 60vh; overflow: auto" v-chat-scroll>
          <div class="text-right" :class="item.uid === usuario.uid ? 'text-right' : 'text-left'" v-for="(item, index) in mensajes" :key="index">
            <v-chip pill>
              <v-avatar>
                <img :src="item.foto" />
              </v-avatar>
              <span class="pill--span">{{item.mensaje}}</span>
            </v-chip>
            <p class="caption mr-1">{{item.fecha}}</p>
          </div>
        </v-card-text>

        <v-card-text>
          <v-form @submit.prevent="enviarMensaje" v-model="valido">
            <v-text-field v-model="mensaje" label="Escribe un mensaje..." required>
              <!-- :rules="rules" -->
            </v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/firebase";
import moment from "moment";

export default {
  name: "Chat",
  data: () => ({
    mensaje: "",
    mensajes: [],
    valido: false,
    rules: [
      v => !!v || "Campo requerido" // valido con vuetify
    ]
  }),
  computed: {
    ...mapState(["usuario"])
  },
  methods: {
    enviarMensaje() {
      //if (this.valido) {
      if (this.mensaje) {
        console.log(this.mensaje);

        // TODO: guardar mensaje en bd

        db.collection("chats")
          .add({
            mensaje: this.mensaje,
            usuario: this.usuario.uid,
            foto: this.usuario.foto,
            fecha: Date.now()
          })
          //.then(rsp => console.log(rsp))
          //.catch(error => console.log(error));

        this.mensaje = "";
      } else {
        //console.log("Mensaje vacio");
      }
    }
  },
  created() {
    // se ejecuta una vez cargada la vista

    moment.locale("es");

    // https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection
    // Escuchar en tiempo real varios documentos en una colección
    let ref = db
      .collection("chats")
      .orderBy("fecha", "desc")
      .limit(100);

    ref.onSnapshot(querySnapshot => {
      this.mensajes = [];
      querySnapshot.forEach(doc => {
        //this.mensajes.push(doc.data());
        this.mensajes.unshift({
          mensaje: doc.data().mensaje,
          usuario: doc.data().usuario,
          foto: doc.data().foto,
          fecha: moment(doc.data().fecha).format("lll")
        });
      });

      //console.log(this.mensajes);
    });
  }
};
</script>

<style>
.v-card__text .v-chip--pill,
.v-chip__content {
  padding-left: 0;
}
.v-card__text .v-chip--pill .pill--span {
  padding-left: 6px;
}
</style>