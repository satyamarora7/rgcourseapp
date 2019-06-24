import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function Infoblock({ heading }) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading className="about-heading" title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio, ipsa sed consequuntur nulla ut ab iure repellat reiciendis earum molestias a ad eligendi blanditiis voluptatibus. Autem temporibus nobis sunt quos doloribus et non sit tempore harum cupiditate officia minus ducimus a at iste, explicabo maiores sint eum corporis exercitationem in. Voluptates minima excepturi numquam dicta recusandae at voluptate aut.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
