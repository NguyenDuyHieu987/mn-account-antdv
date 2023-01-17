<template>
  <div class="home">
    <ManageAccount />
  </div>
</template>

<script>
// @ is an alias to /src
import ManageAccount from '@/components/ManageAccount.vue';

export default {
  name: 'DashBoard',
  components: {
    ManageAccount,
  },
};
</script>
