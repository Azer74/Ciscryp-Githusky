import { Icon } from "@iconify/react";
import SliderStyle from "../Slider/Slider.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Verified from "../../../assets/verified.png";

const Slider = () => {
  return (
    <section className={SliderStyle.slidering}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-6">
            <div className={SliderStyle.left_slide_heading}>
              <h2>
                Top collections{" "}
                <span>
                  last 24 hours
                  <Icon icon="bi:chevron-down" />
                </span>
              </h2>
              <p>Discover the new creative economy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className={SliderStyle.my_slider}
            >
              <SwiperSlide>
                <div className={SliderStyle.slider_card}>
                  <div className={SliderStyle.slider_image}>
                    <img
                      src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className={SliderStyle.overlay_gradient}></div>
                  </div>
                  <div className={SliderStyle.card_absolute_inner}>
                    <div className={SliderStyle.card_bottom}>
                      <div className={SliderStyle.person_information}>
                        <div className={SliderStyle.person_photo}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-9.d879028d45de09c9ca3b.png"
                            alt=""
                          />
                        </div>
                        <h6>by Jane Cooper</h6>
                        <img
                          src={Verified}
                          className={SliderStyle.verified_icon}
                          alt=""
                        />
                      </div>
                      <h2>Awesome collection</h2>
                      <div className={SliderStyle.photos_container}>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={SliderStyle.slider_card}>
                  <div className={SliderStyle.slider_image}>
                    <img
                      src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                      alt=""
                    />
                    <div className={SliderStyle.overlay_gradient}></div>
                  </div>
                  <div className={SliderStyle.card_absolute_inner}>
                    <div className={SliderStyle.card_bottom}>
                      <div className={SliderStyle.person_information}>
                        <div className={SliderStyle.person_photo}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                            alt=""
                          />
                        </div>
                        <h6>by Jane Cooper</h6>
                        <img
                          src={Verified}
                          className={SliderStyle.verified_icon}
                          alt=""
                        />
                      </div>
                      <h2>Awesome collection</h2>
                      <div className={SliderStyle.photos_container}>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1637611331620-51149c7ceb94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={SliderStyle.slider_card}>
                  <div className={SliderStyle.slider_image}>
                    <img
                      src="https://images.unsplash.com/photo-1625521416008-78e00551375b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className={SliderStyle.overlay_gradient}></div>
                  </div>
                  <div className={SliderStyle.card_absolute_inner}>
                    <div className={SliderStyle.card_bottom}>
                      <div className={SliderStyle.person_information}>
                        <div className={SliderStyle.person_photo}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-3.f257bc3c2ce5ae3a57db.png"
                            alt=""
                          />
                        </div>
                        <h6>by Jane Cooper</h6>
                        <img
                          src={Verified}
                          className={SliderStyle.verified_icon}
                          alt=""
                        />
                      </div>
                      <h2>Awesome collection</h2>
                      <div className={SliderStyle.photos_container}>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1625527575307-13c5d315087b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1625527575322-791601f72b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={SliderStyle.slider_card}>
                  <div className={SliderStyle.slider_image}>
                    <img
                      src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                      alt=""
                    />
                    <div className={SliderStyle.overlay_gradient}></div>
                  </div>
                  <div className={SliderStyle.card_absolute_inner}>
                    <div className={SliderStyle.card_bottom}>
                      <div className={SliderStyle.person_information}>
                        <div className={SliderStyle.person_photo}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-8.5ae85a64aab1965e33a5.png"
                            alt=""
                          />
                        </div>
                        <h6>by Jane Cooper</h6>
                        <img
                          src={Verified}
                          className={SliderStyle.verified_icon}
                          alt=""
                        />
                      </div>
                      <h2>Awesome collection</h2>
                      <div className={SliderStyle.photos_container}>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                        <div className={SliderStyle.mini_photo}>
                          <img
                            src="https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={SliderStyle.slider_card_empty}>
                  <div className={SliderStyle.slider_add}>
                    <div className={SliderStyle.empty_card_text}>
                      <h5>Collections ↗</h5>
                      <span>Show me more</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
