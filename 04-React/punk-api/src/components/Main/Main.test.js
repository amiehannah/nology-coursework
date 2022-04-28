import React from "react";
import Main from "./Main";
import {shallow} from 'enzyme';


describe("Main Tests", () => {
    let component;
  
    beforeEach(() => {
      component = shallow(<Main />);
    })
    it("Should render", () => {
      expect(component).toBeTruthy();
    })
  })