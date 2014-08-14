var db = require('../lib/config/db')
  , Organization = require('../lib/models/organization');

exports.up = function (next) {
  var organization = new Organization({
    name: 'The Center for Women and Children in Crisis'
  });

  organization.save(function (err) {
    if (err)
      next(err);
    else
      next();
  });
};

exports.down = function (next) {


  Organization.findOne({name: 'The Center for Women and Children in Crisis'}, function (err, organization) {
    if (err)
      next(err);
    organization.remove(function (err) {
      if (err)
        next(err);
      else
        next();
    })
  });

};
