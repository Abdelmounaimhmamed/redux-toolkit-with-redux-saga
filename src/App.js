import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { FetchDataFromApi } from './redux/slices/ProductSlice';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchDataFromApi())
  },[dispatch])
  const data = useSelector( (state) => state.products.ProductList);

  console.log(data);
  return (
    <div>
     
    </div>
  )
}


export default App