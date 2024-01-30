import ProductItemComponent from './components/productItem.component';
import { useProductsStyles } from './products.style';
import LeadsComponent from 'core/shared/leads/leads.component';
import { generateGuid } from 'core/helpers/generate-guid';
import { useProducts } from './actions/products.query';

const ProductsComponent = () => {
  const classes = useProductsStyles();
  const { data } = useProducts();
  console.log(data);
  return (
    <div className='container'>
      <section className={`${classes.products}`}>
        <LeadsComponent i={8}>
          <></>
        </LeadsComponent>
        {data &&
          data.map((product) => (
            <ProductItemComponent key={generateGuid()} product={product} />
          ))}
      </section>
    </div>
  );
};

export default ProductsComponent;
