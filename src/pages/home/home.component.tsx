import ButtonComponent from 'core/shared/button/button.component';
import { useHomeStyles } from './home.style';
import CategoryComponent from 'core/shared/category-span/category.component';
import { Link } from 'react-router-dom';
import sekil1 from 'assets/images/statics/homepage1.png';
import sekil2 from 'assets/images/statics/homepage2.png';
import { CiPlay1 } from 'react-icons/ci';
import LoanCalculatorComponent from 'core/shared/loan-calculator/loan-calculator.component';

const HomeComponent = () => {
  const classes = useHomeStyles();
  return (
    <div className='container'>
      <section className='leids'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={classes.leidTitle}>
              We help you find the perfect loan
            </div>
          </div>
          <div className='col-md-6'>
            <div className={classes.leidDescription}>
              <p className='pb-25'>
                Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi
                est, egestas. Nunc, dignissim amet, purus amet. Amet dictum sit
                elit urna non purus, gravida commodo.
              </p>
              <div className='w-100'>
                <ButtonComponent buttonText='Products' classN='greenBtn' />
                <ButtonComponent buttonText='About NICART' classN='greyBtn' />
              </div>
            </div>
          </div>
        </div>
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
                  <source src='path/to/your/video.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={classes.videoText}>
                Malesuada tortor fringilla ut faucibus. Urna tellus lectus
                platea turpis non. Tellus odio eu ante tincidunt vivamus nunc
                nibh arcu, augue. Egestas et amet neque placerat aliquam tempor.
                Ultricies natoque lacus, id natoque cras. Erat aliquam
                sollicitudin risus semper molestie. Ut mattis nisl faucibus vel
                tincidunt. Et in laoreet faucibus urna quis. Tempus in
                condimentum malesuada ut molestie et in. Lobortis neque aliquam
                felis ac ac augue elit.
              </div>
            </div>
          </div>
        </div>
        <div className='aboutSec'>
          <div className='row'>
            <div className='col-12 mb-8'>
              <CategoryComponent text='ABOUT US' />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <p className={classes.aboutTitle}>Lectus mauris pulvinar sit.</p>
              <p className={classes.aboutDescription}>
                Malesuada tortor fringilla ut faucibus. Urna tellus lectus
                platea turpis non. Tellus odio eu ante tincidunt vivamus nunc
                nibh arcu, augue. Egestas et amet neque placerat aliquam tempor.
                Ultricies natoque lacus, id natoque cras. Erat aliquam
                sollicitudin risus semper molestie. Ut mattis nisl faucibus vel
                tincidunt.
              </p>
              <Link to='#' className={classes.learnMore}>
                <span>Learn more</span>
              </Link>
            </div>
            <div className='col-6'>
              <div className={classes.aboutImg}>
                <img src={sekil2} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.products}>
        <div className='row'>
          <div className='col-12 mb-8'>
            <CategoryComponent text='Products' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <p className={classes.productsTitle}>Daşınmaz əmlak krediti</p>
          </div>
          <div className='col-md-7'>
            <p className={classes.productsDescription}>
              Quisque bibendum adipiscing sem massa auctor nulla donec mi
              integer. Suspendisse eget convallis magna viverra amet. Ut quam
              scelerisque massa morbi ac pharetra. Sit at elit non et diam. Quam
              a id egestas elit. Posuere cursus accumsan urna viverra. Sit
              egestas et convallis donec risus sapien enim. Gravida praesent
              adipiscin
            </p>
          </div>
        </div>
      </section>
      <section className={classes.loanCalculator}>
        <div className={classes.overlay}></div>
        <div className='row align-center'>
          <div className='col-md-5'>
            <CategoryComponent text='Apply to loan' />
            <p className={classes.productsTitle}>
              Id duis id turpis mi quisque. Nulla.
            </p>
            <p className={classes.productsDescription}>
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
              augue.
            </p>
          </div>
          <div className='col-md-7'>
            <LoanCalculatorComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
