import express from "express";

const app = express();

app.use(express.json());

const port = 1337;
app.listen(port, async () => {
	console.log("app is listening on port", port);
});
