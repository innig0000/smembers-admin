import { PrismaClient } from '@prisma/client';

const handler = async (req, {params}) => {
    const method = req.method;
    const param1 = params.slug[0];
    const param2 = params.slug[1];
    const prisma = new PrismaClient();
    const convertBigIntToString = (obj) => {
        if (typeof obj === 'bigint') {
            return obj.toString();
        } else if (Array.isArray(obj)) {
            return obj.map(convertBigIntToString);
        } else if (obj !== null && typeof obj === 'object') {
            return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, convertBigIntToString(value)]));
        }
        return obj;
    }

    switch (method) {

        case 'GET':
            if (param1 === 'table') {
            const page = req.url.split('?')[1].split('&')[0].split('page=')[1] || 1;
            const searchWord = req.url.split('&')[1].split('q=name:')[1];
            const pageSize = 20;
            const offset = (page - 1) * pageSize;
            const totalItems = await prisma.store.count({
                where: {
                    OR: [
                        {name: {contains: searchWord}},
                    ],
                },
            });
            const totalPages = Math.ceil(totalItems / pageSize)

            const data = await prisma.store.findMany({
                where: {
                    OR: [
                        {name: {contains: searchWord}},
                    ],
                },
                take: parseInt(pageSize),
                skip: parseInt(offset),
            });
            const serializedData = convertBigIntToString(data);
            return new Response(JSON.stringify({
                data: serializedData,
                total_items: totalItems,
                current_page: page,
                total_pages: totalPages,
                page_size: pageSize,
            }));
            } else if (param1 === 'detail') {
                const id = Number(param2);
                const data = await prisma.store.findFirst({
                    where: {
                        id: id,
                    },
                })
                const serializedData = convertBigIntToString(data);
                return new Response(JSON.stringify(serializedData))
            } else {
                return new Response(JSON.stringify({message: "잘못된 param 입니다."}))
            }
            break;

        default:
            return new Response(JSON.stringify({error: "잘못된 param 입니다"}), {status: 400});
            break;
    }
};

export {handler as GET, handler as POST, handler as PUT, handler as DELETE}