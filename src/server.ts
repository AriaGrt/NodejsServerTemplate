import express from 'express'
import { Request, Response } from 'express'

export default class Server {

    private readonly port: number

    public constructor(env: string) {
        this.port = env === 'prod' ? 8080 : 3000
    }

    public start() {
        const app = express()
        app.get('/', (req: Request, res: Response) => {
            res.send('Hello les gens')
        })
        app.listen(this.port, () => console.log('Serveur démarré'))
    }
}