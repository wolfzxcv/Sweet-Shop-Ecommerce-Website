import React, { useState, createContext } from 'react';
import { useMedia } from 'use-media';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const SharedContext = createContext();

export default props => {
  // Display  setIsOrderModalOpen
  const isLaptop = useMedia({ minWidth: 769 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [select, setSelect] = useState('');
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Products
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  // Orders & Cart
  const [orderList, setOrderList] = useState([]);
  const [orderForm, setOrderForm] = useState({
    user: {
      name: ' ',
      email: ' ',
      tel: ' ',
      address: ' ',
    },
    message: ' ',
  });
  const [orderDetail, setOrderDetail] = useState({
    success: true,
    order: {
      create_at: ' ',
      id: ' ',
      is_paid: false,
      message: ' ',
      payment_method: ' ',
      products: [
        {
          id: ' ',
          product_id: ' ',
          qty: ' ',
        },
      ],
      total: '',
      user: {
        address: ' ',
        email: ' ',
        name: ' ',
        tel: ' ',
      },
    },
  });

  // Admin
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [orders, setOrders] = useState([]);
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

  // Functions Part Start from Here
  // Products
  const getAllProducts = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/products/all`
      )
      .then(response => {
        console.log('getAllProducts ', response.data.success);
        setProducts(response.data.products);
      });
  };

  // Orders & Cart
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
        }
      });
  };

  const getCart = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${process.env.REACT_APP_CUSTOM}/cart`
      )
      .then(response => {
        console.log('getCart ', response.data.success);
        if (response.data.success) {
          setOrderList(response.data.data.carts);
          setTotalPrice(response.data.data.final_total);
        }
      });
  };

  const deleteCartOrder = id => {
    axios
      .delete(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/cart/${id}`
      )
      .then(response => {
        console.log('deleteCartOrder ', response.data.message);
        if (response.data.success) {
          getCart();
        }
      });
  };

  const sendOrderForm = orderForm => {
    axios
      .post(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/order`,
        { data: orderForm }
      )
      .then(response => {
        console.log('sendOrderForm', response.data.message, response.data);
        setOrderId(response.data.orderId);
        if (response.data.success) {
          getCart();
        }
      });
  };

  const confirmPayment = id => {
    axios
      .post(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/pay/${id}`
      )
      .then(response => {
        console.log(`confirmPayment ${id}`, response.data.message);
      });
  };

  // Admin
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

  const handleProductForm = () => {
    if (
      productForm.title.trim().length > 5 &&
      productForm.category.trim().length > 0 &&
      productForm.price < 1000 &&
      productForm.price > 0 &&
      productForm.unit < 100 &&
      productForm.unit > 0
    ) {
      setProductForm(productForm);
      uploadNewProduct(productForm);
    } else {
      alert(
        `title must greater than 5 character\nCategory must not be empty\nPrice must be less than 999\nAmount must be a less than 99`
      );
    }
  };

  const resetProductForm = () => {
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
          getAllProducts();
          setIsModalOpen(false);
          resetProductForm();
        } else {
          setIsModalOpen(false);
          handleLogout();
          resetProductForm();
        }
      });
  };

  const editProduct = id => {
    setProductForm(products.find(x => x.id === id));
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
          getAllProducts();
          setIsModalOpen(false);
          resetProductForm();
        } else {
          setIsModalOpen(false);
          handleLogout();
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
          getAllProducts();
        } else {
          setIsModalOpen(false);
          handleLogout();
        }
      });
  };

  const getOrders = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/orders?page=:page`
      )
      .then(response => {
        console.log('getOrders ', response.data.success);
        console.log('getOrders: setOrders ', response.data.orders);
        // setOrders(response.data.orders);
      });
  };

  const editOrederDetail = id => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/order/${id}`
      )
      .then(response => {
        setOrderDetail(response.data);
        setIsOrderModalOpen(true);
        console.log('editOrederDetail ', response.data);
      });
  };

  const updateOrderDetail = id => {
    axios
      .put(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/order/${id}`,
        { data: orderDetail }
      )
      .then(response => {
        console.log(`order id ${orderDetail.id}`, response.data.message);
        // if (response.data.success) {
        //   getAllProducts();
        //   setIsModalOpen(false);
        //   resetProductForm();
        // } else {
        //   setIsModalOpen(false);
        //   handleLogout();
        // }
      });
  };

  const value = {
    isLaptop,
    menuOpen,
    setMenuOpen,
    isModalOpen,
    setIsModalOpen,
    isOrderModalOpen,
    setIsOrderModalOpen,
    page,
    setPage,
    select,
    setSelect,
    orderId,
    setOrderId,
    amount,
    setAmount,
    totalPrice,
    setTotalPrice,

    product,
    setProduct,
    products,
    setProducts,

    orderList,
    setOrderList,
    orderForm,
    setOrderForm,
    orderDetail,
    setOrderDetail,

    user,
    setUser,
    isLogin,
    setIsLogin,
    productForm,
    setProductForm,
    orders,
    setOrders,

    getAllProducts,

    addToCart,
    getCart,
    deleteCartOrder,
    sendOrderForm,
    confirmPayment,

    handleLogin,
    handleLogout,
    checkIfLogin,
    handleProductForm,
    resetProductForm,
    editProduct,
    updateProduct,
    deleteProduct,

    getOrders,
    editOrederDetail,
    updateOrderDetail,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
