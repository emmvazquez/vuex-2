<template>
    <h1>{{arreglo.title}}</h1>
    <p>{{arreglo.body}}</p>
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
                const url = 'https://jsonplaceholder.typicode.com/posts/'+`${this.$route.params.id}`
                const data = await fetch(url)
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