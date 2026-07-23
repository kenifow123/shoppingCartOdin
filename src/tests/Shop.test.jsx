import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";
import { MemoryRouter } from "react-router";
import "./setup.js"
import Shop from "../components/Shop.jsx"
import { useOutletContext } from "react-router"

vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");

    return {...actual,
    useOutletContext: vi.fn()}
})

function renderShop() {
    return render(
        <Shop />
    );
}

describe("Shop component", () => {
    it("renders Shop page correctly", () => {
        useOutletContext.mockReturnValue({
            items : [
                {
                    name: "computer",
                    img: "./assets/computer.jpg"
                },
                {
                    name: "pen",
                    img: "./assets/pen.png",
                }
        ]});
        const { container } = renderShop();

        // expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
        expect(container.querySelector(".card")).toBeInTheDocument();
    })
});