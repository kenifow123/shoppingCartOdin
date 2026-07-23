import {describe, it, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, useOutletContext} from "react-router";
import Cart from "../components/Cart";

vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");

    return {...actual,
        useOutletContext: vi.fn()}
})

describe("Cart Component", () => {

    useOutletContext.mockReturnValue({
        cartItems: [
            {
                name: "computer",
                img: "./assets/computer.jpg",
                value: 1
            },
            {
                name: "pen",
                img: "./assets/pen.png",
                value: 2
            }
        ]});

    render(<Cart/>);



    it("renders cart", () => {
        // expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
        expect(screen.getAllByText(/in cart:/i)[0]).toBeInTheDocument();
    })
})