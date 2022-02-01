const Chat = require("../models/chatModel");
const random = require('random-name')


// C - Create



exports.create = function (req, res) {
    const body = req.body;
    console.log (req.body);
    const chat = new Chat({
        name: random.first(),
        message: body.message
    });
    chat.save();
    return res.status(200).json({
        success: true,
        data: chat
    });
}

// R - Read

exports.read = function (req, res) {
    const query = req.query;
    Chat.findOne({
        name: query.name
}, function (err, chat) {
        if (err) return res.status(400).json({
            success: false,
            message: "Error"
        })

        if (chat) {
            return res.status(200).json({
                success: true,
                message: "Found record",
                data: chat
            })
        }
        return res.status(404).json({
            success: false,
            message: "Chat not found",
        });
    });
}

// Update

exports.update = function (req, res) {
    const body = req.body;
    Chat.findOneAndUpdate({
        name: body.name
    }, {
        $set: {
            message: body.message
        }
    }, (err, chat) => {
        if (err) return res.status(400).json({
            success: false,
            message: "Error while updating chat"
        });

        if (chat) {
            return res.status(200).json({
                success: true,
                message: "Chat updated successfully"
            });
        }

        return res.status(404).json({
            success: false,
            message: "Chat not found"
        })
    });
}

// D - Delete

exports.delete = function (req, res) {
    const body = req.body;
    Chat.deleteOne({
        name: body.name
    }, function (err, chat) {
        if (err) return res.status(400).json({
            success: false,
            message: "Error while deleting chat"
        });

        if (chat) {
            return res.status(200).json({
                success: true,
                data: chat,
                message: "Chat deleted successfully"
            });
        }

        return res.status(404).json({
            success: false,
            message: "Chat not found"
        });
    });
}



// const Todo = require("../models/Todo");

// // CRUD - Create, Read, Update, Delete
// exports.add = function (req, res) {
//     const body = req.body;
//     const todo = new Todo({
//         title: body.title,
//         list: body.list
//     });
//     todo.save();
//     return res.status(200).json({
//         success: true,
//         data: todo,
//         message: "Todo added successfully"
//     });
// }

// exports.get = function (req, res) {
//     const query = req.query;
//     Todo.findOne({ title: query.title }, function (err, todo) {
//         if (err) return res.status(400).json({
//             success: false,
//             message: "Error while getting todo"
//         });
//         if (todo) {
//             return res.status(200).json({
//                 success: true,
//                 data: todo,
//                 message: "Todo fetched successfully"
//             });
//         }
//         return res.status(404).json({
//             success: false,
//             message: "Todo not found"
//         });
//     });
// }

// exports.delete = function (req, res) {
//     const body = req.body;
//     Todo.findOneAndDelete({ title: body.title }, (err, todo) => {
//         if (err) return res.status(400).json({
//             success: false,
//             message: "Error while deleting todo"
//         });
//         return res.status(200).json({
//             success: true,
//             data: todo,
//             message: "Todo deleted successfully"
//         });
//     });
// }

// exports.update = function (req, res) {
//     const body = req.body;
//     Todo.findOneAndUpdate(
//         { title: body.oldTitle },
//         { list: body.list, title: body.newTitle },
//         (err, todo) => {
//             if (err) return res.status(400).json({
//                 success: false,
//                 message: "Error while updating todo"
//             });
//             if (todo) {
//                 return res.status(200).json({
//                     success: true,
//                     data: todo,
//                     message: "Todo updated successfully"
//                 });
//             }
//             return res.status(404).json({
//                 success: false,
//                 message: "Todo unable to update"
//             });
//         }
//     );
// }

// exports.updateList = function (req, res) {
//     const body = req.body;
//     Todo.findOneAndUpdate(
//         { title: body.title },
//         { $push: { list: body.list } },
//         (err, todo) => {
//             if (err) return res.status(400).json({
//                 success: false,
//                 message: "Error while updating todo"
//             });
//             return res.status(200).json({
//                 success: true,
//                 data: todo,
//                 message: "Todo updated successfully"
//             });
//         }
//     );
// }


// // $addToSet
// // $push