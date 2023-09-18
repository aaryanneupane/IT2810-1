import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Header from "./Header"; 

describe ("Header", () => { //Here I would like to test that the buttons in header navigates correctly to the right pages.
    beforeEach(() => {
        render(<Header />);
    });

});
