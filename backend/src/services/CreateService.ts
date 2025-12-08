import prismaClient from "../prisma";

interface CreateProps {
    name: string;
    email: string;
}

class CreateService{
    async execute({name, email}: CreateProps) {
        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        }
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })
        return customer;
    }
}

export {CreateService}