import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../styles/modificaciones.css'; 


const pagoform = () => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar formData a tu backend para procesar el pago
    console.log('Formulario enviado:', formData);
    // Aquí deberías llamar a una API para procesar el pago y manejar la respuesta
    // Por simplicidad, mostraremos un mensaje de éxito
    Swal.fire("Payment processed correctly");
    // Limpia el formulario después del envío exitoso
    setFormData({
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  const handleCancel = () => {
    // Limpia el formulario al cancelar
    setFormData({
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <div className="payment-form-container">
      
      <h2 style={{ textAlign: 'center',marginTop:'20px' }}>Payment Form</h2>
      <div >
        <img src="../assets/img/tarjetas.png" style={{textAlign:'center'}}/>
       </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardName">Name on the card:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder='####-####-####-####'
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <div className="expiry-date">
            <label htmlFor="expiryDate">Expiration date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
              className="form-control"
            />
          </div>
          <div className="cvv">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength="3"
              required
              className="form-control"
            />
          </div>
        </div>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <button type="submit" className="btn btn-success">Pay!</button>
        </div>
        <div style={{ textAlign: 'center',marginTop: '5px', width: '100%' }}>
          <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel!</button>
        </div>
        <div style={{ textAlign: 'center',marginTop: '5px', width: '100%' }}>
          <button className="btn btn-dark">
            <Link to="/" className='link'>Home</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default pagoform;
