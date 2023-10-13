import { useEffect, useState } from 'react'

import {
  collection,
  getDocs,
  query,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'
import CategoryItem from './CategoryItem'
import useGetData from "../../custom-hooks/useGetData";
import '../Categories/Categories.css'
const Categories = () => {

    const { data: category, loading } = useGetData("categoryKurdish");
   
  return (
    <>
      {loading ? (
        <>
        <p className="text-center">
            Loading....
        </p>
        </>

      ) : category && category.length > 0 ? (
            <>
                <div className="category-row pt-5">
                {category.map((category) => (
                    <CategoryItem 
                    category={category}
                    id={category.id}
                    key={category.id}
                    />
                ))}
                </div>     
            </>
      ) : (
        <p>There are no current category</p>
      )}
   </>
  )

}

export default Categories

  

