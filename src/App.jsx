import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [price, setprice] = useState();
  const [quantity, setQuantity] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [name, setName] = useState("");
  const [method, setMethod] = useState("");
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
      {/* <form onSubmit={storeData}> */}
      <div>
        <label>Enter the item name:</label>
      </div>
      <div>
        <select
          name="itemNames"
          id="itemNames"
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <option value="Milk Tea">Milk Tea</option>
          <option value="Black Tea">Black Tea</option>
          <option value="lemon Tea">Lemon Tea</option>
          <option value="Lemonate">Lemonate</option>
          <option value="Peach Ice Tea">Peach Ice Tea</option>
        </select>
      </div>
      <div>
        <label>Enter the price of item:</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Enter the Quantity of Item:</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Quantity of Item"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Payment Method</label>
      </div>
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
