import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
app.use;

app.use(express.json());
app.use(cors());


//const users = [];

app.post('/usuarios', async (req, res) => {  

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    });

    //users.push(req.body);

    res.status(201).json(req.body);
});

app.get('/usuarios', async (req, res) => {

    let users = [];

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        });
    } else {
        users = await prisma.user.findMany();

    }

    res.status(200).json(users);




});

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    });

    //users.push(req.body);

    res.status(201).json(req.body);
});

app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    });

    //users.push(req.body);

    res.status(200).json({ message: "usuario deletado com sucesso!" });
});


app.listen(3000)





