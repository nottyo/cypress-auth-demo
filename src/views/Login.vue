<template>
  <div>
    <h2>Please Login</h2>
    <div id="firebaseui-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import Component from 'vue-class-component';

@Component
export default class Login extends Vue {
  private mounted() {
    const uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-container', uiConfig);
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
