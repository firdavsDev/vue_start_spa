<template lang="">
    <div class="container">
        <h1>{{page.title}}</h1>
        <p>{{page.content}}</p>
        
    </div>
</template>
<script>
export default {
    name: 'PageViewer',
    props: {
        page: {
            type: Object,
            required: true
        }
    }
    
}
</script>
<style lang="">
    
</style>