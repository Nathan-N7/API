import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface DeleteProps {
    id: string;
}

class DeleteService {
    async execute({id}: DeleteProps) {
        if (!id) {
            throw new Error("Solicitação invalida");
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        });
        if (!findCustomer) {
            throw new Error("id não encontrado");
        }
        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })
        return {message: "Deletado com sucesso!"}
    }
}

export {DeleteService}