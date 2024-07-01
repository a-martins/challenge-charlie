import { render } from "@testing-library/react";
import RouterProvider from "../routes/Router";

test("renders app component", () => {
  const { container, getByRole } = render(<RouterProvider />);

  expect(getByRole("main")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
