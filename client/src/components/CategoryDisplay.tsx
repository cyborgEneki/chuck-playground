import type { Category } from "../types";

type Props = {
  category: Category
}

const CategoryDisplay = ({ category }: Props) => {
  return (
    <div>{ category.name }</div>
  )
}

export default CategoryDisplay