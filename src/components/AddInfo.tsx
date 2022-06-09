import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddPost } from '../state/actions/actions';
import "./AddInfoStyle.scss";

const AddInfo = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const [error, setError] = useState(" ");
    const [state, setState] = useState<{
        id: number;
        userId: number;
        title: string;
        body: string
    }>({
        id: 110,
        userId: 110,
        title: "",
        body: ""
    });

    const { id, userId, title, body } = state;

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!id || !userId || !title || !body) {
            setError("Please input all ");
            console.log("Please input all");
        } else {
            dispatch<any>(AddPost(state));
            navigate("/");
            setError(" ");
        }
    }
    return (
        <>
            <div className="formcontainer">
                {error && <h4 className="error">{error}</h4>}
                <div className="card">
                    <h1 className="card_title">Add Information</h1>
                    {error && <h4>{error}</h4>}
                    <form className="card_form" onSubmit={handleSubmit}>
                        <div className="input">
                            <input value={id} type="number"
                                name="id"
                                placeholder="Add userID" className="input_field" required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input value={userId} type="number"
                                name="userId"
                                placeholder="Add ID" className="input_field" required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input value={title} type="text"
                                name="title"
                                placeholder="Add Title" className="input_field" required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input value={body} type="text"
                                name="body"
                                placeholder="Add Description" className="input_field" required
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="card_button"
                            onChange={handleChange}
                        >Submit</button>
                        <button type="submit" className="card_button"
                            onClick={() => navigate('/')}
                        >Back</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default AddInfo;