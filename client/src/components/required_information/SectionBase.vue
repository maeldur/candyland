<template>
  <div class="section">
    <div class="header" @click="isExpanded = !isExpanded">
      <div class="name">{{ name }}</div>
    </div>
    <div class="body" v-if="isExpanded">
      <div class="requirements">
        <slot name="requirements">
        </slot>
      </div>
      <div class="fields">
        <slot name="fields"></slot>
      </div>
      <div class="actions">
        <slot name="actions">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionBase",
  props: ["name", "expandByDefault"],
  data: function() {
    return {
      isExpanded: this.expandByDefault || false
    };
  },
  methods: {
    expand() {
      this.isExpanded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
div.section {
  div.header {
    cursor: pointer;
    background-color: #006cab;
    color: white;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    padding-left: 35px;
    padding-bottom: 8px;
    padding-top: 8px;
  }
  div.body {
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    div.actions {
      align-self: flex-end;
    }
  }
  margin-bottom: 24px;
}
</style>
