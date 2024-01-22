import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  greenBtn: {
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
  greyBtn: {
    padding: `${rem(12) + ' ' + rem(24) + ' ' + rem(12) + ' ' + rem(24)}`,
    borderRadius: rem(8),
    border: `1px solid ${colors.navActiveText}`,
    color: colors.navActiveText,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    cursor: 'pointer',
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
  },
};
export const useButtonStyles = createUseStyles(styles);
