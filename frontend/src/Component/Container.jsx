import React, { useState } from "react";

/* Assets */
import iphone1 from "../assets/iphone1.jpg";
import iphone2 from "../assets/iphone2.jpg";
import iphone3 from "../assets/iphone3.jpg";
import iphone4 from "../assets/iphone4.jpg";

import vivo1 from "../assets/vivo1.png";
import vivo2 from "../assets/vivo2.png";
import vivo3 from "../assets/vivo3.png";
import vivo4 from "../assets/vivo4.png";

import oppo1 from "../assets/oppo1.png";
import oppo2 from "../assets/oppo2.png";
import oppo3 from "../assets/oppo3.png";
import oppo4 from "../assets/oppo4.png";

import poco1 from "../assets/poco1.jpg";
import poco2 from "../assets/poco2.jpg";
import poco3 from "../assets/poco3.jpg";
import poco4 from "../assets/poco4.jpg";

import redmi1 from "../assets/redmi1.webp";
import redmi2 from "../assets/redmi2.webp";
import redmi3 from "../assets/redmi3.webp";
import redmi4 from "../assets/redmi4.webp";





export const Container = () => {
  
  const [activeBrand, setActiveBrand] = useState(""); 
  const [showForm, setShowForm] = useState(false);   
  const [selectedPhone, setSelectedPhone] = useState(null); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    model: "",
    price: "",
  });

  

  const brandData = {
    iPhone: [
      {
        img: iphone1, model: "iPhone 14", price: "₹79,900",
        specs: {
          Display: "6.1-inch OLED",
          Processor: "A15 Bionic",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "12MP + 12MP",
          Battery: "3279 mAh",
          OS: "iOS 16",
        },
      },
      {
        img: iphone2, model: "iPhone 14 Pro", price: "₹1,19,900",
        specs: {
          Display: "6.1-inch Super Retina XDR",
          Processor: "A16 Bionic",
          RAM: "6GB",
          Storage: "256GB",
          Camera: "48MP + 12MP + 12MP",
          Battery: "3200 mAh",
          OS: "iOS 16",
        },
      },
      {
        img: iphone3, model: "iPhone 13", price: "₹69,900",
        specs: {
          Display: "6.1-inch OLED",
          Processor: "A15 Bionic",
          RAM: "4GB",
          Storage: "128GB",
          Camera: "12MP + 12MP",
          Battery: "3240 mAh",
          OS: "iOS 15",
        },
      },
      {
        img: iphone4, model: "iPhone 13 Pro", price: "₹99,900",
        specs: {
          Display: "6.1-inch Super Retina XDR",
          Processor: "A15 Bionic",
          RAM: "6GB",
          Storage: "256GB",
          Camera: "12MP + 12MP + 12MP",
          Battery: "3095 mAh",
          OS: "iOS 15",
        },
      },
    ],
    Vivo: [
      {
        img: vivo1, model: "Vivo V27", price: "₹35,000",
        specs: {
          Display: "6.44-inch AMOLED",
          Processor: "Dimensity 920",
          RAM: "8GB",
          Storage: "128GB",
          Camera: "64MP + 2MP",
          Battery: "4500 mAh",
          OS: "Funtouch OS 12",
        },
      },
      {
        img: vivo2, model: "Vivo V25 Pro", price: "₹45,000",
        specs: {
          Display: "6.56-inch AMOLED",
          Processor: "Dimensity 1300",
          RAM: "12GB",
          Storage: "256GB",
          Camera: "64MP + 8MP + 2MP",
          Battery: "4830 mAh",
          OS: "Funtouch OS 12",
        },
      },
      {
        img: vivo3, model: "Vivo V24", price: "₹32,000",
        specs: {
          Display: "6.44-inch AMOLED",
          Processor: "Dimensity 920",
          RAM: "8GB",
          Storage: "128GB",
          Camera: "64MP + 2MP",
          Battery: "4300 mAh",
          OS: "Funtouch OS 12",
        },
      },
      {
        img: vivo4, model: "Vivo V23", price: "₹28,000",
        specs: {
          Display: "6.44-inch AMOLED",
          Processor: "Dimensity 920",
          RAM: "8GB",
          Storage: "128GB",
          Camera: "64MP + 2MP",
          Battery: "4200 mAh",
          OS: "Funtouch OS 12",
        },
      },
    ],
    Oppo: [
      {
        img: oppo1, model: "Oppo F21", price: "₹25,000",
        specs: {
          Display: "6.4-inch AMOLED",
          Processor: "Snapdragon 680",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "48MP + 2MP",
          Battery: "4310 mAh",
          OS: "ColorOS 12",
        },
      },
      {
        img: oppo2, model: "Oppo Reno 10", price: "₹40,000",
        specs: {
          Display: "6.5-inch AMOLED",
          Processor: "Snapdragon 778G",
          RAM: "8GB",
          Storage: "256GB",
          Camera: "64MP + 8MP + 2MP",
          Battery: "4500 mAh",
          OS: "ColorOS 12",
        },
      },
      {
        img: oppo3, model: "Oppo A77", price: "₹22,000",
        specs: {
          Display: "6.56-inch AMOLED",
          Processor: "MediaTek Helio G99",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "50MP + 2MP",
          Battery: "5000 mAh",
          OS: "ColorOS 12",
        },
      },
      {
        img: oppo4, model: "Oppo A96", price: "₹30,000",
        specs: {
          Display: "6.59-inch AMOLED",
          Processor: "Snapdragon 680",
          RAM: "8GB",
          Storage: "128GB",
          Camera: "50MP + 2MP",
          Battery: "5000 mAh",
          OS: "ColorOS 12",
        },
      },
    ],
    Poco: [
      {
        img: poco1, model: "Poco X5", price: "₹20,000",
        specs: {
          Display: "6.67-inch AMOLED",
          Processor: "Snapdragon 695",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "48MP + 8MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: poco2, model: "Poco F5", price: "₹28,000",
        specs: {
          Display: "6.67-inch AMOLED",
          Processor: "Snapdragon 870",
          RAM: "8GB",
          Storage: "256GB",
          Camera: "64MP + 8MP + 2MP",
          Battery: "5160 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: poco3, model: "Poco M5", price: "₹15,000",
        specs: {
          Display: "6.58-inch IPS LCD",
          Processor: "MediaTek Helio G99",
          RAM: "4GB",
          Storage: "64GB",
          Camera: "50MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: poco4, model: "Poco X4", price: "₹18,000",
        specs: {
          Display: "6.67-inch AMOLED",
          Processor: "Snapdragon 695",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "48MP + 8MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
    ],
    Redmi: [
      {
        img: redmi1, model: "Redmi Note 12", price: "₹15,000",
        specs: {
          Display: "6.67-inch AMOLED",
          Processor: "Snapdragon 685",
          RAM: "4GB",
          Storage: "128GB",
          Camera: "48MP + 8MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: redmi2, model: "Redmi Note 12 Pro", price: "₹22,000",
        specs: {
          Display: "6.67-inch AMOLED",
          Processor: "MediaTek Dimensity 1080",
          RAM: "6GB",
          Storage: "128GB",
          Camera: "50MP + 8MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: redmi3, model: "Redmi 12C", price: "₹12,000",
        specs: {
          Display: "6.71-inch LCD",
          Processor: "MediaTek Helio G85",
          RAM: "4GB",
          Storage: "64GB",
          Camera: "50MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
      {
        img: redmi4, model: "Redmi 12X", price: "₹14,000",
        specs: {
          Display: "6.5-inch AMOLED",
          Processor: "MediaTek Helio G88",
          RAM: "4GB",
          Storage: "128GB",
          Camera: "50MP + 2MP",
          Battery: "5000 mAh",
          OS: "MIUI 13",
        },
      },
    ],
  };

  const handleBrandClick = (brand) => setActiveBrand(prev => (prev === brand ? "" : brand));
  const handleBackClick = () => { setActiveBrand(""); setShowForm(false); };
  const handleBuyClick = (phone) => {
    setSelectedPhone(phone);
    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      address: "",
      model: phone.model,
      price: phone.price,
    });
    setShowForm(true);
  };
  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleCancel = () => setShowForm(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          mobile_number: formData.mobile,
          email: formData.email,
          address: formData.address,
          model: formData.model,
          price: formData.price.replace("₹", "").replace(/,/g, ""),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Thank you for purchasing ${formData.model}! Your ID is ${data.id}`);
        setShowForm(false);
        setFormData({ firstName: "", lastName: "", mobile: "", email: "", address: "", model: "", price: "" });
      } else {
        alert("Error: " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console.");
    }
  };

  const brandColors = { iPhone: "#f0f0f0", Vivo: "#c0e6ff", Oppo: "#d4ffd4", Poco: "#ffe4b5", Redmi: "#ffd6d6" };

  return (
    <div className="brand-container">
      {activeBrand && <button className="back-btn" onClick={handleBackClick}>Back</button>}

      {!showForm && Object.keys(brandData).map(brand => (
        <h1 key={brand} onClick={() => handleBrandClick(brand)} style={{
          cursor: "pointer",
          opacity: activeBrand && activeBrand !== brand ? 0.4 : 1,
          backgroundColor: brandColors[brand],
          padding: "10px 20px",
          borderRadius: "8px",
          display: "inline-block",
          margin: "5px",
        }}>{brand}</h1>
      ))}

      {!showForm && activeBrand && (
        <div className="image-grid">
          {brandData[activeBrand].map((phone, index) => (
            <div key={index} className="phone-card">
              <img src={phone.img} alt={phone.model} className="grid-img" />
              <h3>{phone.model}</h3>
              <p>{phone.price}</p>
              <ul>
                {Object.entries(phone.specs).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
              <button className="buy-btn" onClick={() => handleBuyClick(phone)}>Buy Now</button>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form className="registration-form" onSubmit={handleSubmit} style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}>
          <h2 style={{ textAlign: "center" }}>Register Your Purchase</h2>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="model" placeholder="Model Name" value={formData.model} readOnly />
          <input type="text" name="price" placeholder="Price" value={formData.price} readOnly />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" className="buy-btn">Submit</button>
            <button type="button" className="buy-btn" style={{ backgroundColor: "#aaa" }} onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};
