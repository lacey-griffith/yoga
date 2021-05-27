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

/*TODO:
dashboard Page -- Create a Navbar: Options(home, saved poses, logout)
                - Main Body, big hero image with mother teresa quote? Quick introduction and instructions on how to use site
                - Dropdown bar with body target_group options
                - Create a carrousel with all poses that match selected target_group
                - Create a session with saved poses that persists per user (similar to post to user relationship with just tech news)
*/
