<template>
    <button>{{textoBoton}}</button>
</template>

<script>
export default {

    props:{
        tipo:Boolean
    },
    computed:{
        textoBoton(){
            return this.tipo ? "Aumentar"  : "Disminuir"
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>