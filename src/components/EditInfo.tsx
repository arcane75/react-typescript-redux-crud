import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GetPostId, UpdatePost } from '../state/actions/actions';
import "./AddInfoStyle.scss";

const EditInfo = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();


    let { id }: any = useParams();

    // const {post} = useSelector((state) => state);

    useEffect(() => {
        dispatch<any>(GetPostId(id))
    }, []);

    const [state, setState] = useState<{
        title: string;
        body: string
    }>({
        title: "",
        body: ""
    })

    // console.log("state", state);
    const { title, body } = state;

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch<any>(UpdatePost(state, id));
        navigate("/");
    }
    return (
        <>
            <div className="formcontainer">
                <div className="card">
                    <h1 className="card_title">Update Information</h1>
                    <h5>ID: {id}</h5>
                    <form className="card_form" onSubmit={handleSubmit}>

                        <div className="input">
                            <input value={title || ""}
                                type="text"
                                name="title"
                                placeholder="Add Title" className="input_field"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input value={body || ""}
                                type="text"
                                name="body"
                                placeholder="Add Description" className="input_field"
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

export default EditInfo;