<template>
  <v-row>
    <v-col cols=12>
      <h1>Calendario</h1>
    </v-col>
    <v-col>
      <v-card>
        <v-date-picker v-model="fecha" full-width></v-date-picker>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-center">
          {{ fecha }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      fecha: '',
    }
  }
}
</script>
