import React, { useState } from "react";
import NQNAPI from "./API/NQNAPI";

function Home(props) {
  const [ManageData, setManageData] = useState(NQNAPI);
  console.log(NQNAPI);
  return (
    <>
      <div className="main1">
        <p className="pro">Professional</p>
        <p className="bea">Beauty & Care</p>
        <p className="nou">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>
        <button className="btn1">SHOP NOW</button>
      </div>
      <div className="img2"></div>

      {/* cosmatic */}

      <div className="cosmatic">
        <p className="cos1">Cosmetics</p>
        <p className="trending">Trending Products</p>
        <p className="cos2">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>

        <div className="item">
          <ul className="it1">
            <li className="it2">
              <a href="" className="it3">
                Make Up
              </a>
            </li>
            <li className="it2">
              <a href="" className="it3">
                SPA
              </a>
            </li>
            <li className="it2">
              <a href="" className="it3">
                Perfume
              </a>
            </li>
            <li className="it2">
              <a href="" className="it3">
                Nails
              </a>
            </li>
            <li className="it2">
              <a href="" className="it3">
                Skin care
              </a>
            </li>
            <li className="it2">
              <a href="" className="it3">
                Hair care
              </a>
            </li>
          </ul>
        </div>

        {/* product show */}
        <div className="sale">
          <div className="sale1">
            <div className="sal1">
              <div className="new">SALE</div>
            </div>
            <div className="sal2">
              <p className="sa1"> Foundation Beshop </p>
              <p className="sa2">
                <del>$249.95</del> $200.95
              </p>
            </div>
          </div>
          <div className="sale1">
            <div className="sal1a">
              <div className="new">SALE</div>
            </div>
            <div className="sal2">
              <p className="sa1"> Lotion for Cleansing </p>
              <p className="sa2">
                <del>$149.95</del> $100.90
              </p>
            </div>
          </div>
          <div className="sale1">
            <div className="sal1b">
              <div className="new">SALE</div>
            </div>
            <div className="sal2">
              <p className="sa1">Tony Mask </p>
              <p className="sa2">
                <del>$549.95</del> $200.95
              </p>
            </div>
          </div>
          <div className="sale1">
            <div className="sal1c">
              <div className="new">SALE</div>
            </div>
            <div className="sal2">
              <p className="sa1"> Sprey Balm With Oat Extract</p>
              <p className="sa2">
                <del>$249.95</del> $200.95
              </p>
            </div>
          </div>
        </div>

        {/* brand logo show */}
        <div className="brand">
          <div className="brand1">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-logo1.svg"
              alt="brand1"
            />
          </div>
          <div className="brand1">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-logo2.svg"
              alt="brand1"
            />
          </div>
          <div className="brand1">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-logo3.svg"
              alt="brand1"
            />
          </div>
          <div className="brand1">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-logo4.svg"
              alt="brand1"
            />
          </div>
          <div className="brand1">
            <img
              src="https://beshop-demo.vercel.app/assets/img/main-logo5.svg"
              alt="brand1"
            />
          </div>
        </div>
      </div>

      {/* Discount */}

      <div className="discount">
        <div className="dis1"></div>
        <div className="dis2">
          <p className="dis1a">Discount</p>
          <p className="dis1b">
            Get Your <br />
            <span>50%</span> Off
          </p>
          <p className="dis1c">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <button className="btn1">GET NOW!</button>
        </div>
      </div>

      {/* nqn class with new class */}

      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            {ManageData.map((curEle) => {
              const { URL, Img, title, info } = curEle;
              return (
                <>
                  <div className=" col-md-4 nqn">
                    <div className=" nqn1 ">
                      <div className="nqn1a">
                        <img src={URL} className="img1" alt="" />
                        <img src={Img} className="img1" alt="" />

                        {/* <img className={`${logo}`}></img> */}
                      </div>
                      <div className="nqn1b">
                        <h3>{title}</h3>
                        <p>{info}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className='nqn'>
                  <div className="nqn1">
                     <div className='nqn1a'>
                     <img src="https://beshop-demo.vercel.app/assets/img/main-text-decor.png" alt="" />
                     <img src="https://cdn0.iconfinder.com/data/icons/matcha-green-tea/91/Green_Tea_04-512.png" className='img1' alt="" />
                     </div>
                     <div className='nqn1b'>
                     <h3>Natural</h3>
                     <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                     </div>
                  </div>
                  <div className="nqn1">
                  <div className='nqn1a'>
                     <img src="https://beshop-demo.vercel.app/assets/img/main-text-decor.png" alt="" />
                     <img src="https://cdn0.iconfinder.com/data/icons/matcha-green-tea/91/Green_Tea_04-512.png" className='img1' alt="" />
                  </div>
                  <div className='nqn1b'>
                     <h3>Quality</h3>
                     <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                     
                  </div>
                  </div>
                  <div className="nqn1">
                  <div className='nqn1a'>
                  <img src="https://beshop-demo.vercel.app/assets/img/main-text-decor.png" alt="" />
                  <img src="https://cdn0.iconfinder.com/data/icons/matcha-green-tea/91/Green_Tea_04-512.png" className='img1' alt="" />
                  </div>
                  <div className='nqn1b'>
                  <h3>Natural</h3>
                  <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                     
                  </div>
                  </div>
          </div> */}

      {/* Popular collection */}
      <div className="popular">
        <p className="pop1">Popular Collections</p>
        <p className="pop2">Top Categories</p>
        <p className="pop3">
          Nourish your skin with toxin-free cosmetic products. With the <br />
          offers that you can’t refuse.
        </p>
      </div>

      {/* three images */}
      <div className="pic">
        <div className="pic1">
          {" "}
          <img
            src="https://beshop-demo.vercel.app/assets/img/top-categories-img1.jpg"
            alt="image1"
          />
        </div>
        <div className="pic1">
          {" "}
          <img
            src="https://beshop-demo.vercel.app/assets/img/top-categories-img2.jpg"
            alt="image2"
          />
        </div>
        <div className="pic1">
          {" "}
          <img
            src="https://beshop-demo.vercel.app/assets/img/top-categories-img3.jpg"
            alt="image3"
          />
        </div>
      </div>

      <div className="four">
        <div className="four1"></div>
        <div className="four2">
          <p className="four2a">Check This Out</p>
          <p className="four2b">New Collection For Delicate Skin</p>
          <p className="four2c">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="four2d">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
            reprehenderit reprehenderit culpa laboris nulla minim anim velit
            adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit
            reprehenderit culpa laboris nulla minim.
          </p>
          <button className="btn1">SHOP NOW</button>
        </div>
      </div>
      <div className="for">
        <div className="for1">
          <p className="for1a">About Us</p>
          <p className="for1b">Who We Are</p>
          <p className="for1c">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="for1d">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
            reprehenderit reprehenderit culpa laboris nulla minim anim velit
            adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit
            reprehenderit culpa laboris nulla minim.
          </p>
          <div className="for1e">
            <div className="for1ea">icon</div>
            <div className="for1eb">Watch video about us</div>
            <div className="for1ec">icon</div>
          </div>
        </div>
        <div className="for2">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/K1yp7Q1hH1c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* cosmatic cosmatic */}

      <div className="popular popular1">
        <p className="pop1 popa">Cosmetics</p>
        <p className="pop2 popb">New Arrivals</p>
        <p className="pop3 popc">
          Nourish your skin with toxin-free cosmetic products. With the <br />
          offers that you can’t refuse.
        </p>
      </div>
      <div className="sale">
        <div className="sale1">
          <div className="sal1">
            <div className="new">SALE</div>
          </div>
          <div className="sal2">
            <p className="sa1"> Foundation Beshop </p>
            <p className="sa2">
              <del>$249.95</del> $200.95
            </p>
          </div>
        </div>
        <div className="sale1">
          <div className="sal1a beshop">
            <div className="new">SALE</div>
          </div>
          <div className="sal2">
            <p className="sa1"> Hydrogel Patches </p>
            <p className="sa2">
              <del>$249.95</del> $200.90
            </p>
          </div>
        </div>
        <div className="sale1">
          <div className="sal1b">
            <div className="new">SALE</div>
          </div>
          <div className="sal2">
            <p className="sa1">Tony Mask </p>
            <p className="sa2">
              <del>$549.95</del> $200.95
            </p>
          </div>
        </div>
        <div className="sale1">
          <div className="sal1c">
            <div className="new">SALE</div>
          </div>
          <div className="sal2">
            <p className="sa1"> Sprey Balm With Oat Extract</p>
            <p className="sa2">
              <del>$249.95</del> $200.95
            </p>
          </div>
        </div>
      </div>

      {/* Our Blog Our Blog Our Blog Our Blog Our Blog  */}

      <div className="popular popular1">
        <p className="pop1 popa">Our Blog</p>
        <p className="pop2 popb">The Latest News At BeShop</p>
        <p className="pop3 popc">
          Nourish your skin with toxin-free cosmetic products. With the <br />
          offers that you can’t refuse.
        </p>
      </div>

      <div className="our">
        <div className="our1">
          <div className="our1a">
            <img
              src="https://beshop-demo.vercel.app/assets/img/blog-img1.jpg"
              alt="image1"
              height="100%"
              width="100%"
            />
          </div>
          <div className="our1b">
            <p className="our1ba"> Perfumes, perfumed or eau de toilette?</p>
            <p className="our1bb">
              Nourish your skin with toxin-free cosmetic products. With the
              offers that yo skin with toxin-free cosmetic products that you
              can’t refuse.
            </p>

            <a className="our1bc">READ MORE</a>
          </div>
        </div>
        <div className="our1">
          <div className="our1a">
            <img
              src="https://beshop-demo.vercel.app/assets/img/blog-img2.jpg"
              alt="image1"
              height="100%"
              width="100%"
            />
          </div>
          <div className="our1b">
            <p className="our1ba"> Best multi-step skin care treatment</p>
            <p className="our1bb">
              Nourish your skin with toxin-free cosmetic products. With the
              offers that yo skin with toxin-free cosmetic products that you
              can’t refuse.
            </p>

            <a className="our1bc">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="readblog">
        <button className="btn1 btn2">READ BLOG</button>
      </div>

      {/* input type image */}

      <div className="stay">
        <div className="stay1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/main-text-decor.png"
            alt=""
            height="300px"
            width="550px"
          />
          <img
            src="https://beshop-demo.vercel.app/assets/img/subscribe-img.png"
            alt=""
            className="imgstay"
          />
        </div>
        <div className="stay2">
          <p className="stay2a">Stay In Touch</p>
          <p className="stay2b">
            Nourish your skin with toxin-free cosmetic roducts.
          </p>
          <input type="email" placeholder="Enter your E-mail" />
          <button className="btn1 btn3">SUBSCRIBE</button>
        </div>
      </div>

      {/* image six class name */}
      <div className="six">
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo1.jpg"
            className="six2"
            alt=""
          />
          <div className="overlay">
    
    </div>
       
        </div>
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo2.jpg"
            className="six2"
            alt=""
          />
        </div>
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo3.jpg"
            className="six2"
            alt=""
          />
        </div>
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo4.jpg"
            className="six2"
            alt=""
          />
        </div>
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo5.jpg"
            className="six2"
            alt=""
          />
        </div>
        <div className="six1">
          <img
            src="https://beshop-demo.vercel.app/assets/img/insta-photo6.jpg"
            className="six2"
            alt=""
          />
        </div>
      </div>

      {/* footer footer */}
      <div className="footer">
        <div className="footer-icon1">
          <div className="footer-icon-imagea">
            <span className="span1">Find us hear:</span>
            <p className="fain">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </p>
          </div>
          <div className="footer-icon-imageb">
            <img
              src="https://beshop-demo.vercel.app/assets/img/footer-logo.svg"
              alt="logo footer"
            />
          </div>
          <div className="footer-icon-imagec">
            <span className="span1">Payment methods:</span>
            <div className="span-image">
              <div className="span-image1">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/payment1.png"
                  alt=""
                />
              </div>
              <div className="span-image1">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/payment2.png"
                  alt=""
                />
              </div>
              <div className="span-image1">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/payment3.png"
                  alt=""
                />
              </div>
              <div className="span-image1">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/payment4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>




        <div className="footer-icon2">
          <div className="footer-about">
            <p>About</p>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="footer-categories">
            <p>Categories</p>
            <ul>
              <li>
                <a href="#">Make up</a>
              </li>
              <li>
                <a href="#">SPAs</a>
              </li>
              <li>
                <a href="#">Perfume</a>
              </li>
              <li>
                <a href="#">Nails</a>
              </li>
              <li>
                <a href="#">Skin care</a>
              </li>
              <li>
                <a href="#">Hair care</a>
              </li>
            </ul>
          </div>
          <div className="footer-useful-link">
            <p>Useful Links</p>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Shipping details</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <p className="p3">Contact</p>
            <table >
            <tr>
              <td>
                <p className="p4"><i class="fa fa-map-marker" aria-hidden="true"></i></p></td>
                <td><p className="p1">27 Division St, New York, NY 10002, USA</p>
              </td>
            </tr>
            <tr>
              <td>
              <p className="p4"><i class="fa fa-mobile" aria-hidden="true"></i></p></td>
                <td>
                <p className="p1">+1 345 99 71 345</p>
                <p className="p1">+1 345 74 64 975</p>
              </td>
            </tr>
            <tr>
              <td>
              <p className="p4"><i class="fa fa-envelope" aria-hidden="true"></i></p></td>
                <td>
                <p className="p1">info@beshop.com</p>
              </td>
            </tr>
            </table>
          </div>
        </div>
        <div className="all">
          <p>© All rights reserved. BeShop 2020</p>
        </div>
      </div>
    </>
  );
}

export default Home;
