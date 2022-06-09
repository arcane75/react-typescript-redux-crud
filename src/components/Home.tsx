import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, loadPosts } from '../state/actions/actions';
import './HomeStyle.scss';
import { RootState } from '../state/store'
import { useNavigate } from 'react-router-dom';
import httpReq from '../services/http.service';
const Home = () => {

    const [sort, setSort] = useState(true);
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    let dispatch: any = useDispatch();
    const { posts }: any = useSelector((state: RootState) => state.crud);

    useEffect(() => {
        dispatch(loadPosts())
    }, []);
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/addinfo');
    }
    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete")) {
            dispatch(DeletePost(id));
            dispatch(loadPosts());
        }
    };

    const handleSort = () => {
        setSort(!sort);
    }

    // Implement later................
    // const handleReset = () => {
    //     loadPosts();
    // }
    // Implement later................
    const handleSearch = async (e: any) => {
        e.preventDefault();
        return await httpReq.get(`/postdata?q=${value}`)
            .then(res => {
                setData(res.data);
                setValue("");
            }).catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Explore CRUD Operation</h1>
                </div>
                <div>
                    <button onClick={handleAdd} className="btn btn-add">ADD Information</button>
                    <button onClick={handleSort} className="btn search">Sort by Id</button>
                    <form onSubmit={handleSearch}>
                        <input
                            value={value}
                            className="btn search-input search"
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit" className="btn search">Search</button>
                    </form>

                </div>
                <div className="panel-body">
                    <table className="table-latitude">
                        <thead>
                            <th>UserId</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </thead>
                        <tfoot>
                            <tr>

                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                sort ? posts && posts?.slice().reverse().map((post: any) => (
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td className="btn-position">
                                            <button onClick={() => navigate(`/editinfo/${post.id}`)} className="btn btn-Update">Update</button>

                                            <button onClick={() => handleDelete(post.id)} className="btn btn-Delete">Delete</button>
                                        </td>
                                    </tr>
                                )) : posts && posts?.map((post: any) => (
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td className="btn-position">
                                            <button onClick={() => navigate(`/editinfo/${post.id}`)} className="btn btn-Update">Update</button>

                                            <button onClick={() => handleDelete(post.id)} className="btn btn-Delete">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Home;