<template>
    <v-card class="px-12 mt-2" flat> 
        <v-card-title class="text-h5">1:1문의</v-card-title>
        <v-sheet
        color="white"
        elevation="10"
        height="600"
        >
            <vue-editor class="limsm-height" v-model="content"></vue-editor>
        </v-sheet>
        <br>
        <v-card-actions>
            <v-btn elevation="5" text outlined @click="testFunc">제출</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { VueEditor } from "vue2-editor";

    @Component<OneToOneInquiry>({
        components: { 
            VueEditor
        },
    })
    export default class OneToOneInquiry extends Vue {
        content= "<h1>제목: </h1>"
        
        testFunc() {
            console.log(this.content)
        }
    }
</script>

<style scoped>
.limsm-height {
    height: 92%;
}
</style>