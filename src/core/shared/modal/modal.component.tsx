import { Modal } from 'antd';
import { useModalStyles } from './modal.style';
import cola from 'assets/images/statics/cola.svg';
import ButtonComponent from '../button/button.component';

const ModalComponent = ({ open, onClose }) => {
  const classes = useModalStyles();
  const modalFooter = null;
  return (
    <Modal
      open={open}
      footer={modalFooter}
      onCancel={onClose}
      width={600}
      centered
    >
      <div className={classes.modalBox}>
        <div className={classes.card}>
          <div className={classes.titleIcon}>
            <div>
              <img src={cola} alt='' />
            </div>
            <div>
              <div>
                <span>Metus, vel</span>
              </div>
              <div className={classes.tag}>
                <span>E-commerce</span>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
            Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas
            est aliquet facilisis elit sit. Massa libero turpis facilisi mattis
            sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam
            euismod cum cursus. Enim nunc quis commodo leo libero diam.
          </div>
          <div className='row'>
            <div className='col-6'>
              <ButtonComponent
                buttonText='Visit Website'
                classN='visitBtn'
                close={onClose}
              />
            </div>
            <div className='col-6'>
              <ButtonComponent
                buttonText='Close'
                classN='closeBtn'
                close={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
