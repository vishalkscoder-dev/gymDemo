import React from 'react'

import { useState } from 'react'



export default function Gallery({images}) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {images.map((item)=>(
          <button
            key={item.id}
            className='gallery-item'
            onClick={()=>setSelectedImage(item)}
          >
            <img 
              src={item.image}
              alt={item.alt} 
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className='lightbox'
          onClick={()=>setSelectedImage(null)}
        >
          <img 
            src={selectedImage.image}
            alt={selectedImage.alt}
          />

        </div>
      )}

    </>
  )
}
