import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const style = {
  credit_detail_box: {
    borderBottom: '1px solid #3E6F001A',
    marginBottom: rem(160),
    [breakpoint(768)]: {
      marginBottom: rem(24),
    },
  },
  icon: {
    width: rem(90),
    height: rem(90),
    padding: rem(23),
    background: colors.iconBackground,
    borderRadius: '50%',
    display: 'felx',
    alignItem: 'center',
    justifyContent: 'center',
    marginBottom: rem(32),
    '& img': {
      width: rem(44),
      height: rem(44),
    },
  },
  icon_title: {
    fontFamily: fonts.font,
    fontSize: rem(20),
    fontWeight: '800',
    lineHeight: rem(26),
    letterSpacing: 0,
    height: rem(50),
    textAlign: 'left',
    color: colors.titleGreen,
    marginBottom: rem(16),
    [breakpoint(768)]: {
      marginBottom: rem(0),
    },
  },
  icon_descrip: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    letterSpacing: 0,
    textAlign: 'left',
    color: colors.iconDescrip,
    display: 'inline-block',
    marginBottom: rem(22),
  },
};

export const useCreditStaticItemStyles = createUseStyles(style);
