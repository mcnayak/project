const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */
/*
module.exports = nforce.createConnection({
  clientId: '3MVG9oNqAtcJCF.HJ7Os.EETzcC.4G11ggh4bQNmMMwiAuWPMeZZgycgN3iNVsA4cykVjxlbqH5hB4Jtl4b8F',
  clientSecret: '80F9F3AAA5104995E59AE29F764DA4D4A8A0C6C0D1020C4A9614A1E3FA5B304E',
  redirectUri: 'https://login.salesforce.com.force.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: 'mnayak@devhub.org',
  password: 'welcome3fHfSTmLevum7w8a5riA13lN9',
  oauth: {
    access_token: '6Cel800Df2000001LNlk888f2000000TqdJKgpHJ24d6lgWRdQM6tscyKO0fmcET72T6ab4yKMDh8G8AfZFodi2qrxJncp8esPWrE5i3gJO',
    instance_url: 'https://chandra-dev.my.salesforce.com',
  },
}); */

module.exports = nforce.createConnection({
  clientId: process.env.SF_CLIENT_ID,
  clientSecret: process.env.SF_CLIENT_SECRET,
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: process.env.SF_USERNAME,
  password: process.env.SF_PASSWORD,
  oauth: {
    access_token: process.env.SF_ACCESS_TOKEN,
    instance_url: process.env.SF_INSRANCE_URL,
  },
});

