const { ObjectID } = require("mongodb")
const express = require("express")
const router = express.Router()

const listScreeningsController = (req, res) => {
    db.collection('screening').find().toArray( (err, results) => {
        if(err) console.error(err)
        res.send(results)
    })
}

const getScreeningController = (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection('screening').find(id).toArray( (err, result) => {
        if(err) throw err
        res.send(result)
    })
}
// const createScreeningController = (req, res) => {
//     const screening = {

//     }
//     res.json({ screening })
// }
// const deleteScreeningController = (req, res) => {
//     screenings = screenings.filter(Screening => Screening.id != req.params.id)
//     res.json({ screenings })
// }

router.get("/", listScreeningsController)
router.get("/:id", getScreeningController)
// router.post("/", createScreeningController)
// router.delete("/:id", deleteScreeningController)

module.exports = router
