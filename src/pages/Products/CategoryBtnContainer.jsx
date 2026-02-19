import React, { useState } from 'react';

const CategoryBtnContainer = ({ filterByCategory, caterories, reloadAllProducts }) => {
    const [activeBtn, setaActiveBtn] = useState(false)


    return (
        <div id="categories-container"
            className="flex flex-wrap gap-4 w-11/12 md:w-full mx-auto  justify-center my-4 uppercase">
            <button
                onClick={reloadAllProducts}
                className="btn btn-outline border-slate-400 rounded-full active category-button">All</button>
            {
                caterories.map(category => <button onClick={() => filterByCategory(category)} key={category} className={`bg-primary text-white'} 
                        btn btn-outline border-slate-400 rounded-full uppercase`}>
                    {category}</button>)
            }
        </div>
    );
};

export default CategoryBtnContainer;