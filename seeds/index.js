const seedPoses = require('./pose-seeds')
const seedTargetGroup = require('./target-group-seeds')
const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedPoses();
    console.log('\n----- POSES SEEDED -----\n');
    await seedTargetGroup();
    console.log('\n----- TARGETS SEEDED -----\n');


    process.exit(0);
};

seedAll();