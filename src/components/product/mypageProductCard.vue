<template>
  <div>
          <!-- <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-img src="01.jpg" width="150" height="150"></v-img>
              <v-card-text class="red--text">{{product.name}}<br>
                {{product.price.toLocaleString('ko-KR')}}원</v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex trantision-fast-in-fast-out red v-card-reveal display-3 white--text" style="height: 100%">
                  <v-btn outlined="" color="white">detail</v-btn>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover> -->
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="300" height="300" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-actions>
              <v-img :src="baseUrl+product.imgUrl" width="150" height="150"></v-img>
              <v-card-text class="red--text">{{product.name}}<br>
                {{product.price.toLocaleString('ko-KR')}}원</v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex trantision-fast-in-fast-out red v-card-reveal display-3 white--text" style="height: 100%">
                  <v-btn @click="openDialog" outlined="" color="white">detail</v-btn>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
          <product-dialog :dialog="dialog" @dialogFalse="dialogFalse" :product="product"></product-dialog>
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import productDialog from './productDialog.vue'
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
      components:{
        productDialog
      },
    })
    export default class ProductCard extends Vue {
        @Prop() product!: Product
        baseUrl = process.env.VUE_APP_BASE_URL

        dialog = false
        dialogFalse() {
          this.dialog=false
        }
        openDialog() {
          this.dialog=true
        }
    }
</script>

<style lang="scss" ecoped>
    .v-card-reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>