<template>
     <v-col cols="12" xl="2" lg="3" md="4" sm="6" xs="12" align-self="center" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="300" height="300" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-actions>
              <v-img :src="baseUrl+product.imgUrl" width="150" height="150"></v-img>
              <div class="text-center">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    middle
                    readonly
                  ></v-rating>
                </div>
              <v-card-text class="red--text">{{product.name}}<br>
                {{product.price.toLocaleString('ko-KR')}}원</v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex trantision-fast-in-fast-out red v-card-reveal display-3 white--text" style="height: 100%">
                  <v-btn @click="openDialog" outlined="" color="white">detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute="" color="red" class="white--text d-none d-sm-flex" fab large left top>
                <h1>{{idx+1}}</h1>
              </v-btn>
            </v-card>
          </v-hover>
          <product-dialog :dialog="dialog" @dialogFalse="dialogFalse" :product="product"></product-dialog>
        </v-col>

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
    @Component<ProductCard>({
      components:{
        productDialog
      },
      created() {
        this.rating = Math.ceil(this.product.grade/this.product.salesQuantity *10)/10
      }
    })
    export default class ProductCard extends Vue {
        @Prop() product!: Product
        @Prop() idx!: number
        baseUrl = process.env.VUE_APP_BASE_URL
        rating = 0
        dialog = false
        dialogFalse() {
          this.dialog=false
        }
        openDialog() {
          this.dialog=true
          this.ViewUserProduct();
        }
        async ViewUserProduct() {
          await this.$axios.get(`/user/${this.$store.state.user.id}/${this.product.id}`)
          .then( r => {
            console.log(r);
          })
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