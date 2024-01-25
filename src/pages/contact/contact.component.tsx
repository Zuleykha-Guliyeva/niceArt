import { Link } from 'react-router-dom';
import { useContactStyles } from './contact.style';
import img1 from 'assets/images/statics/contact/1.png';
import img2 from 'assets/images/statics/contact/2.png';
import img3 from 'assets/images/statics/contact/3.png';
import img4 from 'assets/images/statics/contact/4.png';
import FormComponent from 'core/shared/form/form.component';

const ContactComponent = () => {
  const classes = useContactStyles();
  return (
    <>
      <section className={classes.discoverSection}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='contactContent'>
                <p className={classes.title}>DISCOVER US</p>
                <p className={classes.description}>
                  Flick is here to help you; Our experts are available to answer
                  any questions you might have. We’ve got the answers.
                </p>
                <div className='visitUs'>
                  <p className={classes.visitTitle}>Visit Us</p>
                  <p className={classes.visitDesc}>
                    Office no. G-02. Building 1, Ground Floor. Dubai Media City
                    – Dubai
                  </p>
                  <p className={classes.visitSubDesc}>
                    Feel free to get in touch with us through our channels:
                  </p>
                </div>
                <div className='emailUs mb-37'>
                  <p className={classes.visitTitle}>Email US</p>
                  <Link to='#'>
                    <span className={classes.emailDesc}>
                      javidan.nasib@gmai.com
                    </span>
                  </Link>
                </div>
                <div className='callUs'>
                  <p className={classes.visitTitle}>Call US</p>
                  <p className={classes.emailDesc}>+994 51 535 11 35</p>
                </div>
              </div>
            </div>
            <div className='col-md-7'>
              <div className={classes.imagesBox}>
                <div className={classes.img1}>
                  <img src={img1} alt='' />
                </div>
                <div className={classes.img2}>
                  <img src={img2} alt='' />
                </div>
                <div className={classes.img3}>
                  <img src={img3} alt='' />
                </div>
                <div className={classes.img4}>
                  <img src={img4} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.formSection}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className={classes.formTitle}>
                Have a project! Let’s diascuss{' '}
              </div>
              <div className={classes.formDesc}>
                Vehicula elit est, neque non mattis pharetra, urna lectus
                magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar.
                Urna egestas est aliquet facilisis elit sit. Massa libero turpis
                facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
                senectus mattis nam euismod cum cursus. Enim nunc quis commodo
                leo libero diam.{' '}
              </div>
            </div>
            <div className='col-md-7'>
              <FormComponent></FormComponent>
            </div>
          </div>
        </div>
      </section>
      <section className='mapSection'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.109337708844!2d49.8332829!3d40.3805456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da26259811b%3A0xd8e93c5caf8d91ba!2sAzInTelecom!5e0!3m2!1str!2saz!4v1706168595454!5m2!1str!2saz'
          width='100%'
          height='440'
          loading='lazy'
        ></iframe>
      </section>
    </>
  );
};

export default ContactComponent;
