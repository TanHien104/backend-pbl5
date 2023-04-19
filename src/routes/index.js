import authRouter from './auth'
import insertRouter from './insert'
import categoryRouter from './category'
import priceRouter from './price'
import areaRouter from './area'
import postRouter from './post'

const initRoutes = (app) => {
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/insert',insertRouter)
    app.use('/api/v1/category',categoryRouter)
    app.use('/api/v1/post',postRouter)
    app.use('/api/v1/price',priceRouter)
    app.use('/api/v1/area',areaRouter)
    return app.use('/',(req,res) => {
        res.send('server on ...')
    })
}

export default initRoutes