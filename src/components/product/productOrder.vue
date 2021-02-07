<template>
    <v-card flat>
        <v-card-title>주문결제</v-card-title><hr>
        <v-row>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>주문자정보</v-card-title>
                    <hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="메일주소"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>배송지정보</v-card-title><hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="주소"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="배송시 요청사항"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>주문상품 정보</v-card-title><hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="주소"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="배송시 요청사항"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>최종결제 정보</v-card-title><hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="주소"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="배송시 요청사항"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>결제수단 선택</v-card-title><hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="주소"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="배송시 요청사항"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="6">
                <v-card class="px-4">
                    <v-card-title>약관</v-card-title><hr>
                    <v-form>
                        <v-text-field label="이름"></v-text-field>
                        <v-text-field label="주소"></v-text-field>
                        <v-text-field label="연락처"></v-text-field>
                        <v-text-field label="배송시 요청사항"></v-text-field>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductOrder extends Vue {
        
    }
</script>

<style scoped>

</style>