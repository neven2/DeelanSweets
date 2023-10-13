import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetData from "../../custom-hooks/useGetData";
import ProductsListKurdish from '../UI/ProductListKurdish.jsx'
import { Container, Row } from 'reactstrap'

function Category() {

  const { data: productKurdish, loading } = useGetData("productKurdish");
  const [categoryProduct, setCategoryProduct] = useState([]);
  const params = useParams()
  useEffect(() => {

    const filteredCategory = productKurdish.filter(
      item => item.category === params.categoryName
    );
    
     setCategoryProduct(filteredCategory);
     
   
  }, [productKurdish])

  

  return (
    <div className='category'>
      {loading ? (
      <>
      <p>
          Loading...
      </p>
      </>
      ) : categoryProduct && categoryProduct.length > 0 ? (
        <section>
          <Container >
            <Row>
                 <ProductsListKurdish
                  data={categoryProduct}
                />
            </Row>
          </Container>
        </section>
      ) : (
        <>
        <p className="container">{params.categoryName}هیچ لیستێک نیە بۆ </p>
      </>
      )}
    </div>
  )
}

export default Category
