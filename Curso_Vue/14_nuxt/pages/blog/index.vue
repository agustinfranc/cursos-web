<template>
  <div class="container">
    <div class="card my-2" v-for="(item, index) in articulos" :key="index">
      <div class="card-body">
        <nuxt-link :to="`blog/${item.id}`">
          <h2>
            {{item.title}}
          </h2>
        </nuxt-link>
        <p>
          {{item.body}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    articulos: []
  }),
  async created() {
    try {
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      this.articulos = res.data
    } catch (error) {}
  }
};
</script>