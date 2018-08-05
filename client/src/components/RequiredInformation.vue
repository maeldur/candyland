<template>
  <div class="container">
    <div class="required-information-form">
      <PrioritiesSection :expand-by-default="true" v-model="priorities" @next="$refs.biography.expand()" />
      <BiographySection :expand-by-default="false" v-model="extendedBiography"  ref="biography" @next="$refs.philosophy.expand()" />
      <PoliticalPhilosophySection :expand-by-default="false" ref="philosophy" v-model="philosophy" />
    </div>
    <div class="actions">
      <Button :title="isSaving ? 'saving' : 'save'" @click="save" />
    </div>
  </div>
</template>

<script>
import PrioritiesSection from "@/components/required_information/PrioritiesSection.vue";
import BiographySection from "@/components/required_information/BiographySection.vue";
import PoliticalPhilosophySection from "@/components/required_information/PoliticalPhilosophySection.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "RequiredInformation",
  components: {
    PrioritiesSection,
    BiographySection,
    PoliticalPhilosophySection,
    Button
  },
  props: ["candidate"],
  data: function() {
    return {
      isSaving: false,
      priorities: [
        this.candidate.priority1,
        this.candidate.priority2,
        this.candidate.priority3
      ],
      extendedBiography: this.candidate.extendedBiography || "",
      philosophy: this.candidate.philosophy || ""
    };
  },
  methods: {
    async save() {
      this.isSaving = true;
      let resp = await axios.put("/api/candidate", {
        priority1: this.priorities[0],
        priority2: this.priorities[1],
        priority3: this.priorities[2],
        extendedBiography: this.extendedBiography,
        philosophy: this.philosophy
      });
      this.isSaving = false;

      if (resp && resp.data.success) {
        alert("Save Success");
      } else {
        alert("Save Error");
      }
    }
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
