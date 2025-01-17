import React from "react";
import '@testing-library/jest-dom';
import {LoginPage} from "../src/pages/LoginPage";
import {BrowserRouter} from "react-router-dom";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Provider} from "react-redux";
import {store} from "../src/redux/store";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginPage />
                </Provider>
            </BrowserRouter>
        );

        localStorage.clear();
        mockedUsedNavigate.mockReset();
    });

    test("should show an error message when the user enters invalid credentials", async () => {
        const component = screen.getByTestId('login');
        expect(component).toBeInTheDocument();

        await userEvent.type(screen.getByTestId("username"), "hello");
        await userEvent.type(screen.getByTestId("password"), "567");
        await userEvent.click(screen.getByTestId("login-btn"));

        const errorMessage = await screen.findByTestId('login-error-msg');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Invalid credentials. Try again.");
    });

    test("should navigate to the main page on successful login", async () => {
        await userEvent.type(screen.getByTestId("username"), "admin");
        await userEvent.type(screen.getByTestId("password"), "admin123");

        await userEvent.click(screen.getByTestId("login-btn"));

        const errorMessage = screen.queryByTestId('login-error-msg');
        expect(errorMessage).not.toBeInTheDocument();

        expect(mockedUsedNavigate).toHaveBeenCalledWith("/main");
    });
});
