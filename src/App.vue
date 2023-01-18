<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
// import axios from 'axios';

export default {
  setup() {
    const router = useRoute();
    return {
      layout: computed(() => (router.meta.layout || 'default') + '-layout'),
    };
  },
  created() {
    // if (window.localStorage.getItem('userToken') == null) {
    //   this.$router.push('/auth');
    // } else {
    //   axios
    //     .post(`${process.env.VUE_APP_SERVICE_URL}/auth/keeplogin`, {
    //       usertoken: window.localStorage.getItem('userToken'),
    //     })
    //     .then((response) => {
    //       if (response.data == '') {
    //         console.log('Failed Sign in');
    //       } else {
    //         this.$store.state.userAccount = response.data;
    //         this.$router.push({ path: '/' });
    //       }
    //     })
    //     .catch((e) => {
    //       if (axios.isCancel(e)) return;
    //     });
    // }
  },
};
</script>

<style lang="scss"></style>
