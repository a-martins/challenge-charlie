import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { WeatherProvider } from "./contexts/WeatherProvider";
import Router from "./routes/Router";

const queryClient = new QueryClient();

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
