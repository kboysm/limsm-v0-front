<template>
    <v-card class="px-12 mt-2" flat> 
        <v-card-title class="text-h5">1:1문의</v-card-title>
        <!-- <vue-editor v-model="content"></vue-editor> -->
        <br>
        <v-card-actions>
            <v-btn>제출</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    // import { VueEditor } from "vue2-editor";

    @Component<OneToOneInquiry>({
        components: { 
            // VueEditor
        },
    })
    export default class OneToOneInquiry extends Vue {
        content= "<h1>제목: </h1>"
    }
</script>

<style scoped>

</style>