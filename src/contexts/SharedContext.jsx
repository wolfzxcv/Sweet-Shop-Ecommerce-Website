import React, { useState, createContext } from 'react';
import { useMedia } from 'use-media';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const SharedContext = createContext();

export default props => {
  const isLaptop = useMedia({ minWidth: 769 });
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState({});
  const [select, setSelect] = useState('');
  const [page, setPage] = useState(0);
  const [amount, setAmount] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const [form, setForm] = useState({
    id: '',
    title: '',
    category: '',
    is_enabled: 1,
    price: '',
    unit: '',
    description: '',
    content: '',
    image: '',
    imageUrl: '',
  });

  const getAllProduct = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/products/all`
      )
      .then(response => setProduct(response.data.products));
  };

  const handleLogin = user => {
    axios
      .post(`${process.env.REACT_APP_API}/admin/signin`, user)
      .then(response => {
        if (response.data.message === '登入成功') setIsLogin(true);
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
  };

  const handleLogout = user => {
    axios.post(`${process.env.REACT_APP_API}/logout`, user).then(res => {
      if (res.data.success) {
        setIsLogin(false);
        return <Redirect to='/Sweet-for-happiness/login' />;
      }
    });
  };

  const checkIfLogin = () => {
    axios.post(`${process.env.REACT_APP_API}/api/user/check`).then(response => {
      if (response.data.success === true) setIsLogin(true);
    });
    // .catch(error => {
    //   console.log(error.message);
    // });
    if (!isLogin) {
      return <Redirect to='/Sweet-for-happiness/login' />;
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
      setForm(form);
      uploadNewProduct(form);
      setIsModalOpen(false);
      resetForm();
      alert('Yay!! Upload new product successfully!!');
      window.location.reload();
    } else {
      alert(
        `title must greater than 5 character\nCategory must not be empty\nPrice must be less than 99.99\nAmount must be a less than 99`
      );
    }
  };

  const resetForm = () => {
    setForm({
      id: '',
      title: '',
      category: '',
      is_enabled: 1,
      price: '',
      unit: '',
      description: '',
      content: '',
      image: '',
      imageUrl: '',
    });
    setIsModalOpen(false);
  };

  const uploadNewProduct = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/product`,
        { data: form }
      )
      .then(response => {
        if (response.data.success)
          console.log('Upload new product successfully');
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
  };

  const editProduct = id => {
    setForm(product.find(x => x.id === id));
    setIsModalOpen(true);
  };

  const updateProduct = id => {
    axios
      .put(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/product/${id}`,
        { data: form }
      )
      .then(res => {
        console.log(res.data.message);
        window.location.reload();
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
  };

  const deleteProduct = id => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/product/${id}`
      )
      .then(res => {
        console.log(res.data.message);
        window.location.reload();
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
  };

  const addToCart = (id, qty = 1) => {
    const cart = {
      product_id: id,
      qty,
    };

    axios
      .post(
        `${process.env.REACT_APP_API}/api/${process.env.REACT_APP_CUSTOM}/cart`,
        { data: cart }
      )
      .then(response => {
        if (response.data.success) console.log(`${id} added successfully`);
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
    getCart();
    setAmount(1);
    shakeCart();
  };

  const shakeCart = () => {};

  const getCart = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${process.env.REACT_APP_CUSTOM}/cart`
      )
      .then(response => {
        if (response.data.success) setOrderList(response.data.data.carts);
      });
    // .catch(error => {
    //   console.log(error.message);
    // });
  };

  const value = {
    isLaptop,
    user,
    setUser,
    amount,
    setAmount,
    orderList,
    setOrderList,
    form,
    setForm,
    product,
    setProduct,
    item,
    setItem,
    select,
    setSelect,
    page,
    setPage,
    isLogin,
    setIsLogin,
    isModalOpen,
    setIsModalOpen,

    getAllProduct,
    handleLogin,
    handleLogout,
    checkIfLogin,
    handleForm,
    resetForm,
    editProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    getCart,
    shakeCart,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
