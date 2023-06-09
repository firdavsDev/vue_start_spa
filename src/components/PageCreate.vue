<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">

                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="title" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Content
                    </label>
                    <textarea type="text" rows="5" class="form-control" v-model="content"></textarea>
                </div>


            </div>
            <div class="col">

                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" class="form-control" v-model="linkText" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input type="text" class="form-control" v-model="linkURL" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        Published
                    </label>
                    <input type="checkbox" class="form-check" v-model="published"/>
                </div>

            </div>

            <div class="mb-3">
                <button class="btn btn-primary" :disabled="isFormValid" @click.prevent="submitForm">Create Page</button>

            </div>

        </div>
    </form>
</template>
<script>
export default {
    name: 'PageCreate',

    props: {
        pageCreated: {
            type: Function,
            required: true,
        }
    },

    data() {
        return {
            title: '',
            content: '',
            linkText: '',
            linkURL: '',
            published: true,
        }
    },

    methods: {
        submitForm() {
            if (this.isFormValid){
                return alert('Please fill out all fields')
            }
            const page = {
                title: this.title,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkURL,
                },
                published: this.published,
            }
            // call the pageCreated function that is passed to this component
            this.pageCreated(page)

            this.title = ''
            this.content = ''
            this.linkText = ''
            this.linkURL = ''
            this.published = true

        }
    },

    computed: {
        isFormValid() {
            return !this.title || !this.content || !this.linkText || !this.linkURL
        }
    },
    // watch is use for watching the changes in the data
    // main purpose of watch is to watch the changes in the data
    // computed vs watch: compute is can be use for the data that is not changing
    // watch is use for the data that is changing
    watch: {
        title(new_title, old_title) {
            if (this.linkText === old_title) {
                this.linkText = new_title
            }
        }
         
    }
}
</script>
<style lang="">
    
</style>