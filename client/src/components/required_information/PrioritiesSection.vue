<template>
  <SectionBase name="Priorities" ref="sectionBase" :expand-by-default="expandByDefault">
    <div slot="requirements" class="requirements">
      A brief description of one of the <strong>candidates top priorities</strong> if elected.<br>
      Descriptions can range from <strong>one word to two sentences</strong>. 
    </div>
    <div slot="fields" class="priority" v-for="index in [0,1,2]" :key="index" :class="{'has-error': showValidationErrors && validationErrors[index]}"> 
      <div class="label">Priority {{ index + 1 }} <span class="error">{{ validationErrors[index] }}</span></div>
      <input type="text" v-model.trim="priorities[index]" />
    </div>
    <div slot="actions">
      <Button class="next-button" title="Next" @click="onNextClick" />
    </div>
  </SectionBase>
</template>

<script>
import lodash from "lodash";
import sectionMixin from "@/mixins/section.js";
import Button from "@/components/Button.vue";

export default {
  name: "PrioritiesInputSection",
  components: { Button },
  mixins: [sectionMixin],
  props: ["value"],
  data: function() {
    return {
      priorities: lodash.clone(this.value || []),
      showValidationErrors: false
    };
  },
  computed: {
    validationErrors() {
      var errors = [];
      for (var i = 0; i < 3; i++) {
        var priority = this.priorities[i];
        var errorIfAny = null;
        if (!priority || priority.length === 0) {
          errorIfAny = "text cannot be empty";
        } else if (priority.length > 150) {
          errorIfAny = "text is too long";
        }
        errors.push(errorIfAny);
      }
      return errors;
    },
    inputsAreValid() {
      var isValid = true;
      this.validationErrors.forEach(error => {
        if (error) {
          isValid = false;
        }
      });
      return isValid;
    }
  },
  watch: {
    priorities: function() {
      this.$emit("input", this.priorities);
    }
  },
  methods: {
    onNextClick() {
      if (!this.inputsAreValid) {
        this.showValidationErrors = true;
        return;
      }
      this.$emit("next");
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
  span.error {
    display: none;
  }
  &.has-error {
    input {
      border-color: red;
    }
    span.error {
      display: inline;
      color: red;
    }
  }
}
</style>
