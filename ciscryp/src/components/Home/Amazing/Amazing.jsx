import React from "react";
import AmazingStyle from "../Amazing/Amazing.module.css";
import { BsHeart } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import Verified from "../../../assets/verified.png";
import { Icon } from "@iconify/react";
const Amazing = () => {
  return (
    <section className={AmazingStyle.second_section}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="row justify-content-end">
              <div className="col-xl-4">
                <div className={AmazingStyle.slider_btns}>
                  <div className={AmazingStyle.btn_container}>
                    <div className={AmazingStyle.arrows}>←</div>
                    <div className={AmazingStyle.arrows}>→</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 px-4">
                <div className={AmazingStyle.relative_col12}>
                  <div className={AmazingStyle.timer_container}>
                    <h2>Beautiful NFT</h2>
                    <div className={AmazingStyle.avatars}>
                      <div className={AmazingStyle.person_info}>
                        <div className={AmazingStyle.img_avatar}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-10.93048ca791076288cf69.png"
                            alt=""
                          />
                        </div>
                        <div className={AmazingStyle.person_txts}>
                          <small>Creator</small>
                          <h6>
                            Jane Cooper <img src={Verified} alt="" />
                          </h6>
                        </div>
                      </div>
                      <div className={AmazingStyle.person_info}>
                        <div className={AmazingStyle.img_avatar}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/collection.6624a7ff4b0f48fc6e24.png"
                            alt=""
                          />
                        </div>
                        <div className={AmazingStyle.person_txts}>
                          <small>Collection</small>
                          <h6>Marscapes</h6>
                        </div>
                      </div>
                    </div>
                    <div className={AmazingStyle.legend_field}>
                      <small>Current Bid</small>
                      <div className={AmazingStyle.legend_inner}>
                        <h3>1.000 ETH</h3>
                        <span>(≈ $3,221.22)</span>
                      </div>
                    </div>
                    <div className={AmazingStyle.timer_field}>
                      <div className={AmazingStyle.timer_heading}>
                        <Icon icon="svg-spinners:clock" />
                        <p>Auction ending in:</p>
                      </div>
                      <div className={AmazingStyle.timer_number}>
                        <ul>
                          <li>
                            <h4>19</h4>
                            <span>Days</span>
                          </li>
                          <li>
                            <h4>10</h4>
                            <span>hours</span>
                          </li>
                          <li>
                            <h4>9</h4>
                            <span>mins</span>
                          </li>
                          <li>
                            <h4>35</h4>
                            <span>secs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={AmazingStyle.timer_buttons}>
                      <button className={AmazingStyle.blue_one}>
                        Place a bid
                      </button>
                      <button>View item</button>
                    </div>
                  </div>
                  <div className={AmazingStyle.img_container}>
                    <img
                      src="https://chisnghiax.com/ciscryp/static/media/large1.501744b97da258c84cca.png"
                      alt=""
                    />
                    <div className={AmazingStyle.likes}>
                      <BsHeart />
                      <span>22</span>
                    </div>
                    <div className={AmazingStyle.video_icon}>
                      <AiOutlineVideoCamera />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amazing;
