const db = require('../config/connection');
const { User, Place } = require('../models');
const userSeeds = require('./userSeeds.json');
const placeSeeds = require('./placeSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Place.deleteMany({});
    await User.create(userSeeds);

for (let i = 0; i < placeSeeds.length; i++) {
      const { _id, placeAuthor } = await Place.create(placeSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: placeAuthor },
        {
          $addToSet: {
            places: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});