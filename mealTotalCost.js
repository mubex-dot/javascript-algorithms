// Given the meal price (base cost of a meal), tip percent
// (the percentage of the meal price being added as tip), and tax percent
// (the percentage of the meal price being added as tax) for a meal, find and print
// the meal's total cost. Round the result to the nearest integer.

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip_cost = meal_cost * (tip_percent / 100);
  const tax_cost = meal_cost * (tax_percent / 100);
  const totalCost = meal_cost + tip_cost + tax_cost;
  console.log(Math.round(totalCost));
}
solve(10.25, 17, 5);
