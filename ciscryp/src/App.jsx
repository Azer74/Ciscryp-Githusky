import React from 'react'
import styled from "../src/App.module.css";

const data = [
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg",
    textData: "Development",
    desc: "Getting tickets to the big show",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg",
    textData: "Management",
    desc: "A big ticket gone to be an interesting",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: "http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg",
    textData: "Design",
    desc: "The Home of the Future Could Bebes",
  },
]

function App() {
  return (
    <div>
       <main>
      <div className={styled.cards}>
        {data.length > 0 ? data.slice(0, 6).map((element, index) => (
          <React.Fragment key={`data_id ${element.id}`}>
            <div className={styled['card_img']}>
              <img src={element.imgUrl} alt=""></img>
              <div className={styled['card_text']}>
                <div className={styled['box_shadow']}>
                  <h6>{element.textData}</h6>
                  <h3>{element.desc}</h3>
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
          : <div className="container">
            <div className="row justify-content-center align-items-center mt-3 pt-3">
              <div className="col-lg-4">
                <div className={styled.preloader}>
                  <h4>Loading...</h4>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </main>
    </div>
  );
}

export default App;
