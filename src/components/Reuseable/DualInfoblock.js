import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({ heading }) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto ">
                        <p className="lead text-white mb-8">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quas iure molestiae praesentium, assumenda expedita ex? Tempora modi ea dolores incidunt soluta adipisci et commodi, minima id aut aliquid sit voluptatibus perspiciatis mollitia maiores? Saepe ipsa porro eligendi, placeat voluptates corrupti minima doloribus maxime eius natus praesentium perferendis repellat architecto ex aut animi sequi repellendus id. Placeat, qui doloremque consectetur velit, possimus dolor itaque laboriosam vel asperiores dicta porro aliquam tempore voluptatum ipsa delectus vitae beatae odio ratione est odit repellat consequuntur suscipit saepe illum. Iusto odio adipisci nisi? Itaque quasi officiis odit explicabo debitis beatae soluta quo consequatur animi nobis reiciendis asperiores vel neque sint, atque quae deleniti eligendi expedita. Error ad autem labore, distinctio sunt similique reiciendis quis asperiores esse laborum ab illo omnis quibusdam dignissimos cum nobis? Ad dicta quam, recusandae aliquid fugiat perferendis, odit facere consequatur fugit amet porro, culpa expedita nihil pariatur nemo maiores nam in asperiores reprehenderit blanditiis repellendus nesciunt? Sapiente voluptatum corporis, laborum incidunt quidem soluta aliquid tenetur quisquam! Aliquid explicabo deleniti laboriosam cupiditate molestias nesciunt error eligendi laudantium, eius ipsa exercitationem vel?
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark" >
                            <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt=" image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-white">Just Click Photos</h5>
                                <p className="card-text text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea maiores corporis repudiandae placeat. Voluptate quidem in doloremque numquam aliquid laudantium nesciunt autem adipisci! Sequi eum odit distinctio nostrum delectus!
                                </p>
                                <a href="#" className="btn btn-warning btn-block">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
