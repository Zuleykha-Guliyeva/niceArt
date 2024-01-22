import LeadsComponent from 'core/shared/leads/leads.component';

const AboutComponent = () => {
  return (
    <div className='container'>
      <section className='leadsSection'>
        <LeadsComponent
          title='Title for about us or Lorem Ipsum motto'
          tag={'Biz kimik?'}
          subTitle={'Lectus mauris pulvinarsit?'}
          description={
            'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. '
          }
        >
          <></>
        </LeadsComponent>
      </section>
    </div>
  );
};

export default AboutComponent;
