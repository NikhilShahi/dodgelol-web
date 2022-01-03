import { useEffect, useState } from "react";
import { ApiState, ApiResult } from "./types";

export const useApi = (url: string): ApiResult => {
  const [result, setResult] = useState({
    state: ApiState.LOADING,
    error: "",
    status: 0,
    data: undefined,
  });

  useEffect(() => {
    setResult({
      state: ApiState.LOADING,
      error: "",
      status: 0,
      data: undefined,
    });
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult({
          state: ApiState.SUCCESS,
          error: "",
          status: response.status,
          data,
        });
      } catch (e) {
        setResult({
          state: ApiState.ERROR,
          error: "Fetch Failed",
          status: 0,
          data: undefined,
        });
      }
    };
    getData();
  }, [url]);

  return result;
};
