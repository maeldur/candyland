import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders props.election when passed", () => {
    const election = "new message";
    const wrapper = shallowMount(Header, {
      propsData: { election },
      stubs: ["router-link"]
    });
    expect(wrapper.text()).to.include(election);
  });

  it("renders props.candidate when passed", () => {
    const candidate = {
      displayName: "evan mcmullin"
    };
    const wrapper = shallowMount(Header, {
      propsData: { candidate },
      stubs: ["router-link"]
    });
    expect(wrapper.text()).to.include(candidate.displayName);
  });
});
