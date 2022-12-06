import React from "react";
import { render, getByText } from "@testing-library/react";
import App from './App';


describe('App tests', function () {

  it('renders without crashing', function () {
    render(<App />);
  });

  it('matches snapshot', function () {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
  });

});
