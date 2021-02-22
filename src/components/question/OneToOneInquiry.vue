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
            <v-btn elevation="5" text outlined @click="submit">제출</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue , Prop} from 'vue-property-decorator';
    import { VueEditor } from "vue2-editor";

  interface Product {
      id: number; // pk

      imgUrl: string; // 이미지

      name: string; // 상품명

      description: string; // 상품 설명

      quantity: number; // 제품 수량
      
      grade: number; // 평점 총점
      
      salesQuantity: number; // 판매수량
      
      price: number; // 결제금액

      createdAt: Date; //상품 등록일
      
      updatedAt: Date; 
      }

    @Component<OneToOneInquiry>({
        components: { 
            VueEditor
        },
    })
    export default class OneToOneInquiry extends Vue {
                @Prop() product!: Product
        content= "<h1>제목: </h1>"
        
        submit() {
            this.$axios.post(`/question/${this.product.id}/${this.$store.state.user.id}`,{content:this.content})
            .then(r => {
                console.log(r)
            })
        }
    }
</script>

<style scoped>
.limsm-height {
    height: 92%;
}
</style>