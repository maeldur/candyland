import { expect } from "chai";
import { mount } from "@vue/test-utils";
import PrioritiesSection from "@/components/required_information/PrioritiesSection.vue";

describe("PrioritiesSection.vue", () => {
  it("renders empty message if a line is left empty", () => {
    const priorities = [];

    const wrapper = mount(PrioritiesSection, {
      propsData: { value: priorities, expandByDefault: true }
    });
    wrapper.find("div.next-button").trigger("click");
    expect(wrapper.text()).to.include("text cannot be empty");
  });
  it("renders line too long message if a line is too long", () => {
    const priorities = ["new message".repeat(20)];
    const wrapper = mount(PrioritiesSection, {
      propsData: { value: priorities, expandByDefault: true }
    });
    wrapper.find("div.next-button").trigger("click");
    expect(wrapper.text()).to.include("text is too long");
  });
});
