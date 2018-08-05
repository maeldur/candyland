<template>
  <SectionBase name="Biography" ref="sectionBase" :expand-by-default="expandByDefault">
    <div slot="requirements" class="requirements">
      A brief, narrative overview of the candidate's past.
    </div>
    <div slot="fields" class="text"> 
      <textarea v-model="text">
      </textarea>
    </div>
    <div slot="actions">
      <Button title="Next" @click="onNextClick" />
    </div>
  </SectionBase>
</template>


<script>
import sectionMixin from "@/mixins/section.js";
import Button from "@/components/Button.vue";
export default {
  name: "BiographySection",
  components: { Button },
  mixins: [sectionMixin],
  props: ["value"],
  data: function() {
    return {
      text: this.value + "" || ""
    };
  },
  watch: {
    text: function() {
      this.$emit("input", this.text);
    }
  },
  methods: {
    onNextClick() {
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss" scoped>
.requirements {
  text-align: left;
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
}
.text {
  textarea {
    width: 100%;
    border: 1px solid #a6a6a6;
    height: 200px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 22px;
    padding: 7px 10px;
  }
}
</style>
