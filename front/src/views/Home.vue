<template>
  <v-app :style="{background: $vuetify.theme.themes.light.backgrounds}">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="Search items" prepend-icon="search" color="red" error></v-text-field>
        </v-col>
          <v-spacer></v-spacer>
          <span class="red--text mt-9">29 Items</span>
          <v-btn text class="mt-7">
            <v-icon color="red" class="mr-n10">menu</v-icon>
          </v-btn>
          <v-btn text class="mt-7">
            <v-icon color="red" class="mr-n10">dashboard</v-icon>
          </v-btn>
      </v-row>
      <v-row>
        <product-card v-for="item in 8" :key="item" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/product/ProductCard.vue'
@Component({
 components: {
   ProductCard
 }
})
export default class Home extends Vue {
  $vuetify:any ;
  get theme() {
    return (this.$vuetify.theme.dark) ? 'dark' : 'light'
  }
}
</script>

