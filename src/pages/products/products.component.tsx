import useLocalization from 'assets/lang';
import ProductItemComponent from './components/productItem.component';
import { useProductsStyles } from './products.style';
import LeadsComponent from 'core/shared/leads/leads.component';

const ProductsComponent = () => {
  const classes = useProductsStyles();
  const translate = useLocalization();
  return (
    <div className='container'>
      <section className={`${classes.products}`}>
        <LeadsComponent
          title={translate('productTitle')}
          tag=''
          subTitle={translate('productDescTitle')}
          description={translate('productDescription')}
        >
          <></>
        </LeadsComponent>
        <div>
          <ProductItemComponent />
        </div>
      </section>
    </div>
  );
};

export default ProductsComponent;
