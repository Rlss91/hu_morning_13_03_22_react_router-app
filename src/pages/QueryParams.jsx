import { useLocation } from "react-router-dom";

const QueryParams = () => {
  const location = useLocation();
  const qParams = new URLSearchParams(location.search);
  console.log(qParams.get("key2"));
  return <h1>QParams</h1>;
};

export default QueryParams;
