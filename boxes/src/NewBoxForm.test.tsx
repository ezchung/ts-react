import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';
import { Simulate } from "react-dom/test-utils";

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

    it('user can submit new Box', function () {
        const { container } = render(emptyForm);

        const button = container.querySelector('.NewBoxForm-addBtn') as HTMLElement;
        const heightField = container.querySelector('#newBox-height') as HTMLElement;
        const widthField = container.querySelector('#newBox-width') as HTMLElement;
        const backgroundColorField = container.querySelector('#newBox-backgroundColor') as HTMLElement;

        fireEvent.change(heightField, { target: { value: 100 } });
        fireEvent.change(widthField, { target: { value: 200 } });
        fireEvent.change(backgroundColorField, { target: { value: 'black' } });
        fireEvent.click(button);

        const newBox = container.querySelector('.Box-box') as HTMLElement;

        expect(mockCreateBox).toHaveBeenCalledTimes(1);

    });





});