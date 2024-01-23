import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  grey: {
    marginTop: rem(173),
    background: colors.greySec,
    paddingLeft: rem(106),
    paddingRight: rem(106),
    height: '1067px',
    position: 'relative',
    marginBottom: rem(300),
  },
  videoSec: {
    marginBottom: rem(80),
  },
  videoText: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    textAlign: 'justify',
    color: colors.navText,
    marginTop: rem(490),
  },
  video: {
    position: 'absolute',
    top: '-120px',
    left: rem(106),
    right: rem(106),
    height: rem(578),
    marginBottom: rem(32),
  },
  customPlayButton: {
    position: 'absolute',
    bottom: '27px',
    left: '5%',
    transform: 'translate(-50%, -50%)',
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '50px',
    cursor: 'pointer',
    pading: rem(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  whitePlayButton: {
    background: colors.light,
    borderRadius: '50%',
    textAlign: 'center',
    width: '40px',
    height: '40px',
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
  aboutImg: {
    position: 'relative',
    top: '-25px',
    '& img': {
      positon: 'absolute',
      maxWidth: '100%',
    },
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
