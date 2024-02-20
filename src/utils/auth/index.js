const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const GQLLocalStrategy = require('./strategies/local-graphql.strategy');

const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GQLLocalStrategy);

