import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios2";
import axios1 from "../../axios";
import {context} from "../../context/ContextUse"
import Pusher from "pusher-js";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import GeneralNavBar from "../components/GeneralNavBar"

class Chat extends Component {
  static contextType = context;
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
      product_ID: window.location.pathname.split("/chat/")[1],
      product: {},
      images: [],
      error: "",
      reload: true
    };
    this.forceUpdate = this.forceUpdate.bind(this)
  }

  //  forceUpdate() {
  //    if(this.state.reload === true) {
  //      window.location.reload()
  //    }
  //    this.setState({...this.state, reload: false})
  // }



  componentDidMount() {
   // this.forceUpdate()
    var chatCookies = document.cookie.split(this.state.product_ID + "=")[1];
    const {user} = this.context;
    console.log(user)
    if (
      chatCookies !== undefined &&
      chatCookies !== "" &&
      chatCookies !== null
    ) {
      const previousChat = JSON.parse(chatCookies.split(";")[0]);
      this.setState({
        chats: previousChat,
      });
    }
    console.log(this.state.product_ID)
    axios1
      .get("/product/" + this.state.product_ID)
      .then((res) => {
        console.log(res)
        this.setState({
          ...this.state,
          product: res.data.Product,
          images: [res.data.Product.images[0]],
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          error:
            "Invalid product, Please make sure you selected the correct product",
        });
      });
    const pusher = new Pusher("1221dbf2532fe2d6097c", {
      cluster: "eu",
      encrypted: true,
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data) => {
      this.setState({
        chats: [data, ...this.state.chats],
        text: "",
      });
      var now = new Date();
      now.setMonth(now.getMonth() + 1);
      document.cookie =
        this.state.product_ID +
        "=" +
        JSON.stringify(this.state.chats) +
        ";expires=" +
        now.toUTCString();
    });

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState);
    const {user} = this.context;
    if(prevState.username !== user.username) {
      this.setState((prev) => ({...prev, username: user.username}))
    }
  }

  handleTextChange(e) {
    if (this.state.username !== "") {
      let createdAt = new Date();
      createdAt = createdAt.toLocaleString();
      if (e.keyCode === 13 && this.state.text.trim() !== "") {
        const payload = {
          sender: this.state.username,
          message: this.state.text,
          created_at: createdAt,
          product_id: this.state.product_ID,
        };
        axios.post("/pusher/message", payload);
      } else {
        this.setState({ text: e.target.value });
      }
    }
  }



  render() {
    // window.location.reload(false)
    if (this.state.error !== "")
      return (
        <>
          <GeneralNavBar />
          <div className="App mt-5" style={{ margin: "50px", padding: "15px" }}>
            <div className="alert alert-danger">{this.state.error}</div>
          </div>
        </>
      );
    console.log(this.state)
    return (
      <>
        <Navbar />
        <div className="App mt-5" style={{ margin: "50px", padding: "15px" }}>
          <Link
            to={`/apartment-details/${this.state.ID}`}
            className="btn btn-primary btn-sm mb-3"
          >
            Go Back
          </Link>
          <header className="App-header">
            <h1 className="App-title">Welcome {this.state.username}</h1>
          </header>
          <section>
            <div className="row">
              <div className="col-md-8 col-lg-8 col-xs-8">
                <ChatBox
                  text={this.state.text}
                  username={this.state.username}
                  handleTextChange={this.handleTextChange}
                />
                <ChatList
                  chats={this.state.chats}
                  apartmentID={this.state.product_ID}
                />

              </div>
              <div className="col-md-4 col-lg-4 col-xs-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.product.title}</h5>
                    {this.state.images.map((image, idx) => {
                      if (idx === 0) {
                        return (
                          <img
                            src={image.url}
                            alt={this.state.product.title}
                            height="40%"
                            width="100%"
                          />
                        );
                      }
                      return null;
                    })}
                    <h4 className="card-text mt-2 mb-2">
                      {" "}
                      Price:{" "}
                      <small className="text-muted">
                        ₦{Number(this.state.product.price).toLocaleString()}
                      </small>
                    </h4>
                    <h4 className="card-text">
                      {" "}
                      Location:{" "}
                      <small className="text-muted">
                        {String(this.state.product.category)
                          .charAt(0)
                          .toUpperCase() +
                          String(this.state.product.category).slice(1)}
                      </small>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Chat;
