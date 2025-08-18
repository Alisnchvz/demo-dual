/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect =(callback)=>{
    MongoClient.connect("mongodb+srv://jeniferchavez878:j7abjVGOA7pvEarW@democluster0.8xp485m.mongodb.net/?retryWrites=true&w=majority&appName=DemoCluster0"
    )
    .then(client => {
        console.log('Connected!!');
        _db= client.db();
        callback();
    })
    .catch(err => {
    console.log(err);
    } );
};

module.exports = MongoConnect;

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
};

exports.MongoConnect = MongoConnect;
exports.getDb= getDb;
*/