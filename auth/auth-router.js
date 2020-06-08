const router = require('express').Router();
const axios = require('axios');
const db = require('./auth-model');

router.get('/login', (req, res) => {
    const token = req.headers.authorization;
    console.log('token', token)
    axios.post(`https://dev-815303.okta.com/oauth2/default/v1/introspect?client_id=0oadb0iolJz1QUG2c4x6&token=${token}&token_type_hint=id_token`)
        .then(response => {
            console.log(response.data)
            // check db for email address
            db.login(response.data.username)
                .then((user) => {
                    // check if user is returned
                    if (user.length > 1) {
                        res.status(200).json({
                            isRegistered: true,
                            name: response.data.name,
                            email: response.data.username
                        })
                        // if array is empty
                    } else {
                        res.status(200).json({
                            isRegistered: false,
                            name: response.data.name,
                            email: response.data.username
                        })
                    }
                })
                .catch(err => res.status(400).json(err.message))
        })
        .catch(err => res.status(500).json(err.message))
})

module.exports = router;