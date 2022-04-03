import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import CardComponent from "../components/CardComponent/CardComponent";

const CardsPanelPage = () => {
  const location = useLocation();
  const [cardsArr, setCardsArr] = useState([]);
  const [objID, setObjID] = useState("");
  console.log("location.pathname", location.pathname);
  useEffect(() => {
    const objIdFromStorage = localStorage.getItem("tokenKey");
    const decoded = jwt_decode(objIdFromStorage);
    console.log("decoded", decoded);
    setObjID(decoded._id);
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {cardsArr.map((item) => {
        return (
          <CardComponent
            id={item._id}
            key={item._id}
            name={item.name}
            description={item.description}
            phone={item.phone}
            address={item.address}
            image={item.image}
            userIDCard={item.userID}
            userIDLoggedIn={objID}
          />
        );
      })}
    </div>
  );
};

export default CardsPanelPage;
