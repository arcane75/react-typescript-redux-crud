import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, loadPosts } from '../state/actions/actions';
import './HomeStyle.scss';
import { RootState } from '../state/store'
import { useNavigate } from 'react-router-dom';
const Home = () => {

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

    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Explore CRUD Operation</h1>
                </div>
                <button onClick={handleAdd} className="btn btn-add">ADD Information</button>
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
                                posts && posts?.slice().reverse().map((post: any) => (
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