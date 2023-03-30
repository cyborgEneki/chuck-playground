import { Link } from "react-router-dom";
import type { Category } from "../types";

type Props = {
  category: Category
}

const CategoryDisplay = ({ category }: Props) => {
  return (
    <div>
      <Link to={`random-joke/${category.name}`}>{category.name}</Link>
    </div>
  )
}

export default CategoryDisplay