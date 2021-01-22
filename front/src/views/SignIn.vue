<template>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text>
                                                <h1 class="text-center display-2 red--text text--accent-3">Sign In</h1>
                                                <div class="text-center mt-4">
                                                    <v-btn class="mx-2" fab color="red" outlined>
                                                        <v-icon>fab fa-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="red" outlined>
                                                        <v-icon>fab fa-google-plus-g</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="red" outlined>
                                                        <v-icon>fab fa-linkedin-in</v-icon>
                                                    </v-btn>
                                                </div>
                                                <h4 class="text-center mt-4">your email</h4>
                                                <v-form>
                                                    <v-text-field label="Email" name="Email" prepend-icon="email" type="text" color="red"></v-text-field>
                                                    <v-text-field id="password" label="Password" name="Password" prepend-icon="lock" type="password" color="red"></v-text-field>
                                                </v-form>
                                            <h3 class="text-center mt-3">Forget your password ?</h3>
                                            </v-card-text>
                                            <div class="text-center mt-3 mb-1">
                                                <v-btn rounded color="red" dark>SIgn In</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="4" class="red accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Hello, Friends !</h1>
                                                <h5 class="text-center">Enter your personnel detail and start journay with us</h5>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined="" dark @click="step++">Sign Up</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="red">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Welcome back !</h1>
                                                <h5 class="text-center"> To Keep connected with us please login with your personnel info</h5>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 red--text text--accent-3">Create Account</h1>
                                                <div class="text-center mt-4">
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-google-plus-g</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-linkedin-in</v-icon>
                                                    </v-btn>
                                                </div>
                                                <h4 class="text-center mt-4">Ensure your email for registration</h4>
                                                <v-form>
                                                    <v-text-field label="Name" name="Name" prepend-icon="person" type="text" color="red accent-3"></v-text-field>
                                                    <v-text-field label="Email" name="Email" prepend-icon="email" type="text" color="red accent-3"></v-text-field>
                                                    <v-text-field label="Password" name="Password" prepend-icon="lock" type="password" color="red accent-3"></v-text-field>
                                                </v-form>
                                            </v-card-text>
                                            <div class="text-center mt-n5">
                                                <v-btn rounded color="red accent-3 mb-1" dark>Sign Up</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class  extends Vue {
        step=1
    }
</script>

<style scoped>

</style>