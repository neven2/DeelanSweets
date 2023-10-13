import React from 'react'
import { Link} from 'react-router-dom'
const CategoryItem = ({category}) => {
    
    return (
         <Link to={`/category/${category.categoryName}`}>
        <div className="category">
            <p className="category-text">{category.categoryName}</p>
        </div>
        </Link>
    )
}

export default CategoryItem
