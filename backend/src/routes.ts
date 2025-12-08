import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateController } from "./controller/CreateController";
import { ListController } from './controller/ListController'
import { DeleteControler } from './controller/DeleteControler'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    });
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateController().handle(request, reply);
    });
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListController().handle(request, reply);
    });
    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteControler().handle(request, reply);
    });
}
