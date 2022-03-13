import { useLocation } from "react-router-dom";

const CardsPanelPage = () => {
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  return <h1>CardsPanel Page</h1>;
};

export default CardsPanelPage;
