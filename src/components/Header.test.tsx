import '@testing-library/jest-native/extend-expect';
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import Header from "./Header";
import { ReactElement } from "react";

const AllProviders = ({ children }: { children: ReactElement }) => (
  <NativeBaseProvider
    initialWindowMetrics={{
      frame: {
        width: 320,
        height: 640,
        x: 0,
        y: 0,
      },
      insets: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
    }}
  >
    {children}
  </NativeBaseProvider>
);

test("renders two icons", () => {
  const container = render(<Header bgColor="" />, {wrapper: AllProviders});
  const icon1 = container.getByTestId("icon1")
  const icon2 = container.getByTestId("icon2")
  expect(icon1).toBeOnTheScreen()
  expect(icon2).toBeOnTheScreen()
  container.debug();
});
