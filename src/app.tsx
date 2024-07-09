import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserLocationProvider } from "./contexts/UserLocationProvider";
import Router from "./routes/Router";

const queryClient = new QueryClient();

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <UserLocationProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </UserLocationProvider>
      </React.StrictMode>
    );
  }
}
