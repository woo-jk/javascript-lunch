import "./index.css";
import { CATEGORY, SORT } from "../../constants";

class Filter {
  $target;

  constructor($target) {
    this.$target = $target;
    this.render();
  }

  template() {
    return `
        <select name="category" id="category-filter" class="restaurant-filter">
          ${Object.values(CATEGORY).map((categoryValue) => `<option value=${categoryValue}>${categoryValue}</option>`)}
        </select>

        <select name="sorting" id="sorting-filter" class="restaurant-filter">
          ${Object.values(SORT).map((sortValue) => `<option value="${sortValue}"}>${sortValue}</option>`)}
        </select>
    `;
  }

  toggle() {
    this.$target.classList.toggle("filter--visible");
  }

  render() {
    this.$target.insertAdjacentHTML("beforeend", this.template());
  }

  setOnChangeSortEvent(restaurantList) {
    this.$target.querySelector("#sorting-filter").addEventListener("change", (event) => {
      const selectedSortingWay = event.target.value;
      const selectedCategory = this.$target.querySelector("#category-filter").value;

      restaurantList.renderFilteredList(selectedCategory, selectedSortingWay);
    });
  }

  setOnChangeCategoryEvent(restaurantList) {
    this.$target.querySelector("#category-filter").addEventListener("change", (event) => {
      const selectedCategory = event.target.value;
      const selectedSortingWay = this.$target.querySelector("#sorting-filter").value;

      restaurantList.renderFilteredList(selectedCategory, selectedSortingWay);
    });
  }

  setEvent(restaurantList) {
    this.setOnChangeCategoryEvent(restaurantList);
    this.setOnChangeSortEvent(restaurantList);
  }
}

export default Filter;
