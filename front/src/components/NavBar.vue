<template>
    <nav>
        <v-app-bar color="white" dark app class="line">
            <v-toolbar-title class="text-uppercase red--text">
                <span class="font-weight-light">
                    Cloud
                </span>
                <span>
                    Invertory
                </span>
            </v-toolbar-title>
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
                    <v-list-item-action>
                        <v-icon>fas fa-desktop</v-icon>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item router to="/shopingCart">
                    <v-list-item-action>
                        <v-badge color="yellow">
                            <template v-slot:badge>1</template>
                            <v-icon>fas fa-shopping-cart</v-icon>
                        </v-badge>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item router to="/SignIn">
                    <v-list-item-action>
                            <v-icon>fas fa-sign-in-alt</v-icon>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-action>
                            <v-icon>fas fa-user</v-icon>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item router to="/board">
                    <v-list-item-action>
                            <v-icon>fas fa-question</v-icon>
                    </v-list-item-action>
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