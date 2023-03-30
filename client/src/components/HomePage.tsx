import type { Category } from '../types';
import CategoryDisplay from './CategoryDisplay';

const HomePage = () => {
  const categories: Category[] = [
    { name: 'history' },
    { name: 'animal' },
    { name: 'money' },
  ];

  return (
    <div>
      {
        categories.map((category, index) => (<CategoryDisplay category={category} key={index} />))
      }

    </div>
  )
}

export default HomePage