<template>
  <v-row>
    <v-col cols=12>
      <h1>Calendario</h1>
    </v-col>
    <v-col>
      <v-card>
        <v-date-picker 
          v-model="fecha" 
          full-width
          locale="es-ar"
          :min="minimo"
          :max="maximo"
          @change="getDolar(fecha)"
        ></v-date-picker>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-center">
          {{ valor }} {{ fecha }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      fecha: new Date().toISOString().substring(0, 10),
      minimo: '1984',
      maximo: new Date().toISOString().substring(0, 10),
      valor: null,
    }
  },
  methods: {
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),

    async getDolar(dia) {

      try {
        
        this.mostrarLoading({titulo: 'Accediendo a la informacion', color: 'secondary'})

        let arrayFecha = dia.split('-')
        let ddmmyyyy = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0]
        let data = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyyyy}`)

        if (data && data.data.serie.length > 0)
          this.valor = data.data.serie[0].valor
        else
          this.valor = 'Sin datos'

      } catch (error) {
        console.log(error)
      }
      finally {
        this.ocultarLoading()
      }

    }
  },
  created() {             // created seria como un DOMContentLoaded
    this.getDolar(this.fecha)
  }
}
</script>
