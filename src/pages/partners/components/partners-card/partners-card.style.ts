import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  card: {
    padding: `${rem(16) + ' ' + rem(20) + ' ' + rem(16) + ' ' + rem(20)}`,
    border: '1px solid #3E6F0005',
    borderRadius: rem(16),
    background:
      'linear-gradient(0deg, rgba(62, 111, 0, 0.02), rgba(62, 111, 0, 0.02)),linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    boxShadown: '0px 0px 4px 0px #3E6F000A',
    marginBottom: rem(32),
    cursor: 'pointer',
  },
  titleIcon: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: rem(32),
    '& img': { width: rem(32), height: rem(32) },
    '& span': {
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '500',
      lineHeight: rem(19),
      letterSpacing: rem(0),
      textAlign: 'left',
      marginLeft: rem(12),
    },
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: rem(4),
    padding: `${rem(2) + ' ' + rem(4) + ' ' + rem(2) + ' ' + rem(4)}`,
    background: colors.partnersTag,
    '& span': {
      fontFamily: fonts.font,
      fontSize: rem(8),
      fontWeight: '500',
      lineHeight: rem(10),
      letterSpacing: rem(0),
      textAlign: 'center',
      color: colors.navActiveText,
    },
  },
};
export const usePartnersCardStyles = createUseStyles(styles);
