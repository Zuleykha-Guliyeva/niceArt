import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  partnersCard: {
    marginTop: rem(60),
    marginBottom: rem(155),
  },
};
export const usePartnersStyles = createUseStyles(styles);
