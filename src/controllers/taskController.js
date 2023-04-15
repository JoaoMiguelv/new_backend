const tasksList = require("../../tasksList.json")

module.exports = class ScoreController {
    async findAll(req, res) {
        res.status(200).json({
            massage: 'Success',
            data: {
                tasksList
            }
        })
    }

    async findById(req, res) {
        const task = tasksList.find(item => item.id == req.params.id);
        if (task) {
            res.status(200).json({
                massage: 'Success',
                data: { ...task }
            })
        } else {
            res.status(404).json({ massage: 'Task not found!' })
        }
    }

    async create(req, res) {

        const { title, description, completed } = req.body;

        if (!title && !description) {
            return res.status(400).json({ massage: 'Title and Description do not exist!' });
        }

        tasksList.push({
            id: tasksList.length + 1,
            title: title,
            description: description,
            completed: completed
        });

        res.status(200).json({
            status: 'Success',
            data: tasksList
        });
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'id is required!' });
        }

        let task = tasksList.find(item => item.id == id);
        task.title = title;
        task.description = description;
        task.completed = completed;

        res.status(200).json({
            massage: 'Success',
            data: task,
        });
    }

    async delete(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'id is required!' });
        }

        let index = tasksList.findIndex(item => item.id == id);
        tasksList.splice(index, 1)

        res.status(200).json({
            massage: 'Task revomed with success!',
            data: tasksList
        });
    }

}