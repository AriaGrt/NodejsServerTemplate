import express from 'express'
import { Request, Response } from 'express'

export default class Server {

    private readonly port: number

    public constructor(port: number) {
        this.port = port
    }

    public start() {
        const app = express()
        app.get('/', (req: Request, res: Response) => {
            res.send('Hello les gens')
        })
        app.listen(this.port, () => console.log('Serveur démarré'))
    }
}