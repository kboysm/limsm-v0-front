<template>
              <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
              <v-card>
                <v-card-title class="red">
                  <v-card-actions>
                    <v-btn
                      icon
                      dark
                      @click="dialogFalse"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <h4 class="white--text ml-4">
                    {{product.name}}
                  </h4>
                </v-card-title>
                <v-tabs
                  v-model="tab"
                  background-color="red"
                  color="white"
                  grow
                  flat
                >
                  <v-tab
                    v-for="item in items"
                    :key="item"
                    flat
                  >
                  {{ item }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab" >
                  <v-tab-item
                    v-for="item in items"
                    :key="item"
                  >
                    <v-card v-if="item === '상품정보'" flat>
                          <v-btn @click="addCart" class="mt-5 mr-3" color="red" dark small fixed middle right fab>
                              <v-icon>fas fa-shopping-cart</v-icon>
                          </v-btn>
                      <v-img :src="product.description"></v-img>
                    </v-card>
                    <product-order :product="product" v-else-if="item === '바로구매'"></product-order>
                    <one-to-one-inquiry v-else-if="item === '1:1문의'"></one-to-one-inquiry>
                    <product-review v-else-if="item === '구매후기'"></product-review>
                  </v-tab-item>
                </v-tabs-items>
            </v-card>
          </v-dialog>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import ProductOrder from './productOrder.vue'
    import OneToOneInquiry from '../question/OneToOneInquiry.vue'
    import ProductReview from './ProductReview.vue'
    import {AxiosError , AxiosResponse} from 'axios'
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

    @Component({
      components: {
        ProductOrder , 
        OneToOneInquiry , 
        ProductReview
      }
    })
    export default class  extends Vue {
        @Prop() product!: Product
        @Prop() dialog!: boolean
        dialogFalse() {
            this.$emit('dialogFalse',false);
        }
        tab= null
        items= [
          '상품정보', '바로구매',  '1:1문의','구매후기'
        ]
        text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

        addCart():void {
          if(!this.$store.state.token){
            alert('로그인 후 이용해주세요.')
          }
          else {
            this.$axios.post("/carts/"+this.$store.state.user.carts.id , this.product)
            .then( (r: AxiosResponse) => {
              alert(r.data);
            })
            .catch( (e:AxiosError) => {
              alert(e);
            })
          }
        }
    }
</script>

<style scoped>

</style>