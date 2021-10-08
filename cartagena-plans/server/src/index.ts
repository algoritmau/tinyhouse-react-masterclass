import express from 'express'
import { plans } from './plans'

const app = express()
const port = 9000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Plans route
app.get('/plans', (_, res) => res.send(plans))

// Delete plan route
app.post('/delete-plan', (req, res) => {
  const planId: number = req.body.id

  for (let i = 0; i < plans.length; i++) {
    if (plans[i].id === planId) return res.send(plans.splice(i, 1))
  }
})

app.listen(port, () =>
  console.log(
    `🚀 App listening on port ${port}! Visit http://localhost:${port} to see the app.`
  )
)
