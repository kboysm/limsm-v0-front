<template>
              <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
            <v-card>
              <v-toolbar
                dark
                color="red"
              >
                <v-btn
                  icon
                  dark
                  @click="dialogFalse"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{product.name}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    dark
                    text
                  >
                    장바구니
                  </v-btn>
                  <v-btn
                    dark
                    text
                  >
                    1:1문의
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-list
                three-line
                subheader
              >
                <v-subheader>User Controls</v-subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Content filtering</v-list-item-title>
                    <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Password</v-list-item-title>
                    <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              
            </v-card>
          </v-dialog>
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

    @Component
    export default class  extends Vue {
        @Prop() product!: Product
        @Prop() dialog!: boolean
        dialogFalse() {
            this.$emit('dialogFalse',false);
        }
    }
</script>

<style scoped>

</style>