import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  discoverSection: {
    marginTop: rem(170),
    marginBottom: rem(90),
  },
  title: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(58),
    letterSpacing: rem(0),
    color: colors.navText,
    marginBottom: rem(32),
  },
  description: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(24),
  },
  visitTitle: {
    fontFamily: fonts.font,
    fontSize: rem(32),
    fontWeight: '800',
    lineHeight: rem(42),
    letterSpacing: rem(0),
    color: colors.navText,
    marginBottom: rem(5),
  },
  visitDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(42),
    textDecoration: 'underline',
  },
  visitSubDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(42),
  },
  emailDesc: {
    fontFamily: fonts.font,
    fontSize: rem(22),
    fontWeight: '400',
    lineHeight: rem(35),
    letterSpacing: rem(0),
    color: colors.contactText,
    marginBottom: rem(37),
  },
  imagesBox: {
    position: 'relative',
  },
  img1: {
    position: 'absolute',
    top: rem(40),
    left: rem(120),
  },
  img2: {
    position: 'absolute',
    top: rem(116),
    right: rem(0),
  },
  img3: {
    position: 'absolute',
    top: rem(210),
    left: rem(0),
  },
  img4: {
    position: 'absolute',
    top: rem(310),
    right: rem(110),
  },
  formSection: {
    background: colors.footBackground,
    padding: `${rem(120) + ' ' + rem(0)}`,
  },
  formTitle: {
    fontFamily: fonts.font,
    fontSize: rem(60),
    fontWeight: '800',
    lineHeight: rem(80),
    letterSpacing: rem(0),
    color: colors.navActiveText,
    marginBottom: rem(24),
  },
  formDesc: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
    letterSpacing: rem(0),
    color: colors.navText,
  },
};
export const useContactStyles = createUseStyles(styles);
