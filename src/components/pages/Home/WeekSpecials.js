import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$10.99',
    description: `Our legendary Greek salad features crisp lettuce, vibrant peppers, 
    briny olives, and tangy Chicago-style feta, all finished with golden garlic-and-rosemary 
    croutons for a satisfying crunch.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$4.60',
    description: `Our bruschetta starts with grilled bread, rubbed with fresh garlic, 
    then drizzled with extra-virgin olive oil and finished with a pinch of sea salt.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$6.10',
    description: `Pulled directly from Grandma's cherished recipe collection, every single 
    ingredient has been carefully sourced for its authenticity, honoring her legacy in every bite.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
