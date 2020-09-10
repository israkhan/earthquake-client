/* eslint-disable no-unused-expressions */
import setupTest from "../../setupTests";
import enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { EarthquakeSearchScreen, SearchBar, EarthquakeList, Map } from "../";

enzyme.configure({ adapter: new Adapter() });

describe("EarthquakeSearchScreen", () => {
  it("contains SearchBar, EarthquakeList, and Map components", () => {
    const wrapper = shallow(<EarthquakeSearchScreen />);

    expect(wrapper.contains(<EarthquakeList />)).toEqual(true);
    expect(wrapper.contains(<SearchBar />)).toEqual(true);
    expect(wrapper.contains(<Map />)).toEqual(true);
  });
});
