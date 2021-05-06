<template>
{{contador}}
<boton-aumentar-disminuir tipo="true" @click="accionIncrementar" />
<boton-aumentar-disminuir @click="accionDisminuir"/>

</template>

<script>
// @ is an alias to /src
import BotonAumentarDisminuir from '../components/BotonAumentarDisminuir.vue'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    BotonAumentarDisminuir
  },
  computed:{
    ...mapState(['contador'])
  },
  methods:{
    ...mapActions(['accionIncrementar']),
    ...mapActions(['accionDisminuir'])
  }
}
</script>
