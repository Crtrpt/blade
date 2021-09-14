<template>
    <div>
        mqtt


        {{modelValue.id}}
    </div>
</template>


<script lang="ts">
import { defineComponent,defineAsyncComponent } from 'vue'
import {mapActions,mapState,mapGetters }  from "vuex";
export default defineComponent({
    setup() {
        console.log("mqtt初始化")
    },
    props:{
        modelValue:Object
    },
    created(){
        console.log(this.$props)
    }
  })
</script>