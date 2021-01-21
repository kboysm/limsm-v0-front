<template>
     <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="01.jpg" width="150" height="150"></v-img>
              <v-card-text class="red--text">Ari Max Hyper Agressor</v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex trantision-fast-in-fast-out red v-card-reveal display-3 white--text" style="height: 100%">
                  <v-btn outlined="" color="white">detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute="" color="red" class="white--text" fab large left top>
                <h1>1</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductCard extends Vue {
        
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