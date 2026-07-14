// BACKEND/utils/seeder.js

const path = require("path");
const Fooditem = require("../models/foodItem");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const fooditems = require("../data/foodItem.json");

// Setting dotenv file
const envPath = path.join(__dirname, "..", "config", "config.env");
dotenv.config({ path: envPath });

connectDatabase();

const seedFooditems = async () => {
  try {
    await Fooditem.deleteMany(); //will delete all the fooditems
    console.log("FoodItems are deleted");
    await Fooditem.insertMany(fooditems);
    console.log("All FoodItems are added.");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedFooditems();
