module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    option: {
      expiresIn: "7d",
    },
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: env("TRANSFER_TOKEN"),
  },
  // url: "/admin", // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
  // serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
});
