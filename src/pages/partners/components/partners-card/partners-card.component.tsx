import { useCallback, useState } from 'react';
import { usePartnersCardStyles } from './partners-card.style';
import ModalComponent from 'core/shared/modal/modal.component';

const PartnersCardComponent = ({item}) => {
  const classes = usePartnersCardStyles();
  const [open, setOpen] = useState(false);
  const showModal = useCallback(() => {
    setOpen(true);
  }, [open, setOpen]);
  return (
    <>
      <div className='col-md-3 col-6'>
        <div className={classes.card} onClick={showModal}>
          <div className={classes.titleIcon}>
            <img src={item?.file.url} alt='' />
            <span>{item?.name}</span>
          </div>
          <div className={classes.tag}>
            <span>{item?.tag}</span>
          </div>
        </div>
      </div>

      <ModalComponent item={item} open={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default PartnersCardComponent;
