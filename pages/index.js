import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";


export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [daysInput, setDaysInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput, day: daysInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
      setDaysInput("");
      
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  function handleClick() {
    var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  alert("Done Copied!");
  }

  return (
    <div>
    <Head>
        <title>Travel Planner Testing</title>
        <link rel="icon" href="/travel.png" />
      </Head>
      
      <main className={styles.main}>
      <img src="/goTravel.png" className={styles.icon} />
        <img src="/travel.png" className={styles.icon} />
        <h1>Travel Planner Testing App</h1>
        <h5>(recommended by AI - powered by ChatGPT 3.5)</h5>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter any destination"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input
            type="number"
            name="days"
            placeholder="Enter no. of days"
            value={daysInput}
            onChange={(f) => setDaysInput(f.target.value)}
          />
          <br></br>
          <input type="submit" value="Generate Itinerary" />
          <br></br>
        </form>
        <input style={{size: 300}} id="myInput" onChange={(g) => setResult(g.target.value)} value={result}></input>
        <br></br>
        <button onClick={handleClick}>Copy!</button>
      </main>
        </div>
  );
}


/*

*/
      
/*
<div>
        <title>Book Store</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content />
        <meta name="keywords" content />
        <meta name="description" content />
        <link rel="stylesheet" type="text/css" href="/normalize.css" />
        <link rel="stylesheet" type="text/css" href="icomoon/icomoon.css" />
        <link rel="stylesheet" type="text/css" href="css/vendor.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        
    <div id="header-wrap">
    <div className="top-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="social-links">
              <ul>
                <li>
                  <a href="#"><i className="icon icon-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon icon-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon icon-youtube-play" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon icon-behance-square" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-element">
              <a href="#" className="user-account for-buy"><i className="icon icon-user" /><span>Account</span></a>
              <a href="#" className="cart for-buy"><i className="icon icon-clipboard" /><span>Cart:(0 $)</span></a>
              <div className="action-menu">
                <div className="search-bar">
                  <a href="#" className="search-button search-toggle" data-selector="#header-wrap">
                    <i className="icon icon-search" />
                  </a>
                  <form role="search" method="get" className="search-box">
                    <input className="search-field text search-input" placeholder="Search" type="search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="main-logo">
              <a href="index.html"><img src="/main-logo.png" alt="logo" /></a>
            </div>
          </div>
          <div className="col-md-10">
            <nav id="navbar">
              <div className="main-menu stellarnav">
                <ul className="menu-list">
                  <li className="menu-item active"><a href="#home" data-effect="Home">Home</a></li>
                  <li className="menu-item"><a href="#about" className="nav-link" data-effect="About">About</a></li>
                  <li className="menu-item has-sub">
                    <a href="#pages" className="nav-link" data-effect="Pages">Pages</a>
                    <ul>
                      <li className="active"><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="styles.html">Styles</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="single-post.html">Post Single</a></li>
                      <li><a href="shop.html">Our Store</a></li>
                      <li><a href="single-product.html">Product Single</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="thank-you.html">Thank You</a></li>
                    </ul>
                  </li>
                  <li className="menu-item"><a href="#popular-books" className="nav-link" data-effect="Shop">Shop</a></li>
                  <li className="menu-item"><a href="#latest-blog" className="nav-link" data-effect="Articles">Articles</a></li>
                  <li className="menu-item"><a href="#contact" className="nav-link" data-effect="Contact">Contact</a></li>
                </ul>
                <div className="hamburger">
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
  <section id="billboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button className="prev slick-arrow">
            <i className="icon icon-arrow-left" />
          </button>
          <div className="main-slider pattern-overlay">
            <div className="slider-item">
              <div className="banner-content">
                <h2 className="banner-title">Life of the Wild</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                <div className="btn-wrap">
                  <a href="#" className="btn btn-outline-accent btn-accent-arrow">Read More<i className="icon icon-ns-arrow-right" /></a>
                </div>
              </div>
              <img src="/main-banner1.jpg" alt="banner" className="banner-image" />
            </div>
            <div className="slider-item">
              <div className="banner-content">
                <h2 className="banner-title">Birds gonna be Happy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
                <div className="btn-wrap">
                  <a href="#" className="btn btn-outline-accent btn-accent-arrow">Read More<i className="icon icon-ns-arrow-right" /></a>
                </div>
              </div>
              <img src="/main-banner2.jpg" alt="banner" className="banner-image" />
            </div>
          </div>
          <button className="next slick-arrow">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="client-holder" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="inner-content">
          <div className="logo-wrap">
            <div className="grid">
              <a href="#"><img src="/client-image1.png" alt="client"></img></a>
              <a href="#"><img src="/client-image2.png" alt="client" ></img></a>
              <a href="#"><img src="/client-image3.png" alt="client" ></img></a>
              <a href="#"><img src="/client-image4.png" alt="client" ></img></a>
              <a href="#"><img src="/client-image5.png" alt="client" ></img></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="featured-books">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header align-center">
            <div className="title">
              <span>Some quality items</span>
            </div>
            <h2 className="section-title">Featured Books</h2>
          </div>
          <div className="product-list" data-aos="fade-up">
            <div className="row">
              <div className="col-md-3">
                <figure className="product-style">
                  <img src="/product-item1.jpg" alt="Books" className="product-item" />
                  <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                  <figcaption>
                    <h3>Simple way of piece life</h3>
                    <p>Armor Ramsey</p>
                    <div className="item-price">$ 40.00</div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3">
                <figure className="product-style">
                  <img src="/product-item2.jpg" alt="Books" className="product-item" />
                  <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                  <figcaption>
                    <h3>Great travel at desert</h3>
                    <p>Sanchit Howdy</p>
                    <div className="item-price">$ 38.00</div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3">
                <figure className="product-style">
                  <img src="/product-item3.jpg" alt="Books" className="product-item" />
                  <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                  <figcaption>
                    <h3>The lady beauty Scarlett</h3>
                    <p>Arthur Doyle</p>
                    <div className="item-price">$ 45.00</div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3">
                <figure className="product-style">
                  <img src="/product-item4.jpg" alt="Books" className="product-item" />
                  <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                  <figcaption>
                    <h3>Once upon a time</h3>
                    <p>Klien Marry</p>
                    <div className="item-price">$ 35.00</div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="btn-wrap align-right">
            <a href="#" className="btn-accent-arrow">View all products <i className="icon icon-ns-arrow-right" /></a>
          </div>
        </div>		
      </div>
    </div>
  </section>
  <section id="best-selling" className="leaf-pattern-overlay">
    <div className="corner-pattern-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="row">
            <div className="col-md-6">
              <figure className="products-thumb">
                <img src="/single-image.jpg" alt="book" className="single-image" />
              </figure>	
            </div>
            <div className="col-md-6">
              <div className="product-entry">
                <h2 className="section-title divider">Best Selling Book</h2>
                <div className="products-content">
                  <div className="author-name">By Timbur Hood</div>
                  <h3 className="item-title">Birds gonna be happy</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                  <div className="item-price">$ 45.00</div>
                  <div className="btn-wrap">
                    <a href="#" className="btn-accent-arrow">shop it now <i className="icon icon-ns-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  <section id="popular-books" className="bookshelf">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header align-center">
            <div className="title">
              <span>Some quality items</span>
            </div>
            <h2 className="section-title">Popular Books</h2>
          </div>
          <ul className="tabs">
            <li data-tab-target="#all-genre" className="active tab">All Genre</li>
            <li data-tab-target="#business" className="tab">Business</li>
            <li data-tab-target="#technology" className="tab">Technology</li>
            <li data-tab-target="#romantic" className="tab">Romantic</li>
            <li data-tab-target="#adventure" className="tab">Adventure</li>
            <li data-tab-target="#fictional" className="tab">Fictional</li>
          </ul>
          <div className="tab-content">
            <div id="all-genre" data-tab-content className="active">
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Portrait photography</h3>
                      <p>Adam Silber</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item2.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Once upon a time</h3>
                      <p>Klien Marry</p>
                      <div className="item-price">$ 35.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Tips of simple lifestyle</h3>
                      <p>Bratt Smith</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item4.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Just felt from outside</h3>
                      <p>Nicole Wilson</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item6.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item8.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="business" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item2.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item4.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item6.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item8.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="technology" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="romantic" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="adventure" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="fictional" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="special-offer" className="bookshelf">
    <div className="section-header align-center">
      <div className="title">
        <span>Grab your opportunity</span>
      </div>
      <h2 className="section-title">Books with offer</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="inner-content">	
          <div className="product-list" data-aos="fade-up">
            <div className="grid product-grid">				
              <figure className="product-style">
                <img src="/product-item5.jpg" alt="Books" className="product-item" />
                <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                <figcaption>
                  <h3>Simple way of piece life</h3>
                  <p>Armor Ramsey</p>
                  <div className="item-price">
                    <span className="prev-price">$ 50.00</span>$ 40.00</div>
                </figcaption>
              </figure>
              <figure className="product-style">
                <img src="/product-item6.jpg" alt="Books" className="product-item" />
                <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                <figcaption>
                  <h3>Great travel at desert</h3>
                  <p>Sanchit Howdy</p>
                  <div className="item-price">
                    <span className="prev-price">$ 30.00</span>$ 38.00</div>
                </figcaption>
              </figure>
              <figure className="product-style">
                <img src="/product-item7.jpg" alt="Books" className="product-item" />
                <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                <figcaption>
                  <h3>The lady beauty Scarlett</h3>
                  <p>Arthur Doyle</p>
                  <div className="item-price">
                    <span className="prev-price">$ 35.00</span>$ 45.00</div>
                </figcaption>
              </figure>
              <figure className="product-style">
                <img src="/product-item8.jpg" alt="Books" className="product-item" />
                <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                <figcaption>
                  <h3>Once upon a time</h3>
                  <p>Klien Marry</p>
                  <div className="item-price">
                    <span className="prev-price">$ 25.00</span>$ 35.00</div>
                </figcaption>
              </figure>
              <figure className="product-style">
                <img src="/product-item2.jpg" alt="Books" className="product-item" />
                <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                <figcaption>
                  <h3>Simple way of piece life</h3>
                  <p>Armor Ramsey</p>
                  <div className="item-price">$ 40.00</div>
                </figcaption>
              </figure>					
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="download-app" className="leaf-pattern-overlay">
    <div className="corner-pattern-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="row">
            <div className="col-md-5">
              <figure>
                <img src="/device.png" alt="phone" className="single-image" />
              </figure>
            </div>
            <div className="col-md-7">
              <div className="app-info">
                <h2 className="section-title divider">Download our app now !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
                <div className="google-app">
                  <img src="/google-play.jpg" alt="google play" />
                  <img src="/app-store.jpg" alt="app store" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="footer-item">
            <div className="company-brand">
              <img src="/main-logo.png" alt="logo" className="footer-logo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>About Us</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#">vision</a>
              </li>
              <li className="menu-item">
                <a href="#">articles </a>
              </li>
              <li className="menu-item">
                <a href="#">careers</a>
              </li>
              <li className="menu-item">
                <a href="#">service terms</a>
              </li>
              <li className="menu-item">
                <a href="#">donate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>Discover</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item">
                <a href="#">Books</a>
              </li>
              <li className="menu-item">
                <a href="#">Authors</a>
              </li>
              <li className="menu-item">
                <a href="#">Subjects</a>
              </li>
              <li className="menu-item">
                <a href="#">Advanced Search</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>My account</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#">Sign In</a>
              </li>
              <li className="menu-item">
                <a href="#">View Cart</a>
              </li>
              <li className="menu-item">
                <a href="#">My Wishtlist</a>
              </li>
              <li className="menu-item">
                <a href="#">Track My Order</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>Help</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#">Help center</a>
              </li>
              <li className="menu-item">
                <a href="#">Report a problem</a>
              </li>
              <li className="menu-item">
                <a href="#">Suggesting edits</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </footer>
  <div id="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                <p>© 2022 All rights reserved. Free HTML Template by <a href="https://www.templatesjungle.com/" target="_blank">TemplatesJungle</a></p>
              </div>
              <div className="col-md-6">
                <div className="social-links align-right">
                  <ul>
                    <li>
                      <a href="#"><i className="icon icon-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-youtube-play" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-behance-square" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
*/