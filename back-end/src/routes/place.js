const express = require('express');
const router = express.Router();
const MapsService = require('../services/MapsService');
const jwtUtils = require('../utils/JwtUtil');

router.use(jwtUtils.authenticateToken);

router.post('/search-places', async (req, res) => {
    try {
        const textQuery = req.body.textQuery;
        const places = await MapsService.searchPlaces(textQuery);
        res.status(200).json(places);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al realizar la solicitud a la API de Google Maps' });
    }
});

router.get('/place-details/:placeId', async (req, res) => {
    try {
        const placeId = req.params.placeId;
        const placeDetails = await MapsService.getPlaceDetails(placeId);
        res.status(200).json(placeDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener detalles del lugar' });
    }
});

module.exports = router;
