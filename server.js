const express = require("./app")
const app = express();
const port = process.env.PORT || 8888;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})