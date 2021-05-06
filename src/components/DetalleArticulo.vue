<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <lista-articulos />
            </div>
            <div class="col-9">
                <h1>{{arregloDetalle.title}}</h1>
                <p>{{arregloDetalle.body}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import ListaArticulos from '../components/ListaArticulos.vue'
    export default {
  components: { ListaArticulos },
    data() {
        return {
            arregloDetalle: []
        }
    },
    methods:{
        async consumirApiArticulosDetalle(){
            try {
                const url = 'https://jsonplaceholder.typicode.com/posts/'+`${this.$route.params.id}`
                const data = await fetch(url)
                const arrayDetalle = await data.json()
                console.log(arrayDetalle)
                this.arregloDetalle = arrayDetalle
           } catch (error) {
                
            }
        }
    },
    created(){
        this.consumirApiArticulosDetalle()
    },
    updated(){
        this.consumirApiArticulosDetalle()
    }

}

</script>

<style>

</style>