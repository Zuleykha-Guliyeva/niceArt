import { useCallback, useState } from 'react';
import { usePartnersCardStyles } from './partners-card.style';
import cola from 'assets/images/statics/cola.svg';
import ModalComponent from 'core/shared/modal/modal.component';

const PartnersCardComponent = () => {
  const classes = usePartnersCardStyles();
  const [open, setOpen] = useState(false);
  const showModal = useCallback(() => {
    setOpen(true);
  }, [open, setOpen]);
  return (
    <>
      <div className='col-md-3'>
        <div className={classes.card} onClick={showModal}>
          <div className={classes.titleIcon}>
            <img src={cola} alt='' />
            <span>Metus, vel</span>
          </div>
          <div className={classes.tag}>
            <span>E-commerce</span>
          </div>
        </div>
      </div>

      <ModalComponent open={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default PartnersCardComponent;
