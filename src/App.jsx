import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./assets/Components/Item";
import Logo from "./assets/Images/stall_logo.png";
import MilkTea from "./assets/Images/chiya-removebg-preview.png";
import BlackTea from "./assets/Images/black tea.png";
import LemonTea from "./assets/Images/lemonTea.png";
import Lemonade from "./assets/Images/lemonade.png";
import PeachIceTea from "./assets/Images/Peach-Ice-Tea.png";
import "./assets/CSS/index.css";

export default function App() {
  const [price, setprice] = useState();
  const [quantity, setQuantity] = useState();
  const [finalPrice, setFinalPrice] = useState("");
  const [name, setName] = useState("");
  const [method, setMethod] = useState("");
  const [color, setColor] = useState("white");
  const url = "http://localhost:8001/";

  const sendData = {
    name: name,
    price: price,
    quantity: quantity,
    FinalPrice: finalPrice,
    Method: method,
  };
  async function storeData() {
    const storing = await axios
      .post(url, { data: sendData })
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function calculate() {
    setFinalPrice(price * quantity);
    storeData();
  }

  useEffect(() => {
    storeData();
  }, []);

  return (
    <>
      <div className="logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="item-grid">
        <div
          onClick={() => {
            setName("Milk Tea");
            setprice(20);
          }}
        >
          <Item
            name={"Milk Tea"}
            price={20}
            img={MilkTea}
            quantity={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div
          onClick={() => {
            setName("Black Tea");
            setprice(15);
          }}
        >
          <Item
            name={"Black Tea"}
            price={15}
            img={BlackTea}
            quantity={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div
          onClick={() => {
            setName("Lemon Tea");
            setprice(20);
          }}
        >
          <Item
            name={"Lemon Tea"}
            price={20}
            img={LemonTea}
            quantity={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div
          onClick={() => {
            setName("Lemonade");
            setprice(35);
          }}
        >
          <Item
            name={"Lemonade"}
            price={35}
            img={Lemonade}
            quantity={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div
          onClick={() => {
            setName("Peach Ice Tea");
            setprice(50);
          }}
        >
          <Item
            name={"Peach Ice Tea"}
            price={50}
            img={PeachIceTea}
            quantity={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <label>Payment Method</label>
      </div>
      <br />
      <div>
        <select
          name="Payment Method"
          id="Payment Method"
          onChange={(e) => {
            setMethod(e.target.value);
          }}
        >
          <option value="Online">Online</option>
          <option value="Cash">Cash</option>
        </select>
      </div>
      <div></div>
      <button onClick={calculate}>Enter Data</button>
      <div>
        <label>Total Price: {finalPrice}</label>
      </div>
      {/* </form> */}
    </>
  );
}
