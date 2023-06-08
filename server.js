const app = require('./app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Le serveur est démarrer à l'adresse : http://localhost:${PORT}`)
})