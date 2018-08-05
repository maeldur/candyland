<template>
  <div id="app">
    <Header :candidate="candidate" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState(["candidate"])
  },
  created: function() {
    this.loadCandidate();
  },
  methods: {
    ...mapActions(["loadCandidate"])
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
