import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation  } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'; 
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarusel from '../components/ProductCarusel';
import { listProducts } from '../actions/productActions'



function HomeScreens() {
 
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products, page, pages} = productList
  const location = useLocation();

  let keyword = location.search;
  console.log(keyword)
  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])



  return (
    <div>
      {!keyword && <ProductCarusel/>}
        
        <h1>Latest Products</h1>
     
        {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : 
            <div>
            <Row>
              {Array.isArray(products)  && products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <h3><Product product={product}/></h3>
                  </Col>
              ))}
          </Row>
                <Paginate pages={pages} page={page}  keyword={keyword}/>
          </div>
        }
      
    </div>
  )
}

export default HomeScreens