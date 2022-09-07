import React from 'react';

function Header(props) {
    return (
        <>
        <header>
            <section className='aaa'>
              <div className="container main-container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side mt-5">
                        {/* <h1 className="display">Tops Technologies  */}
                        <h1>Tops Technologies
                        <br />
                        Multipal Cources
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi quidem ipsam est debitis, ipsum magnam ratione harum, tempore blanditiis adipisci perspiciatis ipsa voluptates ex itaque reiciendis autem aspernatur fugiat quisquam veniam cumque inventore animi. Laudantium dolores quos quasi voluptate tempora, amet voluptas beatae maiores aperiam ea facere vel facilis minima at fuga. Sequi illum, pariatur eaque earum corporis explicabo quos, aspernatur amet facere aut dignissimos modi voluptatibus porro nostrum perferendis cum voluptate. Ullam illum rem necessitatibus doloribus quidem aut expedita deserunt vel quam reprehenderit animi cumque delectus incidunt distinctio, illo cum, dolor odit corporis! Tempore at quo beatae perferendis!</p>
                        <h3>Get Early Admission</h3>
                        <div className="input-group">
                            <input type="text" className='form-control rounded-pill' />
                            <div className="input-group-button btn-primary rounded-pill">Get it now</div>
                        </div>

                    </div>
                    {/* rightside */}
                    <div className="clo-12 col-lg-6 header-right-side d-flax justify-contant-center align-items-cenetr mt-5">
                        <img src="https://image.shutterstock.com/image-photo/antalya-turkey-august-19-2021-260nw-2027444240.jpg" alt="apple" className='img-fluid' />
                        <img src="https://www.deccanherald.com/sites/dh/files/articleimages/2021/12/06/aiphone13-cov-sho-sel-1-1054128-1638775851.jpg" alt="apple" className='img-fluid side-img' />


                    </div>
                </div>
              </div>
            </section>
        </header>
        </>
    );
}

export default Header;