import ButtonComponent from 'core/shared/button/button.component';
import LeadsComponent from 'core/shared/leads/leads.component';
import { usePartnersStyles } from './partners.style';
import PartnersCardComponent from './components/partners-card/partners-card.component';
import { usePartners } from './actions/partners.query';
const PartnersComponent = () => {
  const classes = usePartnersStyles();
  const {data} = usePartners();
  console.log(data);
  
  return (
    <div className='container'>
      <section className='leadsSection'>
        <LeadsComponent i={7}>
          <ButtonComponent
            url=''
            buttonText='Became a partner'
            classN='greenBtn'
            close={''}
          />
        </LeadsComponent>
      </section>
      <section className={classes.partnersCard}>
        <div className='row w-100'>
          {data?.map((item, index) => (
            <PartnersCardComponent item={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersComponent;
