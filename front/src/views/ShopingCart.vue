<template>
    <v-container class="fill-height justify-center">
            <v-row>
                <v-col cols="12" md="6">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="desserts"
                        :single-select="singleSelect"
                        item-key="name"
                        show-select
                        class="elevation-1"
                    >
                        <template v-slot:top>
                        <v-switch
                            v-model="singleSelect"
                            label="Single select"
                            class="pa-3"
                        ></v-switch>
                        </template>
                    </v-data-table>
                </v-col>
                <v-col cols="12" md="6">
                      <v-card
                            class="mx-auto pa-5"
                            max-width="400"
                            tile
                        >
                            <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>총 3개의 상품금액: <span class="red--text">xxx원</span></v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title>배송비</v-list-item-title>
                                <v-list-item-subtitle class="red--text">3000원</v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>

                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title>합계</v-list-item-title>
                                <v-list-item-subtitle class="red--text">
                                302492039원
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>
                            <v-list-actions>
                                <v-btn class="white--text" color="red" outlined>상품 주문</v-btn>
                            </v-list-actions>
                        </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class  extends Vue {
        singleSelect= false
        selected= []
        headers= [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ]
        desserts= [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ]
    }
</script>

<style scoped>

</style>