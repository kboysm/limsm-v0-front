<template>
    <v-card flat>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                Bold
            </button>
            </editor-menu-bar>
        <editor-content :editor="editor" />
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Editor , EditorContent } from 'tiptap';
    import { Bold, Italic, Link, HardBreak, Heading } from 'tiptap-extensions'
    @Component<OneToOneInquiry>({
        components: { 
            EditorContent
         },
        mounted() {
                this.editor = new Editor({
                    extensions: [
                        new Bold(),
                        new Italic(),
                        new Link(),
                        new HardBreak(),
                        new Heading()
                    ],
                }) 
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