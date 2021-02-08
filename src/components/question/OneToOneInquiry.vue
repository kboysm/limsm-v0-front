<template>
    <v-card flat>
        <editor-content :editor="editor" />
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Editor , EditorContent } from 'tiptap';

    @Component<OneToOneInquiry>({
        components: { 
            EditorContent
         },
        mounted() {
                this.editor = new Editor({ content: '<p>This is just a boring paragraph</p>', }) 
            },
        beforeDestroy() {
            if(this.editor){
                this.editor.destroy() 
            }
            },

    })
    export default class OneToOneInquiry extends Vue {
        editor: Editor | null = null
    }
</script>

<style scoped>

</style>