import React from "react";
import { Icon } from "@iconify/react";
import CreatorsStyle from "../Creators/Creators.module.css";
import Verified from "../../../assets/verified.png";

const Creators = () => {
  return (
    <section className={CreatorsStyle.third_section}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={CreatorsStyle.click_text}>
              <h3>
                Popular{" "}
                <span>
                  Creators
                  <Icon icon="bi:chevron-down" />
                </span>
              </h3>
            </div>
          </div>
          <div className="col-6">
            <div className={CreatorsStyle.sorting_container}>
              <div className={CreatorsStyle.sorting_btn}>
                <div className={CreatorsStyle.sorting_icon}>
                  <Icon icon="ep:sort" />
                </div>
                <span>Sort order</span>
                <small>
                  <Icon icon="mdi:chevron-down" />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-4">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1556139966-56c3df1ddc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Belinda Rer <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1620121684840-edffcfc4b878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Camren Banes <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-5.b1088376a574bcedc983.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1483792879322-696964487a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Amaris Pitt <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-2.405c62ff9ad88c47e28c.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMjI1NTc4Nnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Charlize Ray <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-8.5ae85a64aab1965e33a5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.pexels.com/photos/4765691/pexels-photo-4765691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Carli Costa <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-10.93048ca791076288cf69.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1483792879322-696964487a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Arnav Moris <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-1.90baa8cc883db8970fda.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Mireya Roman <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-4.36899b28c72dc4bc41a9.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className={CreatorsStyle.card1}>
              <div className={CreatorsStyle.images_shrink}>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1556139966-56c3df1ddc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className={CreatorsStyle.img_container}>
                  <img
                    src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className={CreatorsStyle.card_texts}>
                <div className={CreatorsStyle.items_head}>
                  <div className={CreatorsStyle.person_inform}>
                    <h6>
                      Belinda Rer <img src={Verified} alt="" />
                    </h6>
                    <small>@creator</small>
                  </div>
                  <span>Following</span>
                </div>
                <p>
                  X-Metaverse is a Star Wars game based on NFT+ blockchain
                  exploration, mining, trading ...
                </p>
              </div>
              <div className={CreatorsStyle.avatar_absolute}>
                <div className={CreatorsStyle.avatar_container}>
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 pt-2">
        <div className="row">
          <div className="col-xl-12">
            <div className={CreatorsStyle.buttons_container}>
              <button>Show me more</button>
              <button className={CreatorsStyle.blue_button}>
                Become an author
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
