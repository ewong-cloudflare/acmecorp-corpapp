import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const abran = await prisma.employee.upsert({
        where: { email: 'agilham2h@acmecorp.com' },
        update: {},
        create: {
            id: '791101',
            email: 'agilham2h@acmecorp.com',
            name: 'Abran Gilham',
            position: 'Account Representative IV'
        
        },
    })

    const emlynn = await prisma.employee.upsert({
        where: { email: 'ecaudell2i@acmecorp.com' },
        update: {},
        create: {
            id: '801010',
            email: 'ecaudell2i@acmecorp.com',
            name: 'Emlynn Caudell',
            position: 'Database Administrator II'
        },
    })

    const inigo = await prisma.employee.upsert({
        where: { email: 'icutridge2j@acmecorp.com' },
        update: {},
        create: {
            id: '850810',
            email: 'icutridge2j@acmecorp.com',
            name: 'Inigo Cutridge',
            position: 'Support Technician', 
        },
    })

    const donny = await prisma.employee.upsert({
        where: { email: 'dferrelli2k@acmecorp.com' },
        update: {},
        create: {
            id: '840705',
            email: 'dferrelli2k@acmecorp.com',
            name: 'Donny Ferrelli',
            position: 'Developer IV',
        },
    })

    const penny = await prisma.employee.upsert({
        where: { email: 'pcaddick2l@acmecorp.com' },
        update: {},
        create: {
            id: '800915',
            email: 'pcaddick2l@acmecorp.com',
            name: 'Penny Caddick',
            position: 'Executive Secretary',
        },
    })

    console.log({ abran, emlynn, inigo, donny, penny })  
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })