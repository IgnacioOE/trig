import router from "./src/routes/triRoute";
import express from 'express';

const app = express();
const PORT=3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});