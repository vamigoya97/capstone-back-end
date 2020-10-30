const { ObjectID } = require("mongodb")
const express = require("express")
const router = express.Router()

const listLocationsController = (req, res) => {
    db.collection('location').find().toArray( (err, results) => {
        if(err) console.error(err)
        res.send(results)
    })
}

const getLocationController = (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection('location').find(id).toArray( (err, result) => {
        if(err) throw err
        res.send(result)
    })
}
// const createLocationController = (req, res) => {
//     const location = {

//     }
//     res.json({ location })
// }
// const deleteLocationController = (req, res) => {
//     locations = locations.filter(location => location.id != req.params.id)
//     res.json({ locations })
// }

router.get("/", listLocationsController)
router.get("/:id", getLocationController)
// router.post("/", createLocationController)
// router.delete("/:id", deleteLocationController)

module.exports = router
