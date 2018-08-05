<template>
  <div class="container">
    <div class="required-information-form">
      <PrioritiesSection :expand-by-default="true" v-model="priorities" />
    </div>
    <div class="actions">
      <Button title="save" />
      <Button :inverted="true" title="submit basic form" />
    </div>
  </div>
</template>

<script>
import PrioritiesSection from "@/components/PrioritiesSection.vue";
import Button from "@/components/Button.vue";
export default {
  name: "RequiredInformationForm",
  components: { PrioritiesSection, Button },
  data: function() {
    return {
      priorities: []
    };
  }
};
</script>

<style lang="scss" scoped>
div.container {
  max-width: 700px;
  margin: 0 auto;
  div.required-information-form {
    padding: 30px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 32px;
  }
  div.actions {
    display: flex;
    justify-content: flex-end;
    div.button {
      margin-right: 17px;
    }
  }
}
</style>
