import "./global.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Tab from "./components/Tab";
import RestaurantList from "./components/RestaurantList";
import { $ } from "./util/dom";

const header = new Header($(".gnb"));
const tab = new Tab($(".restaurant-tab-container"));
const filter = new Filter($(".restaurant-filter-container"));
const restaurantList = new RestaurantList($(".restaurant-list-container"));

header.setEvent(restaurantList);
filter.setEvent(restaurantList);
tab.setEvent(restaurantList);
