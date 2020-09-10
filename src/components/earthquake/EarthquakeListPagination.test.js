/* eslint-disable no-unused-expressions */
import setupTest from "../../setupTests";
import enzyme, { mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { EarthquakeListPagination } from "../";

enzyme.configure({ adapter: new Adapter() });

describe("EarthQuakeListPagination", () => {
  it("is passed correct prop values", () => {
    const wrapper = mount(
      <EarthquakeListPagination
        totalPosts={10}
        postsPerPage={2}
        handleChange={() => {
          console.log("foo");
        }}
        page={1}
      />
    );

    expect(wrapper.props().totalPosts).toEqual(10);
    expect(wrapper.props().postsPerPage).toEqual(2);
    expect(wrapper.props().page).toEqual(1);
    expect(wrapper.props().handleChange).toBeDefined();
  });
});
