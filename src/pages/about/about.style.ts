import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  aboutImageSection: {
    marginBottom: rem(80),
    marginTop: rem(180),
  },
  greySection: {
    position: 'relative',
    width: '100%',
    height: rem(518),
    background: colors.greySec,
    padding: `${rem(0) + ' ' + rem(106) + ' ' + rem(0) + ' ' + rem(106)}`,
  },
  imgSection: {
    position: 'absolute',
    bottom: rem(60),
    width: '100%',
    '& img': {
      width: rem(900),
      hegth: rem(588),
      maxWidth: '100%',
    },
  },
  productsTitle: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(59),
  },
  creditStatic: {

  },
};

export const useAboutStyles = createUseStyles(styles);
