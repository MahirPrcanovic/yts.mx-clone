import { useEffect, useState } from "react";

const useFetch = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${props.url}${props.page}`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  return data;
};
export default useFetch;
