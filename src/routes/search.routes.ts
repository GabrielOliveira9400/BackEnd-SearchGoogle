import { Router } from 'express';
import { SearchGoogle } from '../services/search.services';
import { z } from 'zod';

const searchRoutes = Router();

const searchGoogle = new SearchGoogle();

searchRoutes.get("/", async (request, response) => {
    const { query } = request.query;
    const querySchema = z.string().min(1);

    try{
        querySchema.parse(query);
        const result = await searchGoogle.findByGoogle(query);
        return response.status(200).send(result)
    }

    catch(err){
        console.log(err);
        return response.status(500).send({error: 'Parametro inválido'});
    }

});


export { searchRoutes };