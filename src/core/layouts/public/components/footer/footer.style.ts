import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { breakpoint } from "assets/styles/abstracts/mixins";
import { createUseStyles } from "react-jss";

const styles = {
  footer: {
    padding: rem(120) + ' ' + rem(0) + ' ' + rem(24) + ' ' + rem(0),
    backgroundColor: colors.footBackground,
    fontFamily: fonts.font,
    '& li:last-child $footMenuItem': { marginBottom: rem(0) },
    [breakpoint(768)]: {
      padding: rem(16) + ' ' + rem(0),
    },
  },
  marginToprights: {
    marginTop: rem(132),
    [breakpoint(768)]: {
      marginTop: rem(49),
    },
  },
  footer08: {
    padding: 0,
    overflow: 'hidden',
    background: colors.footBack,
    '& .footer-heading': {
      fontSize: rem(18),
      marginBottom: rem(30),
      [breakpoint(768)]: {
        '&.footer-heading-white': {
          color: colors.light,
        },
      },
    },
  },
  footerSocial: {
    display: 'flex',
    marginTop: rem(24),
    marginBottom: rem(44),
    '& li a': {
      color: colors.sosialIcon,
      marginRight: rem(22),
      fontSize: rem(18),
    },
  },
  footHeading: {
    fontFamily: fonts.fontBold,
    fontSize: rem(20),
    marginBottom: rem(42),
    fontWeight: '700',
    lineHeight: rem(22),
    color: colors.navText,
  },
  footerTxt: {
    fontFamily: fonts.font,
    fontSize: rem(16),
    fontWeight: '400',
    lineHeight: rem(24),
    textAlign: 'left',
    color: colors.footText,
  },
  copyRight: {
    fontFamily: fonts.font,
    color: colors.copyRightTxt,
    fontSize: rem(18),
    lineHeight: rem(30),
    fontWeight: '400',
    [breakpoint(767.98)]: {
      fontSize: rem(17),
    },
  },
  footMenuItem: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    fontWeight: '400',
    lineHeight: rem(20),
    fontSize: rem(18),
    marginBottom: rem(18),
    color: colors.titleBlack,
  },
  rightReserv: {
    fontFamily: fonts.font,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.navActiveText} `,
    fontWeight: '400',
    fontSize: rem(18),
    color: colors.navActiveText,
    lineHeight: rem(30),
    [breakpoint(768)]: {
      fontSize: rem(16),
    },
  },
  verticalLine: {
    margin: rem(0) + ' ' + rem(10),
  },
  logoImg: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: rem(26),
    '& img': {
      display: 'block',
      width: rem(148),
      height: rem(40),
    },
  },
};

export const useFooterStyles = createUseStyles(styles);
