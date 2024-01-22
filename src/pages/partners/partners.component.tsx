import ButtonComponent from "core/shared/button/button.component";
import LeadsComponent from "core/shared/leads/leads.component";

const PartnersComponent = () => {
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
          <ButtonComponent buttonText='Became a partner' classN='greenBtn' />
        </LeadsComponent>
      </section>
    </div>
  );
};

export default PartnersComponent;
