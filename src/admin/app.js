import Logo from "./extensions/russ-logo.svg";
import Favicon from "./extensions/favicon.svg";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
    // Replace the favicon
    head: {
      favicon: Favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["id"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
