<template>
  <div>
    <RequiredInformationForm />
  </div>
</template>

<script>
// @ is an alias to /src
import RequiredInformationForm from "@/components/RequiredInformationForm.vue";

export default {
  name: "home",
  components: {
    RequiredInformationForm
  }
};
</script>
