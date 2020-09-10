/* eslint-disable no-unused-expressions */
import setupTest from "./../setupTests";
import enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Routes from "./Routes";

enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("contains Route component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Routes />)).toEqual(true);
  });
});
