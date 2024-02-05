const { MongoClient, ObjectId } = require("mongodb");

async function run() {
  const uri =
    "mongodb+srv://rzepeda:Noc.turnip25@cluster0.id972zo.mongodb.net/";

  const client = new MongoClient(uri);
  await client.connect();

  const dbName = "golemaire";
  const collectionName = "customers";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const findCustomerQuery = { _id: ObjectId("65bf7a28ce029024d459549e") };

  try {
    const findCustomer = await collection.findOne(findCustomerQuery);
    console.log(
      `${findCustomer.name} ${findCustomer.lastName} \nUserId: ${findCustomer._id}`
    );

    const customerId = findCustomer._id;
  } catch (err) {
    console.log(err);
  }

  await client.close();
}
run().catch(console.dir);
