<template>
  <Navbar :pages="publishedPages" :activePage="activePage" :setActivePage="(index) => activePage = index" />
  <PageViewer v-if="pages.length > 0" :page="publishedPages[activePage]" />
  <!-- <PageCreate :pageCreated="pageCreated"/> -->
  
  <router-view/>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import PageViewer from '@/components/PageViewer.vue'
import PageCreate from '@/components/PageCreate.vue'

export default {
  // name of the component
  name: 'App',

  // components that are used in this component
  components: {
    Navbar,
    PageViewer,
    PageCreate
  },

  // data that is used in this component
  data() {
    return {
      activePage: 0,
      pages: []
    }
  },

  // lifecycle hook that is called when the component is created
  // methods that are called when the component is created
  methods: {
    async get_pages() {
      const response = await fetch('pages.json')
      const json = await response.json()
      this.pages = json
    },

    pageCreated(pageObj) {
      this.pages.push(pageObj)
    },
        
  },

  //created()  is a lifecycle hook that is called when the component is created
  created() {
    this.get_pages()
  },

  computed: {
    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  }


}
</script>