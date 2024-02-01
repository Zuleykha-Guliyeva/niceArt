import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  grey: {
    marginTop: rem(173),
    background: colors.greySec,
    paddingLeft: rem(106),
    paddingRight: rem(106),
    height: rem(1050),
    position: 'relative',
    marginBottom: rem(300),
  },
  videoSec: {
    height: rem(580),
  },
  videoText: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: 'justify',
    color: colors.navText,
    marginTop: rem(460),
  },
  video: {
    position: 'absolute',
    top: '-130px',
    left: rem(106),
    right: rem(106),
    height: rem(578),
    [breakpoint(991)]: {
      // position: 'relative',
    },
  },
  customPlayButton: {
    position: 'absolute',
    bottom: rem(27),
    left: '5%',
    transform: 'translate(-50%, -50%)',
    width: rem(50),
    height: rem(50),
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: rem(50),
    cursor: 'pointer',
    pading: rem(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    [breakpoint(1200)]: {
      display: 'none',
    },
  },
  whitePlayButton: {
    background: colors.light,
    borderRadius: '50%',
    textAlign: 'center',
    width: rem(40),
    height: rem(40),
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  aboutTitle: {
    fontFamily: fonts.font,
    fontSize: rem(42),
    fontWeight: '800',
    lineHeight: rem(58),
    letterSpacing: rem(0),
    textAlign: 'left',
  },
  aboutDescription: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: 'left',
    color: colors.navText,
    marginBottom: rem(50),
  },

  learnMore: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '500',
    lineHeight: rem(22),
    textDecoration: 'none',
    paddingBottom: rem(8),
    borderBottom: `4px solid ${colors.navActiveText}`,
  },
  products: {
    marginBottom: rem(40),
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
};

export const useHomeStyles = createUseStyles(styles);
