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
                            <div class=" text-center" v-if="!updateMode">
                                <v-btn class="red--text text--accent-3 mt-3" @click="updateMode = !updateMode" outlined> 수정하기 </v-btn>
                            </div>
                            <div class=" text-center" v-else>
                                <v-btn class="red--text text--accent-3 mt-3" @click="updateUser" outlined> 수정완료 </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" md="8" class="pa-5">
                            <v-form>
                                <v-text-field v-model="user.email" disabled hide-details label="Email" name="Email" prepend-icon="email" type="text" color="red"></v-text-field>
                                <v-text-field v-model="user.password" :disabled="!updateMode" hide-details label="Password" name="Password" prepend-icon="lock" type="password" color="red"></v-text-field>
                                <v-text-field v-model="user.address" :disabled="!updateMode" hide-details label="Address" name="Address" prepend-icon="home" type="text" color="red"></v-text-field>
                                <v-text-field v-model="user.name" :disabled="!updateMode" hide-details label="Name" name="Name" prepend-icon="fas fa-user" type="text" color="red"></v-text-field>
                                <v-text-field v-model="user.tel" :disabled="!updateMode" hide-details label="Phone" name="Phone" prepend-icon="fas fa-phone" type="text" color="red"></v-text-field>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12" max-height="1200" min-width="430" width="600">
                    <v-card-title>1:1문의</v-card-title>
                    <v-divider />
                    <v-row justify="center" v-if="questionList[0]">
                        <v-col cols="12" md="10">
                            <v-expansion-panels focusable >
                                <v-expansion-panel
                                v-for="(item,i) in questionList"
                                :key="i"
                                >
                                <v-expansion-panel-header>
                                    {{item.title}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-html="item.content">
                                    
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-card-text class="pl-12 pt-5">문의 요청이 없습니다.</v-card-text>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto my-12" min-width="430" width="600">
                    <v-card-title>주문 정보</v-card-title>
                    <v-divider />
                    <v-row v-if="orderInfo.buyProduct">
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
                                    <v-list-item-content>{{numberComma(orderInfo.payment)}}원</v-list-item-content>
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
                    <v-row v-else>
                        <v-card-text class="pl-12 pt-5">주문 정보가 없습니다.</v-card-text>
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
                    <v-row class="pa-3" v-if="viewProductList[0]">
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
                    <v-row v-else>
                        <v-card-text class="pl-12 pt-5">최근 본 상품이 없습니다.</v-card-text>
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
interface Question {
    title:string
    content:string
}
    @Component<MyPage>({
        components:{
            ProductCard
        },
        created() {
            this.getUser();
            this.getQuestion();
        }
    })
    export default class MyPage extends Vue {
        updateMode: boolean = false
        user= {}
        viewProductList: Array<Product> = []
        orderInfo= {}
        $axios: any;
        questionList: Array<Question> = []
         numberComma( item:number ) {
                let numberData = new Number( item )
            return numberData.toLocaleString('ko-KR')
        }

        async getUser() {
            await this.$axios.get('/user/'+this.$store.state.user.id)
            .then( (r: AxiosResponse) => {
                r.data.user.password= '';
                this.user = r.data.user
                
                if(r.data.orderInfo) {
                    this.orderInfo = r.data.orderInfo
                }
                // console.log('akjsdhkjashdkajsdh',r.data);
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

        async getQuestion() {
            await this.$axios.get('/question/user/'+this.$store.state.user.id)
            .then( (r: AxiosResponse) => {
                if(r.data) {
                    r.data.forEach( (item:string) => {
                        const title = item.substring(0,item.indexOf('</h1>')+5).replace('<h1>','').replace('</h1>','')
                        const content = item.split('</h1>')[1]
                        this.questionList.push( {title , content})
                    })
                }
            })
        }

        async updateUser() {
            await this.$axios.post('/user/'+this.$store.state.user.id , this.user)
            .then( (r: AxiosResponse) => {
                console.log(r.data)
                this.updateMode = false
            })
        }
    }
</script>

<style scoped>

</style>