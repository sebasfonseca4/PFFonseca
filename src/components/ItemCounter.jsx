import { useState } from "react";

const ItemCounter = ({ valueInitial, stock, addItem }) => {
  const [count, setCount] = useState(valueInitial);

  const handleDecreaseCount = () => {
    if (count > valueInitial) {
      setCount(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAdd = () => {
    addItem(count);
    setCount(valueInitial);
  }

  return (
    <div>
      <div className="col-6">
        <div className="row align-items-center">
          <div className="col-4">
            <button
              className="w-100 fs-4 btn btn-danger fw-bolder"
              onClick={handleDecreaseCount}
            >
              -
            </button>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <span className="text-center fw-bolder fs-4">Unids {count}</span>
          </div>
          <div className="col-4">
            <button
              className="w-100 fs-4 btn btn-danger fw-bolder"
              onClick={handleIncreaseCount}
            >
              +
            </button>
          </div>
        </div>
        <div>
            <button className="btn btn-primary mt-3" onClick={handleAdd}>
                Comprar ahora!
            </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCounter;
