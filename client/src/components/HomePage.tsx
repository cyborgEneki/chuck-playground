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
      <ul className="list-group">
        {
          categories.map((category, index) => (
            <li className="list-group-item">
              <CategoryDisplay category={category} key={index} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage