<template>
    <v-container class="fill-height justify-center" fluid>
        <v-card width="100%">
            <v-card-text class="text-center display-2 white--text text-accent-3 red">Question Board</v-card-text>
            <hr>
            <v-data-table height="auto" :headers="columnas" :items="questionList" class="elevation-19">
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    interface question {
                        id:string,
                        productName:string,
                        writer:string,
                        date:string
    }
    interface user {
        address: string,
        age: number,
        createdAt: string,
        email: string,
        name: string,
        id: number,
        tel: string
    }
    interface questionList {
        id:string,
        contentName:string,
        createdAt:string
        updatedAt:string
        user: user
    }
    @Component<QuestionBoard>({
        created() {
            this.getList()
        }
    })
    export default class QuestionBoard extends Vue {
        columnas= [
            {text:'ID', value:'id', class:'red derken-4 white--text'},
            {text:'상품명', value:'productName', class:'red derken-4 white--text'},
            {text:'글쓴이', value:'writer', class:'red derken-4 white--text'},
            {text:'날짜', value:'date', class:'red derken-4 white--text'}
        ]

        questionList: Array<question>= [
            
        ]

        getList() {
            this.$axios.get('/questions')
            .then( r=> {
                console.log(r.data);
                r.data.forEach( (item:questionList) => {
                    const listItem:question = {
                        id:'',
                        productName:'',
                        writer:'',
                        date:''
                    }
                    listItem.id = item.id
                    listItem.productName = item.contentName.split("_lsm")[0]
                    listItem.writer = item.user.name
                    listItem.date = item.createdAt
                    this.questionList.push(listItem)
                })
            })
        }
    }
</script>

<style scoped>

</style>