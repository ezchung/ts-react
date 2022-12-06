import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import Box from "./Box";

const addData = {
    id: "100",
    width: 125,
    height: 75,
    backgroundColor: "purple"
}

const mockRemove = jest.fn();
describe('BoxList', function(){

    const boxList = <BoxList />
    const testBox = <Box id='1' height={1} width={1} backgroundColor='blue' remove={mockRemove} />;

    it('renders without crashing', function () {
        render(boxList);
    });

    it('matches snapshot', function () {
        const { container } = render(boxList);
        expect(container).toMatchSnapshot();
    });

    it('tests ', function () {
        const { container } = render(boxList);
        
        //set the state of boxes to new box state. 
        //console.log(BoxList.add(addData), "<----------- boxlist");

        //simulate a state change and then check if DOM has been updated
        
    })
})