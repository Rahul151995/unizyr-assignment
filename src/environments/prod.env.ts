import { Environment } from './env'

export const ProdEnvironment: Environment = {
    db_url: "mongodb+srv://demo:demo@cluster0.cjcjs.mongodb.net/unizyr?retryWrites=true&w=majority",
    jwt_secret: "prodSecret"
}