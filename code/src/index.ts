import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("*", (req: express.Request, res: express.Response) => {
    res.status(404).json({ message: "Page not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});