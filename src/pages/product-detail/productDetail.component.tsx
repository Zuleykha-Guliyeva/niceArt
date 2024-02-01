import useLocalization from 'assets/lang';
import { useProductDetailStyles } from './productDetail.style';
import CreditStaticItemComponent from '../../core/shared/credit-static/creditStaticItem.component';
import { useParams } from 'react-router-dom';
import { useProducts } from 'pages/products/actions/products.query';
import LoanCalculatorComponent from 'core/shared/loan-calculator/loan-calculator.component';
import LoanGreyComponent from 'core/shared/loan-grey-overlay/loan-grey.component';
import { generateGuid } from 'core/helpers/generate-guid';
import creditIcon1 from 'assets/images/statics/credit_icon_1.svg';
import creditIcon2 from 'assets/images/statics/credit_icon_2.svg';
import creditIcon3 from 'assets/images/statics/credit_icon_3.svg';
import creditIcon4 from 'assets/images/statics/credit_icon_4.svg';
import creditIcon5 from 'assets/images/statics/credit_icon_5.svg';

const ProductDetailComponent = () => {
  const translate = useLocalization();
  const classes = useProductDetailStyles();
  const { id } = useParams();
  const safeId: string = id?.toString() || '';
  const product_id: number = id !== null ? parseInt(safeId) : 0;

  const { data } = useProducts();
  const selectedProduct = data?.find((product) => product.id === product_id);

  return (
    <>
      <div className={classes.overlay}></div>
      <div className='container'>
        <section className={classes.productDetailSec}>
          <div className={classes.productDetail}>
            <div className='row justify-between'>
              <div className='col-md-5 col-sm-12'>
                <h1 className={classes.title}>{selectedProduct?.name}</h1>
              </div>
              <div className={`col-md-7 col-sm-12 p-0`}>
                <div className={classes.productImg}>
                  <img src={selectedProduct?.file.url} alt='' />
                </div>
              </div>
            </div>
          </div>
          <span className={`${classes.credit_about}`}>
            {translate('credit_about')}
          </span>
        </section>
        <section className={classes.creditAbout}>
          <div className='row d-flex justify-between align-center mt-8'>
            <div className='col-lg-5'>
              <h1 className={classes.credit_about_title}>
                {selectedProduct?.about.title}
              </h1>
            </div>
            <div className='col-lg-6'>
              <p className={classes.credit_about_description}>
                {selectedProduct?.about.description}
              </p>
            </div>
          </div>
        </section>
        <section className='creditStatistic'>
          <div className='row justify-start'>
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                creditPropsTitle='Kreditin məbləği  (AZN)'
                creditProps={selectedProduct?.features?.amount}
                icon={creditIcon1}
              />
            </div>
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                creditPropsTitle='Kreditin ilkin ödənişi (%)'
                creditProps={selectedProduct?.features?.initialPayment}
                icon={creditIcon2}
              />
            </div>
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                creditPropsTitle='Kreditin faiz dərəcəsi  (%)'
                creditProps={selectedProduct?.features?.percentage}
                icon={creditIcon3}
              />
            </div>
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                creditPropsTitle='Kreditin müddəti  (ay)'
                creditProps={selectedProduct?.features?.period}
                icon={creditIcon4}
              />
            </div>
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                creditPropsTitle='Kreditin rəsmiləşdirilməsi üçün komissiya haqqı  (%)'
                creditProps={selectedProduct?.features?.comission}
                icon={creditIcon5}
              />
            </div>
          </div>
        </section>
        <section className='creditCalc'>
          <LoanGreyComponent padding='' overlay=''>
            <LoanCalculatorComponent />
          </LoanGreyComponent>
        </section>
      </div>
    </>
  );
};
export default ProductDetailComponent;
