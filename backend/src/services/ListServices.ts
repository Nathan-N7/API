import { cursorTo } from "readline";
import prismaClient from "../prisma";

class ListService {
    async execute() {
        const   customers = await prismaClient.customer.findMany();
        return  customers;
    }
}

export {ListService}