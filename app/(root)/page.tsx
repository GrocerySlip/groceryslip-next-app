import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.actions";

const homePage = async () =>{
    const latestProducts = await getLatestProduct();

  return (
    <>
    <ProductList data={latestProducts} title='New Arrivals' limit={4}/>
    </>
  );
}
export default homePage;