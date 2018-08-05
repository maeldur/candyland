import SectionBase from "@/components/required_information/SectionBase.vue";
export default {
  components: {
    SectionBase
  },
  props: ["expandByDefault"],
  methods: {
    expand() {
      if (this.$refs.sectionBase) {
        this.$refs.sectionBase.expand();
      }
    }
  }
};
