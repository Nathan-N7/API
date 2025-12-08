import {FastifyRequest, FastifyReply} from "fastify";
import {DeleteService} from '../services/DeleteService'

class DeleteControler {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.query as {id: string}
        const customerService = new DeleteService();
        const customer = await customerService.execute({id});
        reply.send(customer);
    }
}

export {DeleteControler}