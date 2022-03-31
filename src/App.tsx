import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { FormPage } from "./form";
import { UserList } from "./user-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Page 1</h1>
      <FormPage />
      <h1>Page 2</h1>
      <UserList />
    </QueryClientProvider>
  );
}

export default App;
