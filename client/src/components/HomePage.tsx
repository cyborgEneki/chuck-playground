import type { Category } from '../types';
import CategoryDisplay from './CategoryDisplay';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const HomePage = () => {
  const { state } = useContext(AppContext);

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
              {/* state.categories */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage;