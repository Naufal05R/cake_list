import { db } from ".";

async function main() {
  await db.cake.createMany({
    data: [
      {
        name: "Apple Cinnamon Cake",
        category: "Gift",
        price: 42000,
      },
      {
        name: "Apple Cinnamon Muffins",
        category: "Gift",
        price: 32000,
      },
      {
        name: "Apple Cinnamon Muffins",
        category: "Gift",
        price: 32000,
      },
      {
        name: "Apple Cinnamon Muffins with Walnuts and Sea Salt",
        category: "Gift",
        price: 36000,
      },
      {
        name: "Apple Cinnamon Muffins with Walnuts, Sea Salt, Caramel Sauce, Whipped Cream, Chocolate Chips, and Hazelnuts",
        category: "Gift",
        price: 46000,
      },
      {
        name: "Apple Cinnamon Muffins with Walnuts, Sea Salt, Caramel Sauce, Whipped Cream, and Chocolate Chips",
        category: "Gift",
        price: 44000,
      },
      {
        name: "Apple Cinnamon Muffins with Walnuts, Sea Salt, Caramel Sauce, and Whipped Cream",
        category: "Gift",
        price: 42000,
      },
      {
        name: "Apple Cinnamon Muffins with Walnuts, Sea Salt, and Caramel Sauce",
        category: "Gift",
        price: 40000,
      },
      {
        name: "Apple Crisp with Apples, Oatmeal, Brown Sugar, and Cinnamon",
        category: "Savoury",
        price: 52000,
      },
      {
        name: "Banana Bread with Walnuts",
        category: "Sweet",
        price: 40000,
      },
      {
        name: "Banana Bread with Walnuts and Honey",
        category: "Sweet",
        price: 42000,
      },
      {
        name: "Banana Bread with Walnuts, Honey, Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, and Hazelnuts",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Banana Bread with Walnuts, Honey, Fresh Fruit, Whipped Cream, Chocolate Chips, and Caramel Sauce",
        category: "Sweet",
        price: 56000,
      },
      {
        name: "Banana Bread with Walnuts, Honey, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Banana Bread with Walnuts, Honey, Fresh Fruit, and Whipped Cream",
        category: "Sweet",
        price: 52000,
      },
      {
        name: "Banana Bread with Walnuts, Honey, and Fresh Fruit",
        category: "Sweet",
        price: 48000,
      },
      {
        name: "Banana Pudding with Nilla Wafers, Banana Slices, and Whipped Cream",
        category: "Sweet",
        price: 44000,
      },
      {
        name: "Banana Split Cake",
        category: "Sweet",
        price: 45000,
      },
      {
        name: "Caramel Apples with Granny Smith Apples, Caramel Sauce, and Chopped Nuts",
        category: "Sweet",
        price: 80000,
      },
      {
        name: "Caramel Macchiato Muffins with Espresso Powder, Caramel Sauce, and Whipped Cream",
        category: "Savoury",
        price: 100000,
      },
      {
        name: "Carrot Cake Cupcakes",
        category: "Gift",
        price: 36000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting",
        category: "Gift",
        price: 40000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting and Fresh Fruit",
        category: "Gift",
        price: 44000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, and Hazelnuts",
        category: "Gift",
        price: 54000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, Chocolate Chips, and Caramel Sauce",
        category: "Gift",
        price: 52000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Gift",
        price: 50000,
      },
      {
        name: "Carrot Cake Cupcakes with Cream Cheese Frosting, Fresh Fruit, and Whipped Cream",
        category: "Gift",
        price: 48000,
      },
      {
        name: "Carrot Cake with Cream Cheese Frosting, Walnuts, Raisins, and Spices",
        category: "Sweet",
        price: 48000,
      },
      {
        name: "Carrot Cake with Walnuts",
        category: "Gift",
        price: 38000,
      },
      {
        name: "Chocolate Chip Cookie Dough Balls with Peanut Butter Chips and Sea Salt",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Chocolate Chip Cookie Dough Balls with Peanut Butter Chips and Sea Salt",
        category: "Sweet",
        price: 98000,
      },
      {
        name: "Chocolate Chip Cookies",
        category: "Sweet",
        price: 38000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts and Sea Salt",
        category: "Sweet",
        price: 44000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts, Sea Salt, Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, and Hazelnuts",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts, Sea Salt, Fresh Fruit, Whipped Cream, Chocolate Chips, and Caramel Sauce",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts, Sea Salt, Fresh Fruit, Whipped Cream, and Caramel Sauce",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts, Sea Salt, Fresh Fruit, and Whipped Cream",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Chocolate Chip Cookies with Walnuts, Sea Salt, and Fresh Fruit",
        category: "Sweet",
        price: 50000,
      },
      {
        name: "Chocolate Dipped Shortbread Cookies with Dark Chocolate and Powdered Sugar",
        category: "Sweet",
        price: 76000,
      },
      {
        name: "Chocolate Fudge Cake",
        category: "Sweet",
        price: 48000,
      },
      {
        name: "Cinnamon Rolls with Cinnamon, Sugar, and Cream Cheese Frosting",
        category: "Savoury",
        price: 56000,
      },
      {
        name: "Cinnamon Sugar Donut Holes with Cinnamon, Sugar, and Maple Glaze",
        category: "Savoury",
        price: 108000,
      },
      {
        name: "Cinnamon Sugar Donuts with Cinnamon, Sugar, and Maple Glaze",
        category: "Savoury",
        price: 86000,
      },
      {
        name: "Coffee Crème Brûlée Cake",
        category: "Traditional",
        price: 55000,
      },
      {
        name: "Coffee Crème Brûlée Muffins",
        category: "Traditional",
        price: 48000,
      },
      {
        name: "Coffee Crème Brûlée Muffins",
        category: "Traditional",
        price: 48000,
      },
      {
        name: "Coffee Crème Brûlée Muffins with Caramel Sauce and Fresh Fruit",
        category: "Traditional",
        price: 54000,
      },
      {
        name: "Coffee Crème Brûlée Muffins with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Traditional",
        price: 64000,
      },
      {
        name: "Coffee Crème Brûlée Muffins with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Traditional",
        price: 62000,
      },
      {
        name: "Coffee Crème Brûlée Muffins with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Traditional",
        price: 60000,
      },
      {
        name: "Coffee Crème Brûlée Muffins with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Traditional",
        price: 56000,
      },
      {
        name: "Cranberry Orange Muffins with Cranberries, Orange Zest, and Whipped Cream",
        category: "Savoury",
        price: 92000,
      },
      {
        name: "Cranberry Orange Scones with Cranberries, Orange Zest, and Whipped Cream",
        category: "Savoury",
        price: 70000,
      },
      {
        name: "Cream Cheese Brownies",
        category: "Sweet",
        price: 42000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit and Whipped Cream",
        category: "Sweet",
        price: 52000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, Sea Salt, Walnuts, and Hazelnuts",
        category: "Sweet",
        price: 66000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, Sea Salt, and Walnuts",
        category: "Sweet",
        price: 64000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, and Sea Salt",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit, Whipped Cream, Chocolate Chips, and Caramel Sauce",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "Cream Cheese Brownies with Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Cream Cheese Pound Cake",
        category: "Gift",
        price: 44000,
      },
      {
        name: "Eggnog Cheesecake",
        category: "Sweet",
        price: 46000,
      },
      {
        name: "Eggnog Cheesecake Bars",
        category: "Sweet",
        price: 46000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce",
        category: "Sweet",
        price: 50000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Sweet",
        price: 68000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Sweet",
        price: 66000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Sweet",
        price: 64000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Eggnog Cheesecake Bars with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "Flan Cake with Caramel Sauce",
        category: "Traditional",
        price: 54000,
      },
      {
        name: "Flan Cake with Caramel Sauce and Fresh Fruit",
        category: "Traditional",
        price: 56000,
      },
      {
        name: "Flan Cake with Caramel Sauce and Fresh Fruit",
        category: "Traditional",
        price: 56000,
      },
      {
        name: "Flan Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Traditional",
        price: 70000,
      },
      {
        name: "Flan Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Traditional",
        price: 68000,
      },
      {
        name: "Flan Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Traditional",
        price: 66000,
      },
      {
        name: "Flan Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Traditional",
        price: 64000,
      },
      {
        name: "Flan Cake with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Traditional",
        price: 64000,
      },
      {
        name: "French Vanilla Bean Cake",
        category: "Gift",
        price: 43000,
      },
      {
        name: "French Vanilla Bean Cream Puffs",
        category: "Gift",
        price: 45000,
      },
      {
        name: "French Vanilla Bean Cream Puffs",
        category: "Gift",
        price: 45000,
      },
      {
        name: "French Vanilla Bean Cream Puffs with Fresh Fruit and Whipped Cream",
        category: "Gift",
        price: 54000,
      },
      {
        name: "French Vanilla Bean Crème Brûlée Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Traditional",
        price: 72000,
      },
      {
        name: "French Vanilla Bean Crème Brûlée Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Traditional",
        price: 70000,
      },
      {
        name: "French Vanilla Bean Crème Brûlée Cake with Caramel Sauce, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Traditional",
        price: 68000,
      },
      {
        name: "French Vanilla Bean Crème Brûlée Cake with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Traditional",
        price: 66000,
      },
      {
        name: "Ginger Pear Upside-Down Cake",
        category: "Savoury",
        price: 51000,
      },
      {
        name: "Ginger Pear Upside-Down Cake with Caramel Sauce",
        category: "Savoury",
        price: 52000,
      },
      {
        name: "Ginger Pear Upside-Down Cake with Caramel Sauce",
        category: "Savoury",
        price: 52000,
      },
      {
        name: "Ginger Pear Upside-Down Cake with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Savoury",
        price: 62000,
      },
      {
        name: "Gooey Butter Cake with Browned Butter, Sugar, and Cream Cheese Frosting",
        category: "Sweet",
        price: 68000,
      },
      {
        name: "Honey and Oatmeal Cake",
        category: "Gift",
        price: 41000,
      },
      {
        name: "Honey and Oatmeal Cookies",
        category: "Gift",
        price: 34000,
      },
      {
        name: "Honey and Oatmeal Cookies with Walnuts and Sea Salt",
        category: "Gift",
        price: 40000,
      },
      {
        name: "Honey and Oatmeal Cookies with Walnuts, Sea Salt, and Fresh Fruit",
        category: "Gift",
        price: 50000,
      },
      {
        name: "Irish Cream Cheesecake",
        category: "Sweet",
        price: 47000,
      },
      {
        name: "Irish Cream Cheesecake Brownies",
        category: "Sweet",
        price: 48000,
      },
      {
        name: "Irish Cream Cheesecake Brownies with Fresh Fruit and Whipped Cream",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Jelly Roll Cake with Buttercream Frosting",
        category: "Gift",
        price: 45000,
      },
      {
        name: "Jelly Roll Cake with Buttercream Frosting and Fresh Flowers",
        category: "Gift",
        price: 50000,
      },
      {
        name: "Jelly Roll Cake with Buttercream Frosting and Fresh Fruit",
        category: "Gift",
        price: 56000,
      },
      {
        name: "Kahlúa Crème Brûlée Cake",
        category: "Traditional",
        price: 53000,
      },
      {
        name: "Kahlúa Crème Brûlée Cake with Espresso and Mascarpone Cheese",
        category: "Traditional",
        price: 58000,
      },
      {
        name: "Key Lime Bars with Key Lime Juice, Condensed Milk, and Whipped Cream",
        category: "Sweet",
        price: 88000,
      },
      {
        name: "Key Lime Pie Bars with Key Lime Juice, Condensed Milk, and Whipped Cream",
        category: "Sweet",
        price: 110000,
      },
      {
        name: "Key Lime Pie with Key Lime Juice, Condensed Milk, and Whipped Cream",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Lemon Bars with Lemon Curd, Shortbread Crust, and Powdered Sugar",
        category: "Sweet",
        price: 72000,
      },
      {
        name: "Lemon Blueberry Muffins",
        category: "Gift",
        price: 38000,
      },
      {
        name: "Lemon Blueberry Poppy Seed Cake",
        category: "Savoury",
        price: 49000,
      },
      {
        name: "Lemon Poppy Seed Cake with Lemon Curd, Poppy Seeds, and Powdered Sugar",
        category: "Sweet",
        price: 94000,
      },
      {
        name: "Maple Bacon Donuts with Maple Glaze, Crispy Bacon, and Powdered Sugar",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Mocha Brownies with Instant Coffee, Dark Chocolate Chips, and Whipped Cream",
        category: "Sweet",
        price: 84000,
      },
      {
        name: "Mocha Coffee Cake with Instant Coffee, Dark Chocolate Chips, and Whipped Cream",
        category: "Sweet",
        price: 106000,
      },
      {
        name: "Mocha Mousse Cake",
        category: "Gift",
        price: 44000,
      },
      {
        name: "Nutella Chocolate Chip Cake",
        category: "Sweet",
        price: 46000,
      },
      {
        name: "Orange Creamsicle Cake",
        category: "Gift",
        price: 42000,
      },
      {
        name: "Peanut Butter Banana Bread with Peanut Butter, Bananas, and Honey",
        category: "Savoury",
        price: 96000,
      },
      {
        name: "Peanut Butter Cups with Peanut Butter, Chocolate Chips, and Sea Salt",
        category: "Sweet",
        price: 74000,
      },
      {
        name: "Pecan Pie Bars with Caramel Sauce",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Pecan Pie Bars with Caramel Sauce and Fresh Fruit",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Pecan Pie Bars with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Sweet",
        price: 64000,
      },
      {
        name: "Pecan Pie Bars with Pecans, Sugar, and Maple Syrup",
        category: "Savoury",
        price: 90000,
      },
      {
        name: "Pecan Pie Cake",
        category: "Sweet",
        price: 50000,
      },
      {
        name: "Pecan Pie with Caramel Sauce, Maple Syrup, and Pecans",
        category: "Sweet",
        price: 40000,
      },
      {
        name: "Pecan Praline Cake with Pecans, Sugar, and Corn Syrup",
        category: "Savoury",
        price: 104000,
      },
      {
        name: "Pecan Pralines with Pecans, Sugar, and Corn Syrup",
        category: "Sweet",
        price: 64000,
      },
      {
        name: "Pineapple Upside-Down Cake with Pineapple Rings, Brown Sugar, and Cherries",
        category: "Savoury",
        price: 82000,
      },
      {
        name: "Pumpkin Pie with Pumpkin Puree, Sweetened Condensed Milk, and Whipped Cream",
        category: "Sweet",
        price: 50000,
      },
      {
        name: "Pumpkin Spice Cake",
        category: "Savoury",
        price: 48000,
      },
      {
        name: "Pumpkin Spice Cake with Cream Cheese Frosting and Fresh Fruit",
        category: "Savoury",
        price: 56000,
      },
      {
        name: "Pumpkin Spice Cake with Cream Cheese Frosting and Fresh Fruit",
        category: "Savoury",
        price: 60000,
      },
      {
        name: "Pumpkin Spice Cake with Cream Cheese Frosting, Fresh Fruit, and Whipped Cream",
        category: "Savoury",
        price: 66000,
      },
      {
        name: "Raspberry Filled Donuts with Fresh Raspberries, Sugar, and Maple Glaze",
        category: "Sweet",
        price: 102000,
      },
      {
        name: "Raspberry Sorbet with Fresh Raspberries, Sugar, and Lemon Juice",
        category: "Savoury",
        price: 78000,
      },
      {
        name: "Raspberry Tiramisu Cake",
        category: "Sweet",
        price: 52000,
      },
      {
        name: "Raspberry Tiramisu Cake with Espresso and Mascarpone Cheese",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Raspberry Tiramisu Cake with Espresso and Mascarpone Cheese",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Raspberry Tiramisu Cake with Espresso, Mascarpone Cheese, and Fresh Fruit",
        category: "Sweet",
        price: 68000,
      },
      {
        name: "Red Velvet Cake with Cream Cheese Frosting, Walnuts, and Red Food Coloring",
        category: "Sweet",
        price: 46000,
      },
      {
        name: "Rice Krispy Treats with Marshmallows, Rice Cereal, and Butter",
        category: "Savoury",
        price: 66000,
      },
      {
        name: "S'mores Bars with Chocolate Chips, Marshmallows, Graham Crackers, and Whipped Cream",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "S'mores Cake with Chocolate Chips, Marshmallows, Graham Crackers, and Whipped Cream",
        category: "Sweet",
        price: 42000,
      },
      {
        name: "S'mores Cake with Graham Cracker Crust",
        category: "Gift",
        price: 47000,
      },
      {
        name: "S'mores Cake with Graham Cracker Crust and Marshmallows",
        category: "Gift",
        price: 50000,
      },
      {
        name: "S'mores Cake with Graham Cracker Crust, Marshmallows, Chocolate, and Fresh Fruit",
        category: "Gift",
        price: 66000,
      },
      {
        name: "S'mores Cake with Graham Cracker Crust, Marshmallows, and Chocolate",
        category: "Gift",
        price: 58000,
      },
      {
        name: "Salted Caramel Chocolate Cake",
        category: "Sweet",
        price: 54000,
      },
      {
        name: "Salted Caramel Chocolate Cake with Fresh Fruit",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "Salted Caramel Chocolate Cake with Fresh Fruit and Whipped Cream",
        category: "Sweet",
        price: 64000,
      },
      {
        name: "Salted Caramel Chocolate Cake with Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 70000,
      },
      {
        name: "Strawberry Shortcake Cake",
        category: "Sweet",
        price: 45000,
      },
      {
        name: "Strawberry Shortcake Cake with Fresh Strawberries and Whipped Cream",
        category: "Sweet",
        price: 52000,
      },
      {
        name: "Strawberry Shortcake Cake with Fresh Strawberries and Whipped Cream",
        category: "Sweet",
        price: 60000,
      },
      {
        name: "Strawberry Shortcake Cake with Fresh Strawberries, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 68000,
      },
      {
        name: "Tiramisu Cake with Espresso and Mascarpone Cheese",
        category: "Traditional",
        price: 54000,
      },
      {
        name: "Tiramisu Cake with Espresso and Mascarpone Cheese",
        category: "Traditional",
        price: 58000,
      },
      {
        name: "Tiramisu Cake with Espresso and Mascarpone Cheese",
        category: "Traditional",
        price: 62000,
      },
      {
        name: "Tiramisu Cake with Espresso, Mascarpone Cheese, and Fresh Fruit",
        category: "Traditional",
        price: 70000,
      },
      {
        name: "Ube Halaya Cake with Coconut Cream",
        category: "Gift",
        price: 43000,
      },
      {
        name: "Ube Halaya Cake with Coconut Cream and Fresh Fruit",
        category: "Gift",
        price: 50000,
      },
      {
        name: "Ube Halaya Cake with Coconut Cream and Fresh Fruit",
        category: "Gift",
        price: 58000,
      },
      {
        name: "Ube Halaya Cake with Coconut Cream, Fresh Fruit, and Whipped Cream",
        category: "Gift",
        price: 66000,
      },
      {
        name: "Vanilla Bean Crème Brûlée Cake",
        category: "Traditional",
        price: 52000,
      },
      {
        name: "Vanilla Bean Crème Brûlée Cake with Caramel Sauce",
        category: "Traditional",
        price: 56000,
      },
      {
        name: "Vanilla Bean Crème Brûlée Cake with Caramel Sauce and Fresh Fruit",
        category: "Traditional",
        price: 60000,
      },
      {
        name: "Vanilla Bean Crème Brûlée Cake with Caramel Sauce, Fresh Fruit, and Whipped Cream",
        category: "Traditional",
        price: 68000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting and Fresh Flowers",
        category: "Gift",
        price: 50000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting and Fresh Flowers",
        category: "Gift",
        price: 60000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting and Fresh Flowers",
        category: "Gift",
        price: 64000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting, Fresh Flowers, Chocolate Chips, Caramel Sauce, Sea Salt, Walnuts, and Hazelnuts",
        category: "Gift",
        price: 90000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting, Fresh Flowers, Chocolate Chips, Caramel Sauce, Sea Salt, and Walnuts",
        category: "Gift",
        price: 84000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting, Fresh Flowers, Chocolate Chips, Caramel Sauce, and Sea Salt",
        category: "Gift",
        price: 80000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting, Fresh Flowers, Chocolate Chips, and Caramel Sauce",
        category: "Gift",
        price: 76000,
      },
      {
        name: "Wedding Cake with Buttercream Frosting, Fresh Flowers, and Chocolate Chips",
        category: "Gift",
        price: 72000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake",
        category: "Sweet",
        price: 49000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit",
        category: "Sweet",
        price: 58000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit and Whipped Cream",
        category: "Sweet",
        price: 62000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, Sea Salt, Walnuts, and Hazelnuts",
        category: "Sweet",
        price: 76000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, Sea Salt, and Walnuts",
        category: "Sweet",
        price: 74000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit, Whipped Cream, Chocolate Chips, Caramel Sauce, and Sea Salt",
        category: "Sweet",
        price: 72000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit, Whipped Cream, Chocolate Chips, and Caramel Sauce",
        category: "Sweet",
        price: 70000,
      },
      {
        name: "Xanthan Gum Chocolate Mousse Cake with Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Sweet",
        price: 70000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest",
        category: "Gift",
        price: 44000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest and Fresh Fruit",
        category: "Gift",
        price: 52000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest and Fresh Fruit",
        category: "Gift",
        price: 60000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Gift",
        price: 74000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Gift",
        price: 72000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Gift",
        price: 70000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Gift",
        price: 68000,
      },
      {
        name: "Yuzu and Honey Cake with Lemon Zest, Fresh Fruit, and Whipped Cream",
        category: "Gift",
        price: 68000,
      },
      {
        name: "Zesty Lemon Cake",
        category: "Savoury",
        price: 50000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting and Fresh Fruit",
        category: "Savoury",
        price: 58000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting and Fresh Fruit",
        category: "Savoury",
        price: 62000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, Walnuts, and Hazelnuts",
        category: "Savoury",
        price: 76000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, Chocolate Chips, Sea Salt, and Walnuts",
        category: "Savoury",
        price: 74000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, Chocolate Chips, and Sea Salt",
        category: "Savoury",
        price: 72000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting, Fresh Fruit, Whipped Cream, and Chocolate Chips",
        category: "Savoury",
        price: 70000,
      },
      {
        name: "Zesty Lemon Cake with Cream Cheese Frosting, Fresh Fruit, and Whipped Cream",
        category: "Savoury",
        price: 70000,
      },
    ],
  });
}

main()
  .then(() => console.log("Seeding complete"))
  .catch((error) => console.error(error));
