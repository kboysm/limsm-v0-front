<template>
    <v-container class="fill-height justify-center " fluid>
        <v-card class="fill-height justify-center" width="100%">
            <v-card-text class="text-center display-2 white--text text-accent-3 red">Question Board</v-card-text>
            <hr>
                <v-data-table height="auto" :headers="columnas" :items="questionList" class="elevation-19">
                    <template v-slot:item.date="{ item }">
                            {{ item.date | moment('YY-MM-DD HH:mm') }} 
                    </template>
                    <template v-slot:item.actions="{ item }">
                    <v-icon
                        middle
                        class="mr-2"
                        @click="viewArticle(item.id)"
                    >
                        mdi-eye
                    </v-icon>
                    
                    </template>
            </v-data-table>

                <v-dialog
                    transition="dialog-bottom-transition"
                    v-model="dialog"
                >
                    
                    <v-card>
                        <v-toolbar
                        color="primary"
                        dark
                        >게시글 내용</v-toolbar>
                        <v-card-text>
                        <vue-editor class="limsm-height pt-5" v-model="dialogItem"></vue-editor>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="dialog = false"
                        >닫기</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

        </v-card>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
        import { VueEditor } from "vue2-editor";
    // import moment from 'vue-moment'
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
        },
        components: { 
            VueEditor
        },
    })
    export default class QuestionBoard extends Vue {
        columnas= [
            {text:'ID', value:'id', class:'red derken-4 white--text'},
            {text:'상품명', value:'productName', class:'red derken-4 white--text'},
            {text:'글쓴이', value:'writer', class:'red derken-4 white--text'},
            {text:'날짜', value:'date', class:'red derken-4 white--text'},
            {text: '', class:'red derken-4 white--text', value: 'actions', sortable: false },
        ]
        dialog:boolean = false
        dialogItem= ''
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

        viewArticle( item: number) {
            if( process.env.VUE_APP_BASE_URL !== 'http://localhost:3000/' ) {
                alert('배포 서버에 스토리지가 존재 하지 않아 내용이 저장되지 않았습니다.')
                return
            }
            this.$axios.get(`/question/${item}`)
            .then( r => {
                console.log(r.data)
                this.dialogItem = r.data
                this.dialog= true
            })
        }
    }
</script>

<style scoped>

</style>