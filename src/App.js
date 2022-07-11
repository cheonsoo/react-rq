import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import "./styles.css";

import User from "./User";
import { getList } from "./store";

const Example = () => {
  const { data, error, isLoading, isFetching } = getList();
  // const { data, error, isLoading, isFetching } = useQuery("get-list", store.list);
  // const { data, error, isLoading, isFetching } = useQuery("get-list", () => {
  //   const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";
  //   return axios.get(url).then((res) => {
  //     console.log(res.data.results);
  //     return res.data.results;
  //   });
  // });

  if (isLoading) {
    console.log("loading ...");
  }
  if (isFetching) {
    console.log("fetching ...");
  }
  if (error) {
    console.log("error ...");
  }

  return (
    <div>
      <ul>{data && data.map((item, idx) => <li key={idx}>{item.name}</li>)}</ul>
    </div>
  );
};

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Example />
        <br />
        ================================
        <User />
      </QueryClientProvider>
    </div>
  );
}

export default App;
