import {FastifyRequest, FastifyReply} from "fastify";
import {CreateService} from '../services/CreateService';

class CreateController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {name, email} = request.body as {name: string, email: string};

        const customerService = new CreateService()
        const customer = await customerService.execute({name, email});
        reply.send(customer);
    }
}

export {CreateController}