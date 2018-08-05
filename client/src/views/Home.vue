<template>
  <div>
    <RequiredInformation :candidate="candidate" v-if="candidate" />
    <div v-else>Please wait..</div>
  </div>
</template>

<script>
// @ is an alias to /src
import RequiredInformation from "@/components/RequiredInformation.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    RequiredInformation
  },
  computed: {
    ...mapState(["candidate"])
  }
};
</script>
