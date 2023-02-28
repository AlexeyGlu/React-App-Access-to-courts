import HomePage from '../pages/HomePage';
import ChooseInstance from '../pages/ChooseInstance';
import ListOfJudges from '../pages/ListOfJudges';
import ErrorPage from '../pages/ErrorPage';

let routeConfig = [
  {
    path: "/",
    element: HomePage
  },
  {
    path: "/instance",
    element: ChooseInstance
  },
  {
    path: "/judges",
    element: ListOfJudges
  },
  {
    path: "*",
    element: ErrorPage
  }
];

export default routeConfig;