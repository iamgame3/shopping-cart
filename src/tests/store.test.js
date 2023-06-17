/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "../routeSwitch";

describe("Store component", () => {
  it("adds an item", async () => {
    render(<RouteSwitch />);
    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByText("Store"));
    });
    await user.click(screen.getByTestId("test-input"));
    await user.keyboard("1");
    await act(async () => {
      await user.click(screen.getByTestId("test-button"));
    });

    expect(screen.getByTestId("item-count").textContent).toEqual("1");
  });

  it("adds a max of 10 items", async () => {
    render(<RouteSwitch />);
    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByText("Store"));
    });
    await user.click(screen.getByTestId("test-input"));
    await user.keyboard("100");
    await act(async () => {
      await user.click(screen.getByTestId("test-button"));
    });

    expect(screen.getByTestId("item-count").textContent).toEqual("10");
  });

  it("doesn't add negative numbers", async () => {
    render(<RouteSwitch />);
    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByText("Store"));
    });
    await user.click(screen.getByTestId("test-input"));
    await user.keyboard("-1");
    await act(async () => {
      await user.click(screen.getByTestId("test-button"));
    });

    expect(screen.getByTestId("item-count").textContent).toEqual("0");
  });
});
