type Category = "한식" | "중식" | "일식" | "아시안" | "양식" | "기타";

type Distance = 5 | 10 | 15 | 20 | 30;

type SortingWay = "name" | "distance";

interface Restaurant {
  name: string;
  category: Category;
  distance: Distance;
  description?: string;
  url?: string;
}
