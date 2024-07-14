import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { WeatherProvider } from "./contexts/WeatherProvider";
import queryClient from "./queries/QueryClient";
import Router from "./routes/Router";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <WeatherProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </WeatherProvider>
      </React.StrictMode>
    );
  }
}
