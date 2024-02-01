import { useHomeStyles } from './home.style';
import CategoryComponent from 'core/shared/category-span/category.component';
import sekil1 from 'assets/images/statics/homepage1.png';
import { CiPlay1 } from 'react-icons/ci';
import LeadsComponent from 'core/shared/leads/leads.component';
import ButtonComponent from 'core/shared/button/button.component';
import LoanGreyComponent from 'core/shared/loan-grey-overlay/loan-grey.component';
import LoanCalculatorComponent from 'core/shared/loan-calculator/loan-calculator.component';
import { useVideos } from './actions/video.query';
import useLocalization from 'assets/lang';

const HomeComponent = () => {
  const classes = useHomeStyles();
  const translate = useLocalization();
  const { data } = useVideos();
  return (
    <div className='container'>
      <section className='leadsSection'>
        <LeadsComponent i={0}>
          <div className='row'>
            <div className='col-6'>
              <ButtonComponent
                url=''
                buttonText='Products'
                classN='greenBtn'
                close={''}
              />
            </div>
            <div className='col-6'>
              <ButtonComponent
                url=''
                buttonText='About NICART'
                classN='greyBtn'
                close={''}
              />
            </div>
          </div>
        </LeadsComponent>
      </section>
      <section className={classes.grey}>
        <div className={classes.videoSec}>
          <div className='row'>
            <div className='col-12'>
              <div className={classes.video}>
                <div className={classes.customPlayButton}>
                  <div className={classes.whitePlayButton}>
                    <CiPlay1 />
                  </div>
                </div>
                <video width='100%' height='100%' poster={sekil1}>
                  <source src={data?.file.url} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={classes.videoText}>{data?.description}</div>
            </div>
          </div>
        </div>
        <div className='aboutSec'>
          <LeadsComponent i={1}>
            <ButtonComponent
              url=''
              buttonText='Learn more'
              classN='borderBottomBtn'
              close={''}
            />
          </LeadsComponent>
        </div>
      </section>
      <section className={classes.products}>
        <div className='row'>
          <div className='col-12 mb-8'>
            <CategoryComponent text={translate('products')} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <p className={classes.productsTitle}>{translate('creditTitle')}</p>
          </div>
          <div className='col-md-7'>
            <p className={classes.productsDescription}>
              {translate('creditDescription')}
            </p>
          </div>
        </div>
      </section>
      <LoanGreyComponent padding='' overlay=''>
        <LoanCalculatorComponent />
      </LoanGreyComponent>
    </div>
  );
};

export default HomeComponent;
