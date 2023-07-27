import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Categories.module.css';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        {/* <Link to={`/category/${category.id}`}>{category.name}</Link> */}
                        <ul className='border border-danger'>
                            <div >
                                <li><Link className="hover-underline-animation" to={`/category/${category.id}`}>{category.name}</Link></li>
                            </div>

                        </ul>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Categories;