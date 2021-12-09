import User from '../models/user.model.js';

export const fetchUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
};

export const createUser = (req, res) => {
    const username = req.body.username;
    //const {username} = req.body;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added successfully...'))
        .catch(err => res.status(400).json(`Error: ${err}`));
};
