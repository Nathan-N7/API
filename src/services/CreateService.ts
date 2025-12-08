import prismaClient from "../prisma";

class CreateService{
    async execute() {
        console.log("rota chamada");
        return {ok:true};
    }
}

export {CreateService}