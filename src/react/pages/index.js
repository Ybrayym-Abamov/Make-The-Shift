import Home from "./Home";
import Detail from "./Detail";
import Category from "./Category";

export default {
  Home: { path: "/", component: Home },
  Detail: { path: "/details/:id", component: Detail },
  Category: { path: "/category", component: Category }
  
};
