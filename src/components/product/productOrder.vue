<template>
<div class="d-flex justify-center py-3">
    <v-card max-width="1200" flat>
        <v-card-title>주문결제</v-card-title><hr class="mb-4">
        <v-row >
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6" max-width="600">
                    <v-card-title>주문자 정보</v-card-title>
                    <hr>
                    <v-form>
                        <v-text-field disabled v-model="userInfo.name" label="이름"></v-text-field>
                        <v-text-field v-model="userInfo.tel" label="연락처"></v-text-field>
                        <v-text-field disabled v-model="userInfo.email" label="메일주소"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6" max-width="600">
                    <v-card-title class="flex justify-space-between">배송지 정보
                        <v-card-actions>
                            <v-btn @click="sameInfo">주문자 정보와 동일</v-btn></v-card-actions>    
                    </v-card-title><hr>
                    <v-form>
                        <v-text-field v-model="deliveryInfo.name" label="이름"></v-text-field>
                        <v-text-field v-model="deliveryInfo.address" label="주소"></v-text-field>
                        <v-text-field v-model="deliveryInfo.tel" label="연락처"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6" max-width="600">
                    <v-card-title>주문상품 정보</v-card-title><hr>
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="baseUrl+product.imgUrl" width="150" height="200"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-text>이름 : {{product.name}}</v-card-text>
                            <v-card-text>가격 : {{product.price.toLocaleString('ko-KR')}}원</v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6 py-6 flex justify-center" max-width="600">
                    <v-card-title>최종결제 정보</v-card-title><hr>
                    <v-row rows="2">
                        <v-col>상품금액: {{product.price.toLocaleString('ko-KR')}}원 </v-col>
                    </v-row>
                    <v-row rows="2">
                        <v-col>할인금액: 0원</v-col>
                    </v-row>
                    <v-row rows="2">
                        <v-col>배송비: 3,000원 </v-col>
                    </v-row>
                    <hr>
                    <v-row rows="2">
                        <v-col class="flex"><span class="red--text text-h5 font-weight-medium"> 결제금액 </span> <span class="text-h5"> 
                            {{(product.price+3000).toLocaleString('ko-KR')}}원</span></v-col>
                    </v-row>
                    <v-row rows="4">
                        <v-col class="">
                            <v-btn @click="purchaseProduct" :disabled="btnTrig" width="70%" height="50px">결제하기</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6" color="#ECEFF1" max-width="600">
                    <v-card-title>결제수단</v-card-title><hr>
                    <v-card-actions>
                        <v-btn>kakao</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" md="6">
                <v-card class="mx-4 px-6" max-width="600">
                    <v-card-title>약관</v-card-title><hr>
                    <v-container>
                        <v-checkbox v-model="terms.collection" label="(필수) 개인정보 수집 및 이용 동의">
                        </v-checkbox>
                        <v-checkbox v-model="terms.thirdParty" label="(필수) 개인정보 제3자 제공동의">
                        </v-checkbox>
                        <v-checkbox v-model="terms.purchasingMember" label="(필수) 구매회원 약관 동의">
                        </v-checkbox>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</div>
</template>

<script lang="ts">
    import { Component, Vue , Prop } from 'vue-property-decorator';
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
    @Component
    export default class ProductOrder extends Vue {
        @Prop() product!: Product
        baseUrl = process.env.VUE_APP_BASE_URL
        userInfo = {
            name:this.$store.state.user.name,
            tel:'',
            email: this.$store.state.user.email
        }
        deliveryInfo = {
            name:'',
            tel:'',
            address:''
        }
        terms = {
            collection:false,
            thirdParty:false,
            purchasingMember:false
        }
        sameInfo() {
            this.deliveryInfo.name = this.userInfo.name;
            this.deliveryInfo.tel = this.userInfo.tel;
        }
        get btnTrig() {
            if(!(this.terms.collection && this.terms.thirdParty && this.terms.purchasingMember)) {
                return true
            }
            else {
                return false
            }
        }
        purchaseProduct() {
            if(!this.userInfo.tel) {
                alert('주문자 연락처를 입력하여주세요')
                return
            }
            if(!this.deliveryInfo.name || !this.deliveryInfo.tel || !this.deliveryInfo.address) {
                alert('배송지 정보를 모두 입력하여 주세요')
                return
            }
        }
    }
</script>

<style scoped>

</style>