const { ObjectID } = require("mongodb")
const express = require("express")
const router = express.Router()

const listScreeningsController = (req, res) => {
    db.collection('screening').find().toArray( async (err, screenings) => {
        if(err) {console.error(err)}
        console.log(screenings)     
        const screeningsWithLocations = await screenings.map( async screening => {
            let loc;
            console.log("before")
            await db.collection('location').find({ "_id": screening.location_id }).toArray((err, location) => {
                loc = location[0]
                console.log(loc)
                console.log("inside")
            })
            console.log("after")
            screening.location = await loc || {}
            return screening
        })
        res.send(screeningsWithLocations)
    })
}

const getScreeningController = (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection('screening').find(id).toArray( (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

// const getScreeningsLocationController = (req, res, next) => {
//     let id = ObjectID(req.params.id)
//     db.collection('screening').find(id)

//     db.collection('location').find(id)
//     // .toArray( (err, item) => {
//     //     if(err) throw err
//         // let loc = db.collection(`${item.$ref}`).find({ "_id": item.$id })
//         //res.send(db.collection(`${item.$ref}`).find({ "_id": item.$id }))
// }

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
//router.get("/:id/location/:locationId", getScreeningsLocationController)
// router.post("/", createScreeningController)
// router.delete("/:id", deleteScreeningController)

module.exports = router
