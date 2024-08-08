export default function Item(props) {
  return (
    <>
      <div className="item">
        <div className="name">
          <label>{props.name}</label>
        </div>
        <div className="img">
          <img src={props.img} alt="" className="item-img" />
        </div>
        <div className="item-info">
          <label>Rs. {props.price}</label>
        </div>
        <div>
          <div className="item-info">
            <label>Quantity: </label>
            <input
              type="text"
              placeholder={0}
              onChange={props.quantity}
              className="quant"
            />
          </div>
        </div>
      </div>
    </>
  );
}
