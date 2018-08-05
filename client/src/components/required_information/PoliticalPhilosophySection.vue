<template>
  <SectionBase name="Political Philsophy" ref="sectionBase" :expand-by-default="expandByDefault">
    <div slot="requirements" class="requirements">
      An essay describing the <strong>candidate's political philosophy</strong>.<br>
      <strong>Word Limit</strong>: 1,000 words
    </div>
    <div slot="fields" class="text"> 
      <textarea v-model="text">
      </textarea>
    </div>
  </SectionBase>
</template>


<script>
import sectionMixin from "@/mixins/section.js";
import Button from "@/components/Button.vue";
export default {
  name: "PoliticalPhilosophySection",
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
