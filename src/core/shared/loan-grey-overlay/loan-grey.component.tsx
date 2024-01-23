import CategoryComponent from "../category-span/category.component";
import { useLoanGreyStyles } from "./loan-grey.style";

const LoanGreyComponent = ({children,padding,overlay}) => {
    const classes = useLoanGreyStyles();
    const classPadding = padding ? classes[padding] : '';
    const classOverlay = overlay ? classes[overlay] : '';
    return (
      <section className={`${classes.loanCalculator} ${classPadding}`}>
        <div className={`${classes.overlay} ${classOverlay}`}></div>
        <div className='row align-center'>
          <div className='col-md-5'>
            <CategoryComponent text='Apply to loan' />
            <p className={classes.productsTitle}>
              Id duis id turpis mi quisque. Nulla.
            </p>
            <p className={classes.productsDescription}>
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
              augue.
            </p>
          </div>
          <div className='col-md-7'>{children}</div>
        </div>
      </section>
    );
}
export default LoanGreyComponent;