import express from 'express'
import champion from './routes/ChampionsRoutes.js'


const router = express.Router()

router.use('/champion' , champion)


export default router