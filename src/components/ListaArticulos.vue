<template>
  <h1 >Lista de artículos</h1>
   

    <ul>
    <div v-for="item in arreglo" :key="item.id">
        <router-link :to="`/articulo/${item.id}`"><li>{{ item.title }}</li></router-link>
        
    </div>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            arreglo: []
        }
    },
    methods:{
        async consumirApiArticulos(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array)
                this.arreglo = array
           } catch (error) {
                
            }
        }
    },
    created(){
        this.consumirApiArticulos()
    }
}
</script>

<style>

</style>