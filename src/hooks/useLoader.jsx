import { useState } from "react";

const useFetch = (status) => {
  const [loading, setLoading] = useState(true);
  setLoading(status);
  return loading;
};

export default useFetch;
