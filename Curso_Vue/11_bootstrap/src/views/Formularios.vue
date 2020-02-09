<template>
  <div class="container pt-5">
    <h1>Formularios</h1>

    <form>
      <b-row>
        <b-col cols="12" class="mt-3">
          <b-form-input type="text" v-model="texto" aria-describedby="input" :state="comprobar"></b-form-input>
          <b-form-invalid-feedback id="input">Minimo 3 caracteres</b-form-invalid-feedback>
          <b-form-input type="number" v-model="numero"></b-form-input>
          <p>{{ texto }}</p>
          <p>{{ numero }}</p>
        </b-col>

        <b-col cols="12" class="mt-3">
          <b-form-select v-model="select" :options="options"></b-form-select>
          <div class="mt-3">
            Selected:
            <strong>{{ select }}</strong>
          </div>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "formularios",
  data() {
    return {
      texto: "",
      numero: "",
      select: null,
      options: [
          {value: "gato", text: "Gato"},
          {value: "perro", text: "Perro"},
          {value: "pato", text: "Pato"}
      ]
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>