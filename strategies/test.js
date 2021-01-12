/**
 * OAuth Stategy for GitHub.
 */

const Strategy = require("../lib/test-strategy").Strategy

module.exports = (options, provider, callback) => new Strategy(options, (req, token, tokenSecret, profile, done) => {
  callback(req, token, tokenSecret, {
    id: profile.id || profile.username,
    name: profile.displayName,
    username: profile.username,
    uri: profile.uri,
    provider: provider.id,
  }, done)
})
