const express = require('express');
const route = express.Router();
const axios = require('axios')

const hostPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 3000,
})

route.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await hostPokemon.get('/pokemon?limit=1050').then(result => {
      console.log('result: ', result.data)
      return result.data
    }).catch(error => {
      console.log('error →→→ ', error)
    })
    return res.status(200).json({ response: pokemons })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      alerta: 'Erro interno da servidor'
    })
  }
})

route.get('/', (req, res) => {
  try {
    return res.status(200).json({ teste: 'get'})
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      alerta: 'Erro interno da servidor'
    })
  }
})
module.exports = route
