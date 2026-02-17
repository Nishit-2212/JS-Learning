// To measure execution time and many more....
// db.customer_spending.find({Age:{$lt:35}}).explain('executionStats')
// executionStats: {
//     executionSuccess: true,
//     nReturned: 326171,
//     executionTimeMillis: 2069,
//     totalKeysExamined: 0,
//     totalDocsExamined: 1000000,
//     executionStages: {
//       stage: 'COLLSCAN',
//       filter: { Referral: { '$eq': 0 } },
//       nReturned: 326171,
//       executionTimeMillisEstimate: 390,
//       works: 1000001,
//       advanced: 326171,
//       needTime: 673829,
//       needYield: 0,
//       saveState: 1000,
//       restoreState: 1000,
//       isEOF: 1,
//       direction: 'forward',
//       docsExamined: 1000000
//     }
//   }




