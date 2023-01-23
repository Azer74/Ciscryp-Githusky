import React from "react";
import BookStyle from "../Big-book-photo/BigBook.module.css";
import { Icon } from "@iconify/react";
const BigBook = () => {
  return (
    <section className={BookStyle.bigbook}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className={BookStyle.col_adaptation}>
              <h2>Never miss a drop!</h2>
              <p>
                Subcribe to our super-exclusive drop list and be the first to
                know abour upcoming drops
              </p>
              <ul>
                <li>
                  <span>01</span>Get more discount
                </li>
                <li>
                  <small>02</small>Get premium magazines
                </li>
              </ul>
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <button>
                  <Icon icon="material-symbols:arrow-right-alt-rounded" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-7">
            <div className={BookStyle.book_pic}>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/SVG-subcribe2.efb832b25bd6eca32484.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBook;
