<template lang="">
    <div class="container">
        <button @click="incrementCounter">
            Clicked {{ counter }} times.
        </button>
    </div>
</template>
<!-- <script>
export default {
    name: "PagesList",
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter(){
            this.counter += 1
        }
    }
    
}
</script> -->
<script setup>
// composition API main purpose is to make it easier to share logic between components
// composition API is a set of functions that can be used inside of components
// such as reactive(), computed(), watch(), etc.

import { ref, reactive } from "vue";

const counter = ref(0);
// const counter = reactive({
//   value: 0,
// });

const incrementCounter = () => {
  counter.value += 1;
};

</script>
<style lang="">
    
</style>