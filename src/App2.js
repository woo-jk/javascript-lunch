import Filter from "./components2/Filter";
import Header from "./components2/Header";
import ModalContainer from "./components2/modal/ModalContainer";
import RestaurantList from "./components2/restaurantList/RestaurantList";

const dummyData = [
  {
    name: "라식당",
    category: "한식",
    distance: 5,
    description: "라식당입니다.",
  },
  {
    name: "다식당",
    category: "일식",
    distance: 10,
    description: "다식당입니다.",
  },
  {
    name: "나식당",
    category: "아시안",
    distance: 20,
    description: "나식당입니다.",
  },
  {
    name: "가식당",
    category: "아시안",
    distance: 20,
    description: "가식당입니다.",
  },
];

const $header = document.querySelector(".gnb");
const $filter = document.querySelector(".restaurant-filter-container");
const $restaurantList = document.querySelector(".restaurant-list-container");
const $modal = document.querySelector(".modal");

const header = new Header($header);
const filter = new Filter($filter);
const restaurantList = new RestaurantList($restaurantList);
const modal = new ModalContainer($modal);

restaurantList.renderList(dummyData);
header.setAddButtonEventListner(() => {
  modal.setAddRestaurantForm(restaurantList);
  modal.toggle();
});
