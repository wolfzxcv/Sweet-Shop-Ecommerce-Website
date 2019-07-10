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
  const [totalPrice, setTotalPrice] = useState(0);
  const [productForm, setProductForm] = useState({
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
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    tel: '',
    address: '',
    message: '',
  });

  const getAllProduct = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/products/all`
      )
      .then(response => {
        console.log('getAllProduct ', response.data.success);
        setProduct(response.data.products);
      });
  };

  const handleLogin = user => {
    axios
      .post(`${process.env.REACT_APP_API}/admin/signin`, user)
      .then(response => {
        console.log('handleLogin ', response.data.message);
        if (response.data.success === true) {
          setIsLogin(true);
        }
      });
  };

  const handleLogout = user => {
    axios.post(`${process.env.REACT_APP_API}/logout`, user).then(response => {
      console.log('handleLogout ', response.data.message);
      if (response.data.success) {
        setIsLogin(false);
        return <Redirect to='/Sweet-for-happiness/login' />;
      }
    });
  };

  const checkIfLogin = () => {
    axios.post(`${process.env.REACT_APP_API}/api/user/check`).then(response => {
      console.log('checkIfLogin ', response.data.success);
      if (response.data.success === true) {
        setIsLogin(true);
      }
    });
    if (!isLogin) {
      return <Redirect to='/Sweet-for-happiness/login' />;
    }
  };

  const handleForm = () => {
    if (
      productForm.title.trim().length > 5 &&
      productForm.category.trim().length > 0 &&
      productForm.price < 100 &&
      productForm.price > 0 &&
      productForm.unit < 100 &&
      productForm.unit > 0
    ) {
      setProductForm(productForm);
      uploadNewProduct(productForm);
    } else {
      alert(
        `title must greater than 5 character\nCategory must not be empty\nPrice must be less than 99.99\nAmount must be a less than 99`
      );
    }
  };

  const resetForm = () => {
    setProductForm({
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
        { data: productForm }
      )
      .then(response => {
        console.log(
          `uploadNewProduct ${productForm.title}`,
          response.data.message
        );
        if (response.data.success) {
          // alert('Yay!! Upload new product successfully!!');
          getAllProduct();
          setIsModalOpen(false);
          resetForm();
        }
      });
  };

  const editProduct = id => {
    setProductForm(product.find(x => x.id === id));
    setIsModalOpen(true);
  };

  const updateProduct = id => {
    axios
      .put(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/product/${id}`,
        { data: productForm }
      )
      .then(response => {
        console.log(
          `updateProduct ${productForm.title}`,
          response.data.message
        );
        if (response.data.success) {
          getAllProduct();
          setIsModalOpen(false);
          resetForm();
        }
      });
  };

  const deleteProduct = id => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/product/${id}`
      )
      .then(response => {
        console.log(`deleteProduct ${id}`, response.data.message);
        if (response.data.success) {
          getAllProduct();
        }
      });
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
        console.log('addToCart ', response.data.message);
        if (response.data.success) {
          getCart();
          setAmount(1);
          shakeCart();
        }
      });
  };

  const shakeCart = () => {};

  const getCart = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${process.env.REACT_APP_CUSTOM}/cart`
      )
      .then(response => {
        console.log('getCart ', response.data.success);
        if (response.data.success) {
          setOrderList(response.data.data.carts);
          setTotalPrice(response.data.data.final_total.toFixed(2));
        }
      });
  };

  const deleteOrder = id => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/cart/${id}`
      )
      .then(response => {
        console.log('deleteOrder ', response.data.message);
        if (response.data.success) {
          getCart();
        }
      });
  };

  const value = {
    isLaptop,
    user,
    setUser,
    amount,
    setAmount,
    orderList,
    setOrderList,
    orderForm,
    setOrderForm,
    totalPrice,
    setTotalPrice,
    productForm,
    setProductForm,
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
    deleteOrder,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
