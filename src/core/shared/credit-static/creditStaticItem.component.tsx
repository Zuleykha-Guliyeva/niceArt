import { useCreditStaticItemStyles } from "./creditStaticItem.style";
import credit_icon_1 from "assets/images/statics/credit_icon_1.svg";

const CreditStaticItemComponent = ({ creditProps, creditPropsDesc }: any) => {
  const classes = useCreditStaticItemStyles();
  return (
    <div className={classes.credit_detail_box}>
          <div className={classes.icon}>
            <img src={credit_icon_1} alt='' />
          </div>
          <p className={classes.icon_title}>Kreditin məbləği (AZN)</p>
          {creditPropsDesc}
          <span className={classes.icon_descrip}>{creditProps?.amount}</span>
        </div>
  );
};

export default CreditStaticItemComponent;
