<template>
    <div>
        <h1>Galeria de Fotos</h1>

        <router-link v-for="(item, index) of fotosArray" :key="index" :to="{ name: 'foto', params: {id : item} }">
            <button type="button" class="btn btn-outline-primary">FOTO {{item}}</button>
        </router-link>

        <Foto/>

        <!-- link al home mediante js en vez de router-link-->
        <button @click="home">Home</button>
    </div>
</template>

<script>
import Foto from "@/components/Foto.vue"

export default {
    name: 'Fotos',
    components: {
        Foto
    },
    data() {
        return {
            fotosArray: [1, 2, 3]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        }
    },
}
</script>