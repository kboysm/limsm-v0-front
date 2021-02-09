<template>
    <v-card
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    후기보기
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductReview extends Vue {
        items= [
        {
          color: '#1F7087',
          src: process.env.VUE_APP_BASE_URL + 'img/0.PNG',
          title: '컴퓨터 테스트1',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: process.env.VUE_APP_BASE_URL + 'img/0.PNG',
          title: '컴퓨터 테스트2',
          artist: 'Ellie Goulding',
        },
      ]
    }
</script>

<style scoped>

</style>