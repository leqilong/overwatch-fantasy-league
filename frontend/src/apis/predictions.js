import axios from 'axios';

//const token = localStorage.getItem('token') || null;
export default axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || null}`
  }
});
