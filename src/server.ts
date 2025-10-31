import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"

import { router } from "./routes"

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

//instaceof é um operador usado para verificar se um objeto foi criado a partir de uma determinada classe ou construtor, retorna true ou false
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(3333, () => {
    console.log("SERVIDOR ONLINE")
})