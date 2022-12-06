import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';


const mockCreateBox = jest.fn();


describe('Box', function () {

    const emptyForm = <NewBoxForm createBox={mockCreateBox} />;

    it('renders without crashing', function () {
        render(emptyForm);
    });

    it('matches snapshot', function () {
        const { container } = render(emptyForm);
        expect(container).toMatchSnapshot();
    });

    it('calls createBox on button click', function () {
        const { container } = render(emptyForm);
        const button = container.querySelector('.NewBoxForm-addBtn') as HTMLElement;
        fireEvent.click(button);
        expect(mockCreateBox).toHaveBeenCalledTimes(1);
    });

    it('user can update form', function () {
        const { container } = render(emptyForm);

        const button = container.querySelector('.NewBoxForm-addBtn') as HTMLElement;
        const heightField = container.querySelector('#newBox-height') as HTMLInputElement;
        const widthField = container.querySelector('#newBox-width') as HTMLInputElement;
        const backgroundColorField = container.querySelector('#newBox-backgroundColor') as HTMLInputElement;

        fireEvent.change(heightField, { target: { value: 100 } });
        fireEvent.change(widthField, { target: { value: 200 } });
        fireEvent.change(backgroundColorField, { target: { value: 'black' } });

        expect(heightField.value).toBe("100");
        expect(widthField.value).toBe("200");
        fireEvent.click(button);
        expect(mockCreateBox).toHaveBeenCalledTimes(1);
        expect(heightField.value).not.toBe("100");
    });


});

//const newBox = container.querySelector('.Box-box') as HTMLElement;