import { useEffect, useState } from "react";
import { getRequest } from "libs/fetch";
import handleErrors from "libs/errors";

export const useFetch = ({ city, param }) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    errorInfo: null,
    status: "idle",
  });

  useEffect(() => {
    const controller = new AbortController();
    let subscription = true;
    setState({ data: null, error: null, error_display: null, status: "loading" });
    (async () => {
      try {
        const response = await getRequest(city, param);
        if (subscription) {
          setState({ data: response, error: null, error_display: null, status: response.status });
        }
      } catch (error) {       
        if (subscription) {
          const errorInfo = handleErrors(error.response);
          setState({ data: null, error: error, errorInfo, status: "error" });
        }
      }
    })();
    return () => {
      subscription = false;
      controller.abort();
    };
  }, [city, param]);
  return state;
};
