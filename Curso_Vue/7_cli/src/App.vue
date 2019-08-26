<template>
  <div id="app">
    <Header></Header>
    <Lista/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Lista from './components/Lista.vue';

export default {
  name: 'app',
  components: {
    Header,
    Lista
  }
}
</script>