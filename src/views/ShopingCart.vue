<template>
    <v-container class="fill-height justify-center">
            <v-row>
              <v-col cols="12">
                <div class="mx-auto text-h3">장바구니</div>
                <v-divider />
              </v-col>
                <v-col cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="cartList"
                        item-key="name"
                        class="elevation-1 mx-2"
                    >
                        <template v-slot:item.price="{ item }">
                          {{item.price * item.purchaseQuantity}}
                        </template>
                        <template v-slot:item.actions="{ item }">
                        <v-icon
                          small
                          class="mr-2"
                          @click="plusPurchaseQuantity(item)"
                        >
                          mdi-plus
                        </v-icon>
                        <v-icon
                          small
                          class="mr-2"
                          @click="minusPurchaseQuantity(item)"
                        >
                          mdi-minus
                        </v-icon>
                        <v-icon
                          small
                          @click="deleteBtn(item)"
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                      <!-- <template v-slot:no-data>
                        <v-btn
                          color="primary"
                          @click="initialize"
                        >
                          Reset
                        </v-btn>
                      </template> -->
                    </v-data-table>
                </v-col>
                <v-col cols="12">
                      <v-card
                            class="mx-auto pa-5"
                            max-width="400"
                            tile
                        >
                            <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>총 {{this.cartList.length}}개의 상품금액: <span class="red--text">{{totalPrice.toLocaleString('ko-KR')}}원</span></v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title>배송비</v-list-item-title>
                                <v-list-item-subtitle class="red--text">{{deliveryFee.toLocaleString('ko-KR')}}원</v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>

                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>합계</v-list-item-title>
                                <v-list-item-subtitle class="red--text">
                                {{( totalPrice + deliveryFee ).toLocaleString('ko-KR')}}원
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>
                            <v-list-item-action>
                                <v-btn class="white--text" color="red" outlined>상품 주문</v-btn>
                            </v-list-item-action>
                      </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {AxiosError , AxiosResponse} from 'axios'
    interface itemList extends Object {
            id: number;
            imgUrl: string;
            name: string;
            description: string;
            quantity: number;
            grade: number;
            salesQuantity: number;
            price: number;
            createdAt: Date;
            updatedAt: Date;
            purchaseQuantity: number;
          }

    @Component<ShopingCart>({
      created() {
        this.getCartList()
      },
      beforeDestroy() {
        this.saveUserCart()
      }
    })
    export default class ShopingCart extends Vue {
        singleSelect= false
        headers= [
          {
            text: '상품명',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '가격', value: 'price' },
          { text: '평점', value: 'grade' },
          { text: '수량', value: 'purchaseQuantity' },
          { text: 'Actions', value: 'actions', sortable: false },
        ]
        deliveryFee = 3000
        cartList:Array<itemList>  = []

        plusPurchaseQuantity( item: itemList ) {
          item['purchaseQuantity']++;
        }
        minusPurchaseQuantity( item: itemList ) {
          item['purchaseQuantity']--;
          if(item['purchaseQuantity'] === 0) {
            this.cartList.splice( this.cartList.indexOf(item) , 1)
            this.$store.dispatch('setCartList' , this.cartList)
          }
        }
        
        async deleteBtn( item: itemList ) { // delete 버튼을 눌렀을때
          this.cartList.splice( this.cartList.indexOf(item) , 1)
          this.$store.dispatch('setCartList' , this.cartList)
        }
        get totalPrice(): number {
          let totalPrice: number = 0
          if(this.cartList !== []){

            this.cartList.forEach( (item:itemList) => {
              totalPrice += (item.price * item.purchaseQuantity)
          })
            }
          return totalPrice;
        }
        async saveUserCart() {
          await this.$axios.post("/carts/save/"+this.$store.state.user.carts.id , this.cartList )
            .then( (r: AxiosResponse) => {
              console.log(r.data.cartProduct)
              // this.$store.dispatch('setCartList' , r.data.cartProduct)
            })
            .catch( (e:AxiosError) => {
              console.log(e)
            })
        }
        async getCartList() {
          await this.$axios.get("/carts/"+this.$store.state.user.carts.id )
            .then( (r: AxiosResponse) => {
              this.cartList = r.data[0].cartProduct
            })
            .catch( (e:AxiosError) => {
              console.log(e)
            })
        }
    }
</script>

<style scoped>

</style>