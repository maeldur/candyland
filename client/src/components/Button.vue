<template>
  <div class="button" :class="{inverted, disabled}" @click="onClick($event)">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["title", "inverted", "disabled"],
  methods: {
    onClick(event) {
      if (this.disabled) {
        return;
      }
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss" scoped>
div.button {
  cursor: pointer;
  padding: 10px 36px;
  color: #006cab;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  border: 2px solid #006cab;
  border-radius: 4px;
  background-color: #ffffff;
  &.inverted {
    border-radius: 2px;
    background-color: #006cab;
    color: white;
  }
  &.disabled {
    color: lightgray;
    border-color: lightgray;
    cursor: auto;
  }
}
</style>
