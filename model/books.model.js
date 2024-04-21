//create books on startup
const books = require("./books.mongo");
async function createBooksOnStartup() {
  const bookData = [
    {
      _id: "63657911922d375e25ad1b85",
      title: "The nya nya test book",
      comments: ["mew", "meow", "NYA"],
    },
    {
      _id: "63680748dad31302a987eaed",
      title: "Comment modification testnya",
    },
  ];

  try {
    for (const book of bookData) {
      const existingBook = await books.findOne({ _id: book._id });
      if (!existingBook) {
        await books.create(book);
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  createBooksOnStartup,
};
