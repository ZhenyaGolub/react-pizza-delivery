import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { name } from "file-loader";
import { useSelector } from "react-redux";
import Button from "./Button";

function PizzaBlock({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  category,
  rating,
  onAddPizza,
  addedCount,
}) {
  const typesOfPizza = ["тонкое", "традиционное"];
  const sizesOfPizza = [26, 30, 40];
  const [activeType, changeActiveType] = useState(types[0]);
  const [activeSize, changeActiveSize] = useState(0);

  const setActiveType = (index) => {
    changeActiveType(index);
  };

  const setActiveSize = (index) => {
    changeActiveSize(index);
  };

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: sizesOfPizza[activeSize],
      type: typesOfPizza[activeType],
    };
    onAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesOfPizza.map((type, index) => (
            <li
              key={type}
              onClick={() => setActiveType(index)}
              className={classNames({
                active: activeType === index,
                disabled: types.includes(index) === false,
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizesOfPizza.map((size, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: sizes.includes(size) === false,
              })}
              key={size}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={handleAddPizza} outline className="button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  sizes: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: "---",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
