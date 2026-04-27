"use client";

import React from 'react';

export default function Page() {
  const collections = [
    { id: 1, name: "Fashion Clothing", img: "https://images.unsplash.com/photo-1490481651871-ab68624d5517?w=400" },
    { id: 2, name: "Luxury Bags", img: "https://images.unsplash.com/photo-1584917033904-4911df440ed6?w=400" },
    { id: 3, name: "Designer Shoes", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 4, name: "Wigs & Hair", img: "https://images.unsplash.com/photo-1595475244133-722a10686940?w=400" },
    { id: 5, name: "Hair Attachments", img: "https://images.unsplash.com/photo-1634449591010-871dd5d0bd27?w=400" },
    { id: 6, name: "Jewellery", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
    { id: 7, name: "Luxury Cosmetics", img: "https://images.unsplash.com/photo-1512496011212-323a90b6797a?w=400" },
    { id: 8, name: "Beauty Products", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400" },
    { id: 9, name: "Hair Products", img: "https://images.unsplash.com/photo-1527799822367-a2886719444d?w=400" },
    { id: 10, name: "Press-on Nails", img: "https://images.unsplash.com/photo-1604654894610-df49ff6697ad?w=400" },
    { id: 11, name: "Designer Glasses", img: "https://images.unsplash.com/photo-1511499767350-a15947275847?w=400" },
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'serif', paddingBottom: '80px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap');
      `}</style>

      <div style={{ backgroundColor: '#be185d', color: '#fff', padding: '10px', textAlign: 'center', fontSize: '11px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>
        FREE DELIVERY OVER $80 • ROYAL SERVICE
      </div>

      <div style={{ padding: '30px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '26px', color: '#be185d', fontWeight: '700', letterSpacing: '1px', fontStyle: 'italic' }}>
          Dahmey's Royal Empire
        </h1>
        <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#888', letterSpacing: '3px', fontFamily: 'sans-serif' }}>
          WOMEN'S MARKETPLACE
        </p>
      </div>

      <div style={{ margin: '0 15px 30px', padding: '50px 20px', background: 'linear-gradient(135deg, #4c1d95, #be185d)', borderRadius: '2px', color: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '15px', fontFamily: 'sans-serif' }}>SIGNATURE COLLECTION</p>
        <h2 style={{ fontSize: '34px', margin: '10px 0', fontWeight: '400', lineHeight: '1.2' }}>Dress Like Royalty, <br/><i>Every Day</i></h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9, maxWidth: '280px', margin: '20px auto 0', fontFamily: 'sans-serif' }}>
          Curated premium fashion and beauty for the bold, elegant woman.
        </p>
      </div>

      <div style={{ padding: '0 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {collections.map(item => (
            <div key={item.id} style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'flex-end', padding: '15px' }}>
                <p style={{ color: 'white', margin: 0, fontSize: '15px', fontWeight: '600' }}>{item.name} →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #f5f5f5', zIndex: 100 }}>
        <span>🏠</span><span>🔍</span><span>❤️</span><span>👤</span>
      </div>
    </div>
  );
}