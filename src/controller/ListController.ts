import {FastifyRequest, FastifyReply} from "fastify";
import  { ListService } from '../services/ListServices'

class ListController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const   listService = new ListService();
        const   customers = await listService.execute();

        reply.send(customers);
    }
}

export {ListController}