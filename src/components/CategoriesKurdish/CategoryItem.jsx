import React from 'react'
import { Link} from 'react-router-dom'
const categoryItem = ({category}) => {
    
    return (
         <Link to={`/categorykurdish/${category.categoryName}`}>
        <div className="category">
            <p className="category-text">{category.categoryName}</p>
        </div>
        </Link>
    )
}

export default categoryItem
