import React from "react";
import Footer from "./Footer";
import {shallow} from 'enzyme';


describe("Footer Tests", () => {
    let component;
  
    beforeEach(() => {
      component = shallow(<Footer />);
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
  })