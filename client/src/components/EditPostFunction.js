import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditPostFunction = () => {
    const { id } = useParams();
    const [state, setState] = useState({
            username: "",
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
                .then(response => {
                    setState((prevProps) => {
                        return {
                            ...prevProps,
                            username: response.data.username,
                            description: response.data.description,
                            duration: response.data.duration,
                            date: new Date(response.data.date),
                        }
                    })
                    }).catch((error) => {
                    console.log(error)
                });

        axios.get('http://localhost:5000/users/')
            .then((response) => {
                if(response.data.length > 0) {
                    setState((prevProps) => {
                        return {
                            ...prevProps,
                            users: response.data.map((user) => user.username)
                        }
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;

        setState((prevProps) => {
            return {
                ...prevProps,
                [name] : value,
            }
        })
    }

    function onChangeDate(date) {
        setState(prevProps => {
            return {
                ...prevProps,
                date: date,
            }
        })
    }

    function onSubmit(e) {
        e.preventDefault();

        const post = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date,
        };

        axios.patch(`http://localhost:5000/posts/update/${id}`, post)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
            window.location = '/'
    }
    return (
        <div>
            <h3>Edit Post</h3>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <select 
                            className='form-control'
                            required
                            name='username'
                            value={state.username}
                            onChange={handleChange}>
                                {
                                    state.users.map((user) => {
                                        return <option 
                                            key={user}
                                            value={user}>
                                                {user}
                                            </option>
                                    })
                                }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input 
                            type='text'
                            className='form-control'
                            required
                            name='description'
                            value={state.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Duration: (in minutes)</label>
                        <input 
                            type='text'
                            className='form-control'
                            name='duration'
                            value={state.duration}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Date</label>
                        <div>
                            <DatePicker 
                            selected={state.date}
                            onChange={onChangeDate}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='form-group'>
                        <input type='submit' value='Edit Post' className='btn btn-primary' />
                    </div>
                </form>
            </div>
    )
}

export default EditPostFunction;