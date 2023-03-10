import "./index.css";
import RestaurantListManager from "../../../domain/RestaurantListManager";
import { $ } from "../../../util/dom";
import LocalStorage from "../../../util/LocalStorage";
import RestaurantItem from "../RestaurantItem";

class RestaurantList {
  $target;
  modal;
  restaurantListManager;

  constructor($target, modal) {
    this.$target = $target;
    this.modal = modal;

    const localData = LocalStorage.getData("list");
    this.restaurantListManager = new RestaurantListManager(localData);

    this.renderAllList();
  }

  template() {
    return `
      <ul class="restaurant-list">
      </ul>
    `;
  }

  render(restaurantList) {
    this.$target.innerHTML = this.template();
    const $restaurantList = this.$target.querySelector(".restaurant-list");

    restaurantList.forEach((restaurantInfo) => {
      new RestaurantItem($restaurantList, restaurantInfo, this);
    });
  }

  renderAllList() {
    const allList = this.restaurantListManager.getRestaurantList();

    this.render(allList);
  }

  renderFilteredList(category, sortingWay) {
    const filteredList = this.restaurantListManager.getRestaurantList(category, sortingWay);

    this.render(filteredList);
  }

  renderFavoriteList() {
    const favoriteList = this.restaurantListManager.getFavoriteList();

    this.render(favoriteList);
  }

  renderAfterDataChange() {
    const selectedTab = $('input[name="tab"]:checked').value;

    if (selectedTab === "favorite") {
      this.renderFavoriteList();
      return;
    }

    if (selectedTab === "all") {
      const selectedCategory = $("#category-filter").value;
      const selectedSortingWay = $("#sorting-filter").value;

      this.renderFilteredList(selectedCategory, selectedSortingWay);
    }
  }

  changeFavoriteState(restaurantId) {
    this.restaurantListManager.toggleFavoriteState(Number(restaurantId));
    LocalStorage.setData("list", this.restaurantListManager.getRestaurantList());

    this.renderAfterDataChange();
  }

  addRestaurant(newRestaurant) {
    this.restaurantListManager.addRestaurant({ ...newRestaurant, id: Date.now(), favorite: false });
    LocalStorage.setData("list", this.restaurantListManager.getRestaurantList());

    this.renderAfterDataChange();
  }

  removeRestaurant(restaurantId) {
    this.restaurantListManager.removeRestaurant(restaurantId);
    LocalStorage.setData("list", this.restaurantListManager.getRestaurantList());

    this.renderAfterDataChange();
  }
}

export default RestaurantList;
