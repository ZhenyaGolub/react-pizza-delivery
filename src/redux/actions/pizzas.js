import axios from "axios";

export const setLoaded = (val) => ({
  type: "SET_LOADED",
  payload: val,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=asc`
    )
    .then(({ data }) => dispatch(setPizzasList(data)));
};

export const setPizzasList = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
