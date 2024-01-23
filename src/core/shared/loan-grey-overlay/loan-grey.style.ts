import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  loanCalculator: {
    position: 'relative',
    marginBottom: rem(200),
    padding: `${rem(65) + ' ' + rem(60) + ' ' + rem(65) + ' ' + rem(0)}`,
  },
  overlay: {
    width: '82%',
    height: rem(580),
    background: colors.greySec,
    position: 'absolute',
    top: rem(0),
    right: rem(0),
    zIndex: '-5',
  },
  productsTitle: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(59),
  },
  productsDescription: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
  },
  padding: {
    // padding: rem(57),
  },
  aboutOverlay: {
    height: '100%',
  },
};
export const useLoanGreyStyles = createUseStyles(styles);
