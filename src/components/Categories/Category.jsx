import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetData from "../../custom-hooks/useGetData";
import ProductsList from '../UI/ProductsList'
import { Container, Row } from 'reactstrap'

function Category() {

  const { data: products, loading } = useGetData("products");
  const [categoryProduct, setCategoryProduct] = useState([]);
  const params = useParams()
  useEffect(() => {

    const filteredCategory = products.filter(
      item => item.category === params.categoryName
    );
    
     setCategoryProduct(filteredCategory);
    console.log(categoryProduct);
   
  }, [products])

  

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
                 <ProductsList
                  data={categoryProduct}
                />
            </Row>
          </Container>
        </section>
      ) : (
        <>
        <p className="container">No listings for {params.categoryName}</p>
      </>
      )}
    </div>
  )
}

export default Category
