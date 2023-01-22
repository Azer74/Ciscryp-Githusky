import React, { useState } from "react";
import FeaturedStyle from "../Featured/Featured.module.css";
import { Icon } from "@iconify/react";

const data = [
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/2.305a72ad5ecb5a85bde0.png",
    productName: "1300",
    stock: "24",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/10.b1fe04d77279bd8a27b6.png",
    productName: "1344",
    stock: "41",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/7.31cd0b0c7d59599456b7.png",
    productName: "1873",
    stock: "13",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/3.13a3f285f186a17a3c82.png",
    productName: "1120",
    stock: "57",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/4.597690439f454d5ca73b.png",
    productName: "1780",
    stock: "69",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/14.ba75b8b7a0985f03c529.png",
    productName: "1946",
    stock: "43",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/15.a7ffbaa82eb75b42ecdb.png",
    productName: "1247",
    stock: "58",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl:
      "https://chisnghiax.com/ciscryp/static/media/5.22839804fb8849678932.png",
    productName: "1924",
    stock: "12",
  },
];

const Featured = () => {
  const [show, setShow] = useState(true);
  return (
    <section className={FeaturedStyle.featured}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={FeaturedStyle.featured_heading}>
              <h2>Featured NFTs</h2>
              <p>Discover the most outstanding NFTs in all topics of life.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4 pb-2">
        <div className="row">
          <div className="col-xl-6">
            <ul className={FeaturedStyle.sorting_by}>
              <li className={FeaturedStyle.aktiv}>All NFTs</li>
              <li>Arts</li>
              <li>Musics</li>
              <li>Sports</li>
              <li>Photography</li>
            </ul>
          </div>
          <div className="col-xl-6">
            <div className={FeaturedStyle.right_col}>
              <div
                className={FeaturedStyle.filter_button}
                onClick={() => setShow(!show)}
              >
                <Icon icon="bi:funnel" />
                <span>Filter</span>
                <small>
                  <Icon icon="bi:chevron-down" />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {show ? (
              <div className={FeaturedStyle.disappearing_field}>
                <ul className={FeaturedStyle.filter_list}>
                  <li className={FeaturedStyle.white_one}>
                    <Icon icon="ion:wallet-outline" />
                    <span>0.01 ETH - 10 ETH</span>
                    <small>
                      <Icon icon="bi:x-circle-fill" />
                    </small>
                  </li>
                  <li>
                    <Icon icon="ri:lightbulb-flash-line" />
                    <span>Sale Types</span>
                    <Icon icon="bi:chevron-down" />
                  </li>
                  <li>
                    <Icon icon="bx:movie-play" />
                    <span>File Types</span>
                    <Icon icon="bi:chevron-down" />
                  </li>
                  <li>
                    <Icon icon="ep:sort" />
                    <span>Sort order</span>
                    <Icon icon="bi:chevron-down" />
                  </li>
                  <li className={FeaturedStyle.white_one}>
                    <Icon icon="mdi:person-search-outline" />
                    <span>Verified creator</span>
                    <small>
                      <Icon icon="bi:x-circle-fill" />
                    </small>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {data.map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div className="col-xl-3 px-3">
                <div className={FeaturedStyle.robots_card}>
                  <div className={FeaturedStyle.pic_container}>
                    <img src={element.imgUrl} alt=""></img>
                    <div className={FeaturedStyle.card_overlay}>
                      <div className={FeaturedStyle.image_icon}>
                        <Icon icon="mdi-light:image" />
                      </div>
                      <div className={FeaturedStyle.likes}>
                        <Icon icon="ph:heart-light" />
                        <span>22</span>
                      </div>
                    </div>
                  </div>
                  <div className={FeaturedStyle["card_text"]}>
                    <div className={FeaturedStyle["box_top"]}>
                      <div className={FeaturedStyle.top_top}>
                        <div className={FeaturedStyle.micro_avatars}>
                          <div
                            className={`${FeaturedStyle.micro_avatar} ${FeaturedStyle.first_ava}`}
                          >
                            <img
                              src="https://chisnghiax.com/ciscryp/static/media/Image-4.36899b28c72dc4bc41a9.png"
                              alt=""
                            />
                          </div>
                          <div
                            className={`${FeaturedStyle.micro_avatar} ${FeaturedStyle.second_ava}`}
                          >
                            <img
                              src="https://chisnghiax.com/ciscryp/static/media/Image-1.90baa8cc883db8970fda.png"
                              alt=""
                            />
                          </div>
                          <div
                            className={`${FeaturedStyle.micro_avatar} ${FeaturedStyle.third_ava}`}
                          >
                            <img
                              src="https://chisnghiax.com/ciscryp/static/media/Image-2.405c62ff9ad88c47e28c.png"
                              alt=""
                            />
                          </div>
                          <div
                            className={`${FeaturedStyle.micro_avatar} ${FeaturedStyle.fourth_ava}`}
                          >
                            <img
                              src="https://chisnghiax.com/ciscryp/static/media/Image-5.b1088376a574bcedc983.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className={FeaturedStyle.stock_having}>
                          <span>{`${element.stock} in stock`}</span>
                        </div>
                      </div>
                      <h5>CloneF #{`${element.productName}`}</h5>
                    </div>
                    <div className={FeaturedStyle.box_bottom}>
                      <div className={FeaturedStyle.legend_field}>
                        <small>Price</small>
                        <div className={FeaturedStyle.legend_inner}>
                          <h6>1.000 ETH</h6>
                        </div>
                      </div>
                      <div className={FeaturedStyle.hours_count}>
                        <Icon icon="svg-spinners:clock" />
                        <span>6 hours left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={FeaturedStyle.col_adaptation}>
              <button>
                <Icon icon="svg-spinners:blocks-shuffle-3" />
                Show me more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
