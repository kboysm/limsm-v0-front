<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12" height="400" min-width="430" width="600">
                    <v-card-title>회원 정보</v-card-title>
                    <v-divider />
                    <v-row>
                        <v-col cols="12" md="4" class="pa-5">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                            <div class=" text-center">
                                <v-btn class="red--text text--accent-3 mt-3" outlined> 수정하기 </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" md="8" class="pa-5">
                            <v-form>
                                <v-text-field v-model="user.email" disabled hide-details label="Email" name="Email" prepend-icon="email" type="text" color="red"></v-text-field>
                                <v-text-field disabled hide-details label="Password" name="Password" prepend-icon="lock" type="password" color="red"></v-text-field>
                                <v-text-field v-model="user.address" disabled hide-details label="Address" name="Address" prepend-icon="home" type="text" color="red"></v-text-field>
                                <v-text-field v-model="user.name" disabled hide-details label="Name" name="Name" prepend-icon="fas fa-user" type="text" color="red"></v-text-field>
                                <v-text-field v-model="user.tel" disabled hide-details label="Phone" name="Phone" prepend-icon="fas fa-phone" type="text" color="red"></v-text-field>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12" max-height="1200" min-width="430" width="600">
                    <v-card-title>1:1문의</v-card-title>
                    <v-divider />
                    <v-row justify="center">
                        <v-col cols="12" md="10">
                            <v-expansion-panels focusable >
                                <v-expansion-panel
                                v-for="(item,i) in 5"
                                :key="i"
                                >
                                <v-expansion-panel-header>
                                    문의{{i}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12" min-width="430" width="600">
                    <v-card-title>주문 정보</v-card-title>
                    <v-divider />
                    <v-row>
                        <v-col cols="12">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>배송지 : </v-list-item-content>
                                    <v-list-item-content>{{orderInfo.destination}}</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>배송자 : </v-list-item-content>
                                    <v-list-item-content>{{orderInfo.name}}</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>전화번호 : </v-list-item-content>
                                    <v-list-item-content>{{orderInfo.tel}}</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>결제금액 : </v-list-item-content>
                                    <v-list-item-content>{{orderInfo.payment.toLocaleString('ko-KR')}}원</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        
                        <v-col cols="12">
                            <v-list>
                                <v-list-item v-for=" (item,idx) in orderInfo.buyProduct" :key="idx">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            상품_{{idx}}, {{item.name}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            수량:{{item.purchaseQuantity}}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <!-- <v-list-item-content>{{item.name}}</v-list-item-content> -->
                                </v-list-item>
                                <!-- <v-list-item>
                                    <v-list-item-content>상품2 : </v-list-item-content>
                                    <v-list-item-content>테스트 상품2</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>상품3 : </v-list-item-content>
                                    <v-list-item-content>테스트 상품3</v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>상품4 : </v-list-item-content>
                                    <v-list-item-content>테스트 상품4</v-list-item-content>
                                </v-list-item> -->
                            </v-list>
                        </v-col>
                    </v-row>
                    <div style="line-height:110%;">
                        <br><br>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12 justify-center align-center" max-height="800" min-width="430" width="600">
                    <v-card-title>최근 본 상품</v-card-title>
                    <v-divider />
                    <v-row class="pa-3">
                        <v-col cols="12" xl="3" lg="4" md="6" sm="6" xs="6" v-for=" (item,index) in viewProductList" :key="index">
                            <product-card :product="item"></product-card>
                        </v-col>
                        <!-- <v-col cols="12" xl="3" lg="4" md="6" sm="6" xs="6">
                            <product-card></product-card>
                        </v-col>
                        <v-col cols="12" xl="3" lg="4" md="6" sm="6" xs="6">
                            <product-card></product-card>
                        </v-col>
                        <v-col cols="12" xl="3" lg="4" md="6" sm="6" xs="6">
                            <product-card></product-card>
                        </v-col> -->
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ProductCard from '@/components/product/mypageProductCard.vue'
    import { AxiosResponse} from 'axios'

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

    @Component<MyPage>({
        components:{
            ProductCard
        },
        created() {
            this.getUser();
        }
    })
    export default class MyPage extends Vue {
        user= {}
        viewProductList: Array<Product> = []
        orderInfo= {}
        $axios: any;

        async getUser() {
            await this.$axios.get('/user/'+this.$store.state.user.id)
            .then( (r: AxiosResponse) => {
                this.user = r.data.user
                this.orderInfo = r.data.orderInfo
                console.log(r.data);
                for(let i=0 ; i<r.data.viewProductList.length ; i++) {
                    let search_char = r.data.user.viewRecentProduct[i]
                    r.data.viewProductList.forEach( (item: Product) => {
                        if(""+item.id === search_char) {
                            this.viewProductList.push(item);
                        }
                    });
                }
            })
        }
    }
</script>

<style scoped>

</style>