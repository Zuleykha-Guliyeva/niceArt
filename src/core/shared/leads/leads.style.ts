import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss"

const styles = {
  leadTitle: {
    fontSize: rem(60),
    lineHeight: rem(80),
    fontWeight: '800',
    letterSpacing: rem(0),
    fontFamily: fonts.font,
    color: colors.navActiveText,
    textAlign: 'left',
  },
  leadDescription: {
    '& p': {
      fontFamily: fonts.font,
      fontSize: rem(16),
      fontWeight: '400',
      lineHeight: rem(22),
      letterSpacing: rem(0),
      textAlign: 'left',
      color: colors.navText,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  leadSubTitle: {
    fontFamily: fonts.font,
    fontSize: rem(44),
    fontWeight: '800',
    lineHeight: rem(58),
    letterSpacing: rem(0),
    textAlign: 'left',
    marginBottom: rem(10),
    color: colors.navText,
  },
};
export const useLeadsStyles = createUseStyles(styles)