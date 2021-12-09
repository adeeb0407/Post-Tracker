import Post from '../models/post.module.js';

export const fetchPosts = (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

export const fetchPost = (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

export const createPost = (req, res) => {
    //const {username, description, duration, data} = req.body;
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newPost = new Post( {
        username,
        description,
        duration,
        date,
    });
    newPost.save()
        .then(() => res.json('Post added successfully...'))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

export const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post deleted successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

export const updatePost = (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.username = req.body.username;
            post.description = req.body.description;
            post.duration = Number(req.body.duration);
            post.date = Date.parse(req.body.date);

            post.save()
            .then(() => res.json('Post updated successfully...'))
            .catch(err => res.status(400).json(`Error: ${err}`));
        });
}