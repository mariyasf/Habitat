import React from 'react';

const CategoryList = ({ list, setSelectedCategoryList }) => {
    const { image, name, category } = list

    const handleClick = () => {
        setSelectedCategoryList(category);
    };
    return (
        <div onClick={handleClick} className="card card-side bg-base-100  mb-5">
            <figure>
                <img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>#{category}</p>
            </div>
        </div>
    );
};

export default CategoryList;