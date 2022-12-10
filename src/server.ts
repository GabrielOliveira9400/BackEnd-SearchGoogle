import express from 'express';
import { searchRoutes } from './routes/search.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use('/search',searchRoutes);
app.listen(3333, () => console.log('Server is running'));