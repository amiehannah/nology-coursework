import React from "react";
import NavBar from "./NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { shallow } from "enzyme";
import beerData from "../../data/beers";

describe("NavBar Tests", () => {
  let component;
  let searchText;
  let setSearchText;

  beforeEach(() => {
    component = shallow(<NavBar />);
  });
  it("Should render", () => {
    expect(component).toBeTruthy();
  });

  it("Should be hidden by default", () => {
    const element = component.find(".nav");
    expect(element.hasClass("navHidden")).toBe(true);
  });

  it("Should render it's child components", () => {
    expect(
      component.containsMatchingElement(
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      )
    ).to.equal(true);
  });

  // it("Should toggle NavBar component open and close based on change in state", () => {
  //   expect(component.find(".nav").hasClass("navHidden")).toBe(true);
  //   component.find(".nav").simulate("click");
  //   expect(component.find(".nav").hasClass("navHidden")).toBe(false);
  //   // component.find(".nav").simulate("click");
  //   // expect(component.find(".nav").hasClass("navHidden")).toBe(true);
  // })
});
