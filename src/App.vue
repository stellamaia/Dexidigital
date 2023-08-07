<template>
  <v-app>
    <div id="app">
      <router-view />
      <WhatsappButton />
    </div>
  </v-app>
</template>

<script>
import WhatsappButton from './components/WhatsappButton.vue';

export default {
  name: 'App',
  components: {
    WhatsappButton
  }
};

</script>


