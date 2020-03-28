<template>
  <div class="home">
    <img alt="photo" :src="user.photoURL" data-at="photoURL">
    <p>DisplayName: <span data-at="displayName">{{user.displayName}}</span></p>
    <p>Email: <span data-at="email">{{user.email}}</span></p>
    <p>ProviderId: <span data-at="providerId">{{user}}</span></p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Component from 'vue-class-component';

@Component({
  name: 'Home',
})
export default class Home extends Vue {
  private user = {} as firebase.User;

  private created() {
    this.user = firebase.auth().currentUser as firebase.User;
    console.log('this.user', this.user);
  }
}
</script>
