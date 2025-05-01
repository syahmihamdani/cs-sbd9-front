import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/item')
      .then(response => {
        setItems(response.data.payload);
      })
      .catch(error => {
        console.error('Failed to fetch items:', error);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-4">
      {items.map(item => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start dark:bg-color-purple transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="w-full h-40 bg-gray-200 text-black flex items-center justify-center rounded mb-3 overflow-hidden">
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={item.name}
                className="object-contain h-full w-full"
              />
            ) : (
              <span className="text-sm text-black-600">No Image</span>
            )}
          </div>

          <div className="text-left w-full">
            <h2 className="text-lg text-black font-semibold mb-1 dark:text-white">{item.name}</h2>
            <p className="text-red-600 font-bold mb-1">${item.price}</p>
            <p className="text-sm text-gray-600 dark:text-gray-200 mb-1">Stock: {item.stock}</p>
            <p className="text-xs text-gray-600 dark:text-gray-200">Store: {item.store_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
