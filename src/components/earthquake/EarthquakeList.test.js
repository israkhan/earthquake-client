/* eslint-disable no-unused-expressions */
import setupTest from "../../setupTests";
import React from "react";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

import { EarthquakeList, EarthquakeListPagination, EarthquakeItem } from "../";

describe("EarthquakeList", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ earthquakes: [{ id: 1 }] });
  });

  it("renders without crashing given the required props", () => {
    let wrapper = shallow(<EarthquakeList store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("does not render EarthquakeListPagination when earthquakes don't exits", () => {
    const wrapper = shallow(<EarthquakeList store={store} />);
    expect(wrapper.contains(<EarthquakeListPagination />)).toEqual(false);
  });

  it("contains the same number of EarthquakeItem components as earthquakes", () => {
    const wrapper = shallow(<EarthquakeList store={store} />);

    expect(wrapper.find(<EarthquakeItem />)).toHaveLength(0);
  });
});
