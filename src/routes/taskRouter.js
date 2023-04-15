const express = require('express')
const router = express.Router()
const taskController = require("../controllers/taskController")
this.taskController = new taskController()

router.get('/', this.taskController.findAll);
router.get('/:id', this.taskController.findById);
router.post('/', this.taskController.create);
router.put('/:id', this.taskController.update);
router.delete('/:id', this.taskController.delete);

module.exports = router;