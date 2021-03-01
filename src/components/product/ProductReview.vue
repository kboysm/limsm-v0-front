<template>
    <v-card
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="color[i%2]"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.user.name"></v-card-subtitle>
                <v-card-text>
                  {{item.content}}
                </v-card-text>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="baseUrl + item.imgUrl"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
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
    @Component<ProductReview>({
      created() {
        this.getProductReview()
      }
    })
    export default class ProductReview extends Vue {
              @Prop() product!: Product
              color:Array<string> =   [ '#1F7087' , '#952175' ]
              baseUrl = process.env.VUE_APP_BASE_URL
        items= [
        
      ]

      getProductReview() {
        this.$axios.get('/productList/'+ this.product.id)
        .then( r => {
          console.log(r.data)
          this.items = r.data
        })
      }
    }
</script>

<style scoped>

</style>