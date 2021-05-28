import React from 'react';
import { Pagination, Image } from 'antd';





    
    
export default function Paginations() {
    return (
        <div>
            <Image
                    width={300}
                    height={200}
                    src='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?cs=srgb&dl=pexels-pixabay-39284.jpg&fm=jpg'
                />
            <Pagination defaultCurrent={1} total={30}/>
        </div>
    )
}

