import React, { useEffect, useState } from 'react';
import { getData, postData, deleteData, updateData } from '../services/http.service'
const MyComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };
    fetchData();
  }, []);
  const handleAddData = async () => {
    const newEntry = { name: 'New Entry' };
    const response = await postData(newEntry);
    setData([...data, response]);
  };
  const handleDeleteData = async (id) => {
    await deleteData(id);
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleUpdateData = async (id, updatedEntry) => {
    await updateData(id, updatedEntry);
    const updatedData = data.map((item) => (item.id === id ? updatedEntry : item));
    setData(updatedData);
  };
  return (
    <div>
      {/* Отображение данных */}
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleDeleteData(item.id)}>Удалить</button>
        </div>
      ))}
      {/* Добавление данных */}
      <button onClick={handleAddData}>Добавить</button>
    </div>
  );
};
export default MyComponent;
