import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idly(2)",
    description: "With sambar and chutney.",
    price: 40,
  },
  {
    id: "m2",
    name: "Idly(2) Vada(1)",
    description: "With sambar and chutney.",
    price: 80,
  },
  {
    id: "m3",
    name: "Plain Dosa",
    description: "With Sambar",
    price: 60,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "With sambar and chutney.",
    price: 70,
  },
  {
    id: "m5",
    name: "Poori",
    description: "With Saagu and chutney .",
    price: 75,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
