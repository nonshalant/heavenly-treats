import React from 'react'
import mediaFile from '../../media/heavenlyyyTreatsMedia';
import { Link, useParams } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import {BiLeftArrowAlt} from 'react-icons/bi'

const ModalProduct = ({addToCart}) => {
    const media = mediaFile.shop;
    const {productName} = useParams()
    
    return (
        <div>
            <h2 className='modal-redirect'><Link to='/shop'><BiLeftArrowAlt/> Back to the shop</Link></h2>
            {
                media.map(product =>  product.name == productName && 
                    <div key={product.id}>
                        <div className="modal-product">
                            <div className="modal-image">
                                <Image cloudName={product.cloudName} publicId={product.image}/>
                            </div>
                            <div className="modal-details">
                                <strong className='product-type'>{product.type}</strong>
                                <h1>{product.name}</h1>
                                <div className="description-container">
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className='add-to-cart' onClick={()=>addToCart(product)}>Add To Cart</div>
                            </div>
                        </div>
                        
                    </div>
                )
            }
        </div>
    )
}

export default ModalProduct