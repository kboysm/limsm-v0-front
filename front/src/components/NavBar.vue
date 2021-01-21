<template>
    <nav>
        <v-app-bar color="white" dark app class="line">
            <vtoolbar-title class="text-uppercase red--text">
                <span class="font-weight-light">
                    Cloud
                </span>
                <span>
                    Invertory
                </span>
            </vtoolbar-title>
            <template>
                <v-btn color="red" dark small absolute bottom right fab>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" dark app mini-variant class="red">
            <v-list flat>
                <v-list-item class="mb-12">
                    <v-icon>fas fa-cloud-download-alt</v-icon>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon>fas fa-desktop</v-icon>
                    </v-list-action>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-action>
                        <v-badge color="yellow">
                            <template v-slot:badge>1</template>
                            <v-icon>fas fa-shopping-cart</v-icon>
                        </v-badge>
                    </v-list-action>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-action>
                            <v-icon>fas fa-city</v-icon>
                    </v-list-action>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-action>
                            <v-icon>fas fa-cog</v-icon>
                    </v-list-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class NavBar extends Vue {
        drawer= true
    }
</script>

<style scoped>

</style>