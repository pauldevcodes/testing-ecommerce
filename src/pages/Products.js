import axios from "axios";
import { useEffect, useState } from "react";


const Products = () => {
    const productUrl = 'https://dummyjson.com/products?limit=100';
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);


    const fetchSomthing = async () => {
        try {
            const response = await axios(productUrl)
            if (response.status === 200) {
                const data = await response.data.products
                console.log(data)
                setData(data)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        fetchSomthing()
    }, [])

    return (
        <>
            <div>
                {/* d-flex flex-wrap */}
                <div className="  " style={{ margin: '29px' }}>
                    <div className="row">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="col-5  d-flex flex-wrap justify-content-center " style={{ maxWidth: '300px', margin: '30px' }}>

                                        <div className="card mt-3 " style={{ padding: '12px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                            <div>
                                                {/* <p>{item.title }</p> */}
                                            </div>
                                            <div>
                                                <img src={item.images[0]} style={{ width: '100%', boxSizing: 'border-box', height: '210px' }} />
                                            </div>

                                            <hr />

                                            <div className="m-2">
                                                <p className="fw-bolder">{item.title}</p>
                                                <p> &#36;  <span>{item.price}</span></p>

                                                <div className="mt-1">
                                                    {item.description}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
export default Products;


