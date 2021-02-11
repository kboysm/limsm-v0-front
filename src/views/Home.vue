<template>
  <v-app :style="{background: $vuetify.theme.themes.light.backgrounds}">
    <v-container>
      <v-row class="ml-md-4 mb-sm-12">
        <v-col cols="12" md="4" sm="6" xs="6">
          <v-text-field v-model="searchItem" label="Search items" prepend-icon="search" color="red" error></v-text-field>
        </v-col>
          <v-spacer></v-spacer>
            <span class="red--text mt-8">{{productList.length}} Items</span>
            <v-btn text class="mt-7">
              <v-icon color="red" class="mr-n10">menu</v-icon>
            </v-btn>
            <v-btn text class="mt-7 mr-sm-12">
              <v-icon color="red" class="mr-n10">dashboard</v-icon>
            </v-btn>
      </v-row >
      <v-row>
        <product-card :product="item" :idx=idx v-for="(item,idx) in viewProductList" :key="idx" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/product/ProductCard.vue'
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

@Component<Home>({
 components: {
   ProductCard
 },
 created() {
   this.getProductList();
 },
 mounted() {
   this.getCartList();
 }
})
export default class Home extends Vue {
  $vuetify:any ;
  get theme() {
    return (this.$vuetify.theme.dark) ? 'dark' : 'light'
  }
  productList = []
  searchItem = ''
  get viewProductList(  ) {
    if(!this.searchItem) {
      return this.productList
    }else {
      const searchProduct = this.productList.filter( (Product:Product) => {
        // item.name.includes(this.searchItem)
        return Product.name.includes(this.searchItem);
      })
        return searchProduct;
    }
  }
  async getProductList() {
    await this.$axios.get("/products")
            .then( (r:AxiosResponse) => {
              this.productList = r.data;
            }).catch((e: AxiosError) => {
                console.error(e);
            })
  }

  async getCartList() {
    await this.$axios.get("/carts/"+this.$store.state.user.carts.id )
      .then( (r: AxiosResponse) => {
        this.$store.dispatch('setCartList' , r.data[0].cartProduct);
      })
      .catch( (e:AxiosError) => {
        console.log(e)
      })
  }
}
</script>

