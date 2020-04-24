import React from 'react';
import './category.css';

const Category = ({ text, color, onClick }) => <div
    style={{ backgroundColor: color, boxShadow: "0 0 6px" + color }}
    className="Category-Box"
    onClick={onClick}
>
    <div className="Category-Box-Inner">
        {text}
    </div>
</div>

Category.defaultProps = {
    text: "Category", //user should be able to name categories
    color: "#73a6fc",
}

export default Category;