import ButtonComponent from 'core/shared/button/button.component';
import LeadsComponent from 'core/shared/leads/leads.component';
import { usePartnersStyles } from './partners.style';
import PartnersCardComponent from './components/partners-card/partners-card.component';
const PartnersComponent = () => {
  const classes = usePartnersStyles();
  return (
    <div className='container'>
      <section className='leadsSection'>
        <LeadsComponent
          title='Title for Partners or Lorem Ipsum motto'
          tag={''}
          subTitle={'Lectus mauris pulvinar'}
          description={
            'Commodo interdum at lorem eget amet placerat nunc posuere. Viverra lacus, nisl cursus senectus malesuada leo donec pellentesque. Id faucibus nulla adipiscing pellentesque vulputate quis pulvinar. Sapien est vestibulum in porttitor volutpat.'
          }
        >
          <ButtonComponent
            buttonText='Became a partner'
            classN='greenBtn'
            close={''}
          />
        </LeadsComponent>
      </section>
      <section className={classes.partnersCard}>
        <div className='row w-100'>
          <PartnersCardComponent />
        </div>
      </section>
    </div>
  );
};

export default PartnersComponent;
