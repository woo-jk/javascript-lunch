import Restaurant from "./Restaurant";

class RestaurantList {
  $target;

  constructor($target) {
    this.$target = $target;
  }

  template() {
    return `
      <ul class="restaurant-list">
      </ul>
    `;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  renderList(restaurantList) {
    this.render();
    const $restaurantList = this.$target.querySelector(".restaurant-list");

    restaurantList.forEach((restaurantInfo) => {
      new Restaurant($restaurantList, restaurantInfo);
    });
  }
}

export default RestaurantList;
