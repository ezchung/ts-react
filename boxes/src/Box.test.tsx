import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import Box from './Box';

const mockRemove = jest.fn();


describe('Box', function () {

    const testBox = <Box id='1' height={1} width={1} backgroundColor='blue' remove={mockRemove} />;


    it('renders without crashing', function () {
        render(testBox);
    });

    it('matches snapshot', function () {
        const { container } = render(testBox);
        expect(container).toMatchSnapshot();
    });

    it('calls remove on button click', function () {
        const { container } = render(testBox);
        const button = container.querySelector('.Box-removeBtn') as HTMLElement;
        fireEvent.click(button);
        expect(mockRemove).toHaveBeenCalledTimes(1);
    });


});