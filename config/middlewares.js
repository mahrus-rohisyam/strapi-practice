module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "Salt Academy <life.saltacademy.id",
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::session",
    config: {
      rolling: true,
      renew: true,
    },
  },
  "strapi::favicon",
  "strapi::public",
];
