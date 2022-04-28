import React from "react";
import FilterItem from "./FilterItem";
import {shallow} from 'enzyme';


describe("FilterItem Tests", () => {
    let component;
    let mockFn;
  
    beforeEach(() => {
        mockFn = jest.fn();
      component = shallow(<FilterItem beersWithHighABV={mockFn} setBeersWithHighABV={mockFn} />);
      // console.log(component.debug())
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
    // it("Should contain three checkboxes", () => {

    // })
    it("Should render the click event on the checkbox and run the function",() => {
        component.find("#highABV").simulate("click", {});
        // expect(component.find("#highABV").text()).
      
    // { target: { value: "User input" } });
    //   expect(mockFn).toHaveBeenCalled();
    })  

  })