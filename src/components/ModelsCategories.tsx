import React from 'react';
import { Button } from './ui/button';

interface ModelsCategoriesProps {
  title: string;
  details: {
    age: string;
    height: string;
    moreButton: string;
  };
}

const ModelsCategories: React.FC<ModelsCategoriesProps> = ({
  title,
  details,
}) => {
  return (
    <div className="flex justify-between pt-12">
      <div className="text-center text-white">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-xs">Age: {details.age}</p>
        <p className="text-xs">Height: {details.height}m</p>
      </div>
      <div className="flex justify-end p-4">
        <Button className="rounded-full bg-[#141414] p-2 text-sm font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-[#141414]">
          Explore {details.moreButton}
        </Button>
      </div>
    </div>
  );
};

export default ModelsCategories;
