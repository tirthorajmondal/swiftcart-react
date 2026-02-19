import { useState } from 'react';

const CategoryBtnContainer = ({ categories, loadCategoryProduct }) => {
    const [activeCategory, setActiveCategory] = useState('all')

    const handlefilter = (category) => {
        setActiveCategory(category)
        loadCategoryProduct(category)
    }
    return (
        <div
            className="flex flex-wrap gap-4 w-11/12 md:w-full mx-auto  justify-center my-4 uppercase">
            <button
                onClick={() => handlefilter('all')} //reload all products and set active style

                className={`
                    ${activeCategory === 'all' && 'bg-primary text-white'}
                btn btn-outline border-slate-400 rounded-full active category-button`}>All</button>
            {
                categories.map(category => <button
                    onClick={() => handlefilter(category)}
                    key={category}
                    className={`
                        ${category === activeCategory && 'bg-primary text-white'}
                    btn btn-outline border-slate-400 rounded-full uppercase`}>
                    {category}</button>)
            }
        </div>
    );
};

export default CategoryBtnContainer;