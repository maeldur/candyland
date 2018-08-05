// Sequelize
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  // SQLite only
  storage: "./database.sqlite"
});

const Candidate = sequelize.define("candidate", {
  id: {
    type: Sequelize.BIGINT,
    field: "candidate_id",
    autoIncrement: true,
    primaryKey: true
  },
  displayName: {
    type: Sequelize.STRING,
    field: "display_name"
  },
  priority1: {
    type: Sequelize.STRING(250)
  },
  priority2: {
    type: Sequelize.STRING(250)
  },
  priority3: {
    type: Sequelize.STRING(250)
  },
  philosophy: {
    type: Sequelize.TEXT("medium")
  },
  extendedBiography: {
    type: Sequelize.TEXT("medium"),
    field: "extended_biography"
  }
});

exports.Candidate = Candidate;

exports.developmentResync = function() {
  // force true will drop the entire table every run of server.
  Candidate.sync({ force: true }).then(() => {
    // Table created
    return Candidate.create({
      id: 1,
      displayName: "Evan McMullin"
    });
  });
};
