import React, { useState, createContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const SharedContext = createContext();

export default props => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState({
    title: '',
    category: '',
    is_enabled: null,
    price: '',
    unit: '',
    description: '',
    content: '',
    image: '',
    imageUrl: '',
  });

  const handleLogin = user => {
    axios
      .post(`${process.env.REACT_APP_API}/admin/signin`, user)
      .then(result => {
        if (result.data.message === '登入成功') setIsLogin(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleLogout = user => {
    axios
      .post(`${process.env.REACT_APP_API}/logout`, user)
      .then(setIsLogin(false));
  };

  const checkIfLogin = () => {
    axios
      .post(`${process.env.REACT_APP_API}/api/user/check`)
      .then(result => {
        if (result.data.success === true) setIsLogin(true);
      })
      .catch(error => {
        console.log(error.message);
      });
    if (!isLogin) {
      return <Redirect to='/login' />;
    }
  };

  const handleForm = () => {
    if (
      form.title.trim().length > 5 &&
      form.category.trim().length > 0 &&
      form.price < 99.99 &&
      form.price > 0 &&
      form.unit < 999 &&
      form.unit > 0
    ) {
      alert(
        `${form.title} ${form.category} ${form.price} ${form.unit}\ntest pass`
      );
      setIsModalOpen(false);
    } else {
      alert(
        `title must greater than 5 character\nCategory must not be empty\nPrice must be less than 99.99\nAmount must be a less than 999`
      );
    }
  };

  const value = {
    user,
    setUser,
    form,
    setForm,
    product,
    setProduct,
    isLogin,
    setIsLogin,
    isModalOpen,
    setIsModalOpen,

    handleLogin,
    handleLogout,
    checkIfLogin,
    handleForm,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
