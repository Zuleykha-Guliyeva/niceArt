import { useButtonStyles } from "./button.style";
import { ArrowRight, ArrowDown } from 'assets/images/icons/arrows';

const ButtonComponent = ({ buttonText, classN }) => {
  const classes = useButtonStyles();
  return (
    <>
      <button className={`${classes[classN]}`}>
        <span className='pr-20'>{buttonText}</span>
        {classN === 'greenBtn' && <ArrowRight />}
        {classN === 'greyBtn' && <ArrowDown />}
        {classN === 'muraciet' && <ArrowRight />}
      </button>
    </>
  );
};
export default ButtonComponent;