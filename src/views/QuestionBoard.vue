<template>
    <v-container class="fill-height justify-center" fluid>
        <v-card width="100%">
            <v-card-text class="text-center display-2 white--text text-accent-3 red">Question Board</v-card-text>
            <hr>
            <v-data-table height="auto" :headers="columnas" :items="articulos" class="elevation-19">
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class QuestionBoard extends Vue {
        columnas= [
            {text:'ID', value:'id', class:'red derken-4 white--text'},
            {text:'DESCRIPTION', value:'description', class:'red derken-4 white--text'},
            {text:'PRECOo', value:'precio', class:'red derken-4 white--text'},
            {text:'STOCK', value:'stock', class:'red derken-4 white--text'}
        ]

        articulos= [
            {
                id:1,
                description:'text1',
                precio:180.00,
                stock:45
            },
            {
                id:2,
                description:'text2',
                precio:90.00,
                stock:88
            },
            {
                id:3,
                description:'text3',
                precio:100.00,
                stock:27
            },
            {
                id:4,
                description:'text4',
                precio:70.00,
                stock:35
            },
            {
                id:5,
                description:'text5',
                precio:70.00,
                stock:35
            },
            {
                id:6,
                description:'text6',
                precio:70.00,
                stock:35
            },
            {
                id:7,
                description:'text7',
                precio:70.00,
                stock:35
            }
        ]

        openDiglog() {
            console.log('open dialog')
        }
    }
</script>

<style scoped>

</style>