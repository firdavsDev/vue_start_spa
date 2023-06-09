<template lang="">
  <a
    class="nav-link"
    :class="activeClass"
    aria-current="page"
    :href="page.link.url"
    :title="`This link goes to ${page.link.text} page`"
    >{{ page.link.text }}</a>
</template>
<script>
export default {
    props: ["page", 'isActive'],
    name: "NavbarLink",
    // computed main purpose is to return a value based on the value of other properties
    // and it is cached based on its dependencies
    // so if the dependencies don't change, the computed value won't change

    computed: {
        activeClass() {
            return {
                active: this.isActive,
                emphasized: this.isActive,
            }
        },

    },
};
</script>
<style scoped>
.emphasized {
    font-weight: bold;
    text-decoration: underline !important;
}
</style>

