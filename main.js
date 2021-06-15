const app = require("./server");
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}
  
  http://localhost:${PORT}/
  `);
});
