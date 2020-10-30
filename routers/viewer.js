const { ObjectID } = require("mongodb")
const express = require("express")
const router = express.Router()

const listViewersController = (req, res) => {
    db.collection('viewer').find().toArray( (err, results) => {
        if(err) console.error(err)
        res.send(results)
    })
}

const getViewerController = (req, res) => {
    let id = ObjectID(req.params.id)
    db.collection('viewer').find(id).toArray( (err, result) => {
        if(err) throw err
        res.send(result)
    })
}
// const createViewerController = (req, res) => {
//     const viewer = {

//     }
//     res.json({ viewer })
// }
// const deleteViewerController = (req, res) => {
//     viewers = viewers.filter(Viewer => Viewer.id != req.params.id)
//     res.json({ viewers })
// }

router.get("/", listViewersController)
router.get("/:id", getViewerController)
// router.post("/", createViewerController)
// router.delete("/:id", deleteViewerController)

module.exports = router
