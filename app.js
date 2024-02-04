const { MongoClient } = require("mongodb");

async function run() {
  const uri =
    "mongodb+srv://rzepeda:Noc.turnip25@cluster0.id972zo.mongodb.net/";

  const client = new MongoClient(uri);
  await client.connect();

  const dbName = "golemaire";
  const collectionName = "customers";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  // const customers = [
  //   {
  //     name: "Ralph",
  //     lastName: "Zepeda",
  //     contactNo: "09291387410",
  //     acUnits: [
  //       {
  //         dateInstalled: new Date(),
  //         brand: "Daikin",
  //         model: "queen",
  //         hp: 1.5,
  //         assignedTechnician: "Mark",
  //       },
  //     ],
  //     paid: false,
  //   },
  // ];

  const findRalph = { name: "Ralph" };
  const projection = { name: true, _id: false };

  collection.find(findRalph, projection).toArray((err, result) => {
    if (err) throw err;

    console.log(result);

    client.close();
  });
}
run().catch(console.dir);
