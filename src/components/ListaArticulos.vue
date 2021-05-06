<template>

        <div class="row">
            <div class="col">
                <h1 >Lista de artículos</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul  class="list-group">
                <div v-for="item in arregloLista" :key="item.id">
                    <li class="list-group-item">
                        <router-link 
                        class="lista"
                        :to="`/articulo/${item.id}`"><li>{{ item.title }}</li></router-link>
                    </li>
                </div>
                </ul>
            </div>

    </div>
  
   

    
</template>

<script>
export default {
    data() {
        return {
            arregloLista: []
        }
    },
    methods:{
        async consumirApiArticulos(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array)
                this.arregloLista = array
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
ul li a{
    text-decoration: none;
    color:black
}

ul{
    list-style: none;
}
</style>