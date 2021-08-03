const db = require('../config/connection');
const { User, Place, Review } = require('../models');
const userSeeds = require('./userSeeds.json');
const placeSeeds = require('./placeSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Place.deleteMany({});
    await Review.deleteMany({});
    await User.create(userSeeds);
    const userData = await User.find({})
    console.log(userData[0].username)

    for (let i = 0; i < placeSeeds.length; i++) {
      const { _id } = await Place.create(placeSeeds[i]);
      const addExtratoPlace = await Place.updateOne(
        { _id: _id },
        {
          $set: {
            user: userData[i]._id,
          },
        }

      );
      console.log("addExtratoPlace", addExtratoPlace)
    }

    const placeData = await Place.find({})

    for (let i = 0; i < reviewSeeds.length; i++) {

      const { _id } = await Review.create(reviewSeeds[i]);

      const addExtratoPlace2 = await Review.updateOne(
        { _id: _id },
        {
          $set: {
            user: userData[i]._id,
            place: placeData[i]._id,
          },
        }

      );

      console.log("addExtratoPlace", addExtratoPlace2)

    }


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});