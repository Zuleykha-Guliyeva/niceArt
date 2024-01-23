import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  aboutIcon: {
    padding: rem(28),
    width: rem(120),
    background: colors.light,
    borderRadius: rem(12),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: rem(64),
      height: rem(64),
    },
  },
  title: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '500',
    lineHeight: rem(26),
    marginBottom: rem(12),
  },
  description: {
    color: colors.navText,
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(22),
  },
  centralItem: {
    padding: `${rem(70) + ' ' + rem(0) + ' ' + rem(70) + ' ' + rem(80)}`,
    '& aboutIcon': {
      paddingRight: '50px!important',
    }
  },
};

export const useItemStyles = createUseStyles(styles);
