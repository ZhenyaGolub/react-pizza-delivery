import React, { useEffect } from "react";
import { Categories, SortPopup, PizzaBlock } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import PizzaLoading from "../Components/PizzaLoading";
import { array } from "prop-types";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "desc" },
];

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                addedCount={
                  cartItems[pizza.id] && cartItems[pizza.id].items.length
                }
                onAddPizza={handleAddPizzaToCart}
                key={pizza.id}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoading key={index} />)}
      </div>
    </div>
  );
}

export default Home;
