import React from "react";
import Header from "./Header";
import {shallow} from 'enzyme';

describe("Feedback Panel Tests", () => {
    let component;
  
    beforeEach(() => {
      component = shallow(<Header />);
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
    it('Should render an img logo', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("img").prop("src")).toEqual("Brewdog-Logo-Background-PNG-Image-1.png");
      });
    
  })