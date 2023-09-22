import React, {useState} from 'react'
import "./Gallery.css"
import { carousel1,carousel2,carousel3,carousel4 } from '../../../../const'

const Gallery = ({changeBackground}) => {
    const [images,setImages] = useState([
        {id:1,img:carousel1,isHighlight:false},
        {id:2,img:carousel2,isHighlight:false},
        {id:3,img:carousel3,isHighlight:false},
        {id:4,img:carousel4,isHighlight:false}
    ])

    const highlightGalleryImg=(id)=>{
        console.log("enterId:" + id)
        setImages((images=>images.map(i=>i.id == id ? {...i,isHighlight:true} : i)))
    }

    const removeHighlight=(id)=>{
        console.log("removeId:" + id)
        setImages((images=>images.map(i=>i.id == id ? {...i,isHighlight:false} : i)))

    }
  return (
    <div className="gallery-row z-50">
        <ul className="gallery z-100">
            {images.map(i=>(
                <li key={i.id} className={i.isHighlight ? "gallery-item highlight-gallery-item" : "gallery-item"}>
                    <img className="gallery-img" src={i.img} alt="img"/>
                </li>
            ))}
        </ul>
        <ul className="selectors z-100">
            <li onClick={()=>changeBackground(1)} onMouseEnter={()=>highlightGalleryImg(1)} onMouseLeave={()=>removeHighlight(1)} className="selection-item"></li>
            <li onClick={()=>changeBackground(2)} onMouseEnter={()=>highlightGalleryImg(2)} onMouseLeave={()=>removeHighlight(2)} className="selection-item"></li>
            <li onClick={()=>changeBackground(3)} onMouseEnter={()=>highlightGalleryImg(3)} onMouseLeave={()=>removeHighlight(3)} className="selection-item"></li>
            <li onClick={()=>changeBackground(4)} onMouseEnter={()=>highlightGalleryImg(4)} onMouseLeave={()=>removeHighlight(4)} className="selection-item"></li>
        </ul>
    </div>
  )
}

export default Gallery