const app = require('./addRoutes.js');
import { updateInventory, inputShipmentOrder } from "../utilities/3PLwarehouse";
import { updateRestockData } from "../utilities/amzRestock";
import { timeout } from "../utilities/timeout";
// import { getRankingsForAsinList } from "../utilities/amzRank";
// import { getReviewsReportByAsin } from "../utilities/amzReviews";
// import { getInventory } from "../utilities/CartRoverInventory";

(async () => {
  // inputShipmentOrder();
  await updateInventory()
  await timeout(30000);
  await updateRestockData();
})()

module.exports = app;

