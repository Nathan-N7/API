import {FastifyRequest, FastifyReply} from "fastify";
import {CreateService} from '../services/CreateService';

class CreateController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new CreateService()

        const customer = await customerService.execute();
        reply.send(customer);
    }
}

export {CreateController}