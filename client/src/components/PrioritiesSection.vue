<template>
  <SectionBase name="Priorities" :expand-by-default="expandByDefault">
    <div class="requirements">
      A brief description of one of the <strong>candidates top priorities</strong> if elected.<br>
      Descriptions can range from <strong>one word to two sentences</strong>. 
    </div>
    <div class="priority" v-for="index in [0,1,2]" :key="index"> 
      <div class="label">Priority {{ index + 1 }}</div>
      <input type="text" v-model.trim="priorities[index]" />
    </div>
  </SectionBase>
</template>

<script>
import lodash from "lodash";
import sectionMixin from "@/mixins/section.js";
export default {
  name: "PrioritiesInputSection",
  mixins: [sectionMixin],
  props: ["value"],
  data: function() {
    return {
      priorities: lodash.clone(this.value || [])
    };
  },
  watch: {
    priorities: function() {
      this.$emit("input", this.priorities);
    }
  }
};
</script>

<style lang="scss" scoped>
div.requirements {
  text-align: left;
  margin-bottom: 30px;
}
div.priority {
  div.label {
    text-align: left;
    color: #040e28;
    font-family: Roboto;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 32px;
    border: 1px solid #dce1ea;
    border-radius: 3px;
    background-color: #ffffff;
    margin-bottom: 24px;
    color: #333333;
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px;
    padding-left: 10px;
  }
}
</style>
