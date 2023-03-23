import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/card/Card';

let page = 1;
let limit = 10;
const URL = process.env.REACT_APP_PRODUCT_URL;

function App() {

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);

  const getdata = async () => {
    const totalProducts = await axios.get(URL);
    const productData = await axios.get(`${URL}?page=${page}&limit=${limit}`);
    setTotalProducts(totalProducts?.data?.data?.length);
    setProducts(productData?.data);
  };

 

  useEffect(() => {
    getdata();
  }, []);

  // console.log(products)
  // console.log("-->fetch product",products?.data);
  // console.log("totalProducts length",totalProducts)

  return (
    //  =========================================

    <main className="bg-gray-200 min-h-[100vh]">
      {/*============== Card ============ */}
      <Card products={products?.data} />
      {/*============== Card ============ */}


      {/* **************** Pagination ************* */}
      <div className="text-center my-3 flex gap-7 ">
       
        <div>
          Page = <span className="bg-red-600 p-1 text-white">{page} </span> Of{' '}
          <span className="bg-red-600 p-1 text-white">
            {Math.ceil(totalProducts / limit)}{' '}
          </span>
        </div>

        
      </div>
      {/* **************** Pagination Ends ************* */}
    </main>

    // ============================================
  );
}

export default App;
