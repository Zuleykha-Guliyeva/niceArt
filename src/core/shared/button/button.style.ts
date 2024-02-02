import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
  greenBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    background: colors.navActiveText,
    border: `1px solid ${colors.navActiveText}`,
    color: colors.light,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    marginRight: rem(24),
    cursor: 'pointer',
    [breakpoint(991)]: {
      padding: `${rem(12) + ' ' + rem(10) + ' ' + rem(12) + ' ' + rem(10)}`,
      '& span': {
        fontSize: rem(14),
        paddingRight: `{${rem(5)}!important}`,
      },
    },
  },
  greyBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    border: `1px solid ${colors.navActiveText}`,
    color: colors.navActiveText,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    cursor: 'pointer',
    [breakpoint(991)]: {
      padding: `${rem(12) + ' ' + rem(10) + ' ' + rem(12) + ' ' + rem(10)}`,
      '& span': {
        fontSize: rem(14),
        paddingRight: '5px!important',
      },
    },
  },
  greenBtn100: {
    width: '100%',
    padding: `${rem(12) + ' ' + rem(0)}`,
    borderRadius: rem(8),
    background: colors.navActiveText,
    border: `1px solid ${colors.navActiveText}`,
    color: colors.light,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'center',
    marginTop: rem(33),
    cursor: 'pointer',
  },
  partnersBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    background: colors.navActiveText,
    border: `1px solid ${colors.navActiveText}`,
    color: colors.light,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    marginRight: rem(24),
    cursor: 'pointer',
    [breakpoint(991)]: {
      padding: `${rem(12) + ' ' + rem(10) + ' ' + rem(12) + ' ' + rem(10)}`,
      '& span': {
        fontSize: rem(14),
        paddingRight: `{${rem(5)}!important}`,
      },
    },
  },
  muraciet: {
    padding: `${rem(12) + ' ' + rem(0)}`,
    textAlign: 'center',
    width: '100%',
    borderRadius: rem(8),
    border: `1px solid ${colors.navActiveText}`,
    color: colors.light,
    background: colors.navActiveText,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    cursor: 'pointer',
    [breakpoint(991)]: {
      marginTop: rem(20),
    },
  },
  closeBtn: {
    width: '100%',
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    border: `1px solid ${colors.navActiveText}`,
    color: colors.navActiveText,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
  visitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    background: colors.navActiveText,
    border: `1px solid ${colors.navActiveText}`,
    color: colors.light,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    marginRight: rem(24),
    cursor: 'pointer',
  },
  borderBottomBtn: {
    background: 'none',
    border: 'none',
    color: colors.navActiveText,
    fontSize: rem(20),
    fontWeight: '500',
    lineHeight: rem(22),
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    marginTop: rem(25),
    '& span': {
      borderBottom: `5px solid ${colors.navActiveText}`,
      display: 'inline-block',
      textAlign: 'center',
      paddingBottom: rem(7),
      paddingRight: '0!important',
    },
  },
};
export const useButtonStyles = createUseStyles(styles);
