import { useCallback } from 'react';
import { useButtonStyles } from './button.style';
import {
  ArrowRight,
  ArrowDown,
  ArrowRightUp,
} from 'assets/images/icons/arrows';

const ButtonComponent = ({ buttonText, classN, close }) => {
  const classes = useButtonStyles();

  const handleClick = useCallback(() => {
    if (classN === 'visitBtn') {
      window.open('https://google.com', '_blank');
    } else if (classN === 'closeBtn') {
      close();
    }
  }, [classN]);
  return (
    <>
      <button className={`${classes[classN]}`} onClick={handleClick}>
        <span className='pr-20'>{buttonText}</span>
        {classN === 'greenBtn' && <ArrowRight />}
        {classN === 'greyBtn' && <ArrowDown />}
        {classN === 'muraciet' && <ArrowRight />}
        {classN === 'closeBtn' && ''}
        {classN === 'visitBtn' && <ArrowRightUp />}
      </button>
    </>
  );
};
export default ButtonComponent;
