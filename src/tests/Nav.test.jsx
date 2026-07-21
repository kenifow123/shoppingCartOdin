import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";
import { MemoryRouter } from "react-router";
// import Nav from "../components/Nav.jsx"
import "./setup.js"


function renderNav() {
    return render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
}

describe("Nav component", () => {
    it("renders nav bar", () => {
        renderNav();
        expect(screen.getByRole("heading").textContent).toMatch(/home/i);

        expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Cart" })).toBeInTheDocument();


    })

    it("clicking changes page", async () => {
        renderNav();

        const user = userEvent.setup();

        const home =  screen.getByRole("link", { name: "Home" });

        const shop = screen.getByRole("link", { name: "Shop" });
        const cart = screen.getByRole("link", { name: "Cart" });

        await user.click(shop);
        expect(screen.getByRole("heading"), { name: /shop/i}).toBeInTheDocument();

        await user.click(home);
        expect(screen.getByRole("heading"), { name: /home/i}).toBeInTheDocument();

        await user.click(cart);
        expect(screen.getByRole("heading"), { name: /cart/i}).toBeInTheDocument();


    })
});