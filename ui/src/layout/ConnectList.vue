<template>
    <div>
        <div class="p-2 hover:bg-red-400 hover:text-white cursor-pointer" v-for="l in list " :key="l">
            {{l}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    data(){
        return {
            list:[
                1,
                2,
                3
            ]
        }
    }
})
</script>
