import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./routes/Router";

const queryClient = new QueryClient();

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
}
