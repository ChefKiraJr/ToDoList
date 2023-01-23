import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './toDoList.css';
import { Input, InputGroup, InputRightAddon, Box } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ToDoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    activity: '',
    id: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3004/toDoList');
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    setInput(temp);
  };
  const handleSubmit = async () => {
    try {
      let body = { ...input };
      if (isEdit) {
        await axios.put(`http://localhost:3004/toDoList/${body.id}`, body);
      } else {
        body.id = new Date().getTime();
        await axios.post('http://localhost:3004/toDoList', body);
      }
      fetchData();
      let refresh = { activity: '', id: '' };
      setIsEdit(false);
      setInput(refresh);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/toDoList/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (value) => {
    setIsEdit(true);
    let temp = { ...input };
    console.log(value);
    temp.activity = value.activity;
    temp.id = value.id;
    setInput(temp);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="master-container">
        <div className="todo-container">
          <div className="todo-header">
            <p>What's The Plan for Today?</p>
          </div>
          <div className="todo-input">
            {isEdit ? (
              <InputGroup>
                <Input
                  name="activity"
                  value={input.activity}
                  borderColor={'#06283d'}
                  onChange={(event) => handleChange(event)}
                />
                <InputRightAddon
                  className="add-button"
                  children="Edit Todo"
                  onClick={handleSubmit}
                  borderColor={'#06283d'}
                  backgroundColor={'#06283d'}
                  color="white"
                />
              </InputGroup>
            ) : (
              <InputGroup>
                <Input
                  name="activity"
                  value={input.activity}
                  placeholder="Input your plan here!"
                  borderColor={'#06283d'}
                  onChange={(event) => handleChange(event)}
                />
                <InputRightAddon
                  className="add-button"
                  children="Add Todo"
                  onClick={handleSubmit}
                  borderColor={'#06283d'}
                  backgroundColor={'#06283d'}
                  color="white"
                />
              </InputGroup>
            )}
          </div>
          <div className="todo-content__container">
            {data.length > 0 &&
              data.map((value, index) => {
                return (
                  <Box
                    className="todo-content__main"
                    backgroundColor={'#256D85'}
                  >
                    <div className="todo-content__text">{value.activity}</div>
                    <div className="todo-content__icon">
                      <DeleteIcon
                        className="delete-button"
                        onClick={() => handleDelete(data[index].id)}
                      />
                      <EditIcon
                        className="edit-button"
                        onClick={() => handleEdit(value)}
                      />
                    </div>
                  </Box>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
