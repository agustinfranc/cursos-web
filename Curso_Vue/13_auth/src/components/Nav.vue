<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app>
      <!-- Grid -->
      <v-layout column mt-3>
        <v-flex>
          <div>
            <!-- Avatar -->
            <v-avatar>
              <img :src="usuario.foto" :alt="usuario.nombre" />
            </v-avatar>
            <span>{{usuario.nombre}}</span>
          </div>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link v-for="(item, index) in items" :key="index" :to="item.to">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="cerrarSesion">Cerrar Sesion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link :to="{name: 'Home'}" class="white--text">Home</router-link>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Nav",
  data: () => ({
    drawer: false,
    items: [
      {
        title: "Home",
        icon: "mdi-home",
        to: {name: "Home"},
      },
      {
        title: "Admin",
        icon: "mdi-contact-mail",
        to: {name: "Admin"},
      },
      {
        title: "Chat",
        icon: "mdi-contact-mail",
        to: {name: "Chat"},
      },
    ]
  }),
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapState(['usuario'])
  }
};
</script>

<style>
  a {
    text-decoration: none;
  }
</style>