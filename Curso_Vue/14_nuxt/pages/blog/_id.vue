<template>
  <div class="container my-3">
    <div class="card">
      <div class="card-body">
        <h1>Articulo: {{articulo.id}}</h1>
        <p class="small">{{articulo.userName}}</p>
        <p>{{articulo.body}}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
  }),
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      let res = await axios.get(`
        http://jsonplaceholder.typicode.com/posts/${params.id}`);
      const articulo = res.data;

      res = await axios.get(`
        http://jsonplaceholder.typicode.com/users/${articulo.userId}`);
      articulo.userName = res.data.name

      return {articulo}
    } catch (error) {
      return {error: error}
    }
  }
};
</script>