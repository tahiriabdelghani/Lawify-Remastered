import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FormRow, FormRowSelect, Alert } from "../components";
// import "./";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import JobColumns from "../components/JobColumns";
import AvocatNavBar from "../components/NavBar/AvocatNavBar";

const user = JSON.parse(localStorage.getItem("user"));

// console.log("userId is " + user._id);

class FetchTime extends React.Component {
  state = {
    startTime: "",
    endTime: "",
    createdBy: "",
    jobTypeOptions: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    posts: [],
  };
  // user = JSON.parse(localStorage.getItem("user"));
  componentDidMount = () => {
    this.getBlogPost();
    // user = JSON.parse(localStorage.getItem("user"));
  };

  getBlogPost = () => {
    axios
      .get(`/api/${user._id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        // alert("Error retrieving data!!!");
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      day: this.state.day,
      createdBy: user._id,
    };
    // N.B that (startTime > endTime) {
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      startTime: "",
      endTime: "",
    });
  };

  displayBlogPost = (posts) => {
    if (!posts.length)
      return (
        <EmptyContainer>
          <h5>
            Currently, you have no <span>Work Times </span>
            to display
          </h5>
        </EmptyContainer>
      );

    return posts.map((post) => (
      <Container key={post._id}>
        <article className="job">
          <span className="company">{post.day}</span>
          {/* <span className="icon">{post.day}</span> */}
          <span className="position">{post.startTime}</span>
          <span className="company">{post.endTime}</span>
          <span className="company"></span>
          <div
            className="action-div"
            onClick={() => {
              axios.delete(`/api/${post._id}`) && this.getBlogPost();
            }}
          >
            <button className=" delete-btn" type="button">
              <FaTrash />
            </button>
          </div>
        </article>
      </Container>
    ));
  };

  render() {
    console.log("State: ", this.state);

    //JSX
    return (
      <>
        <AvocatNavBar />
        <Wrapper>
          {" "}
          <form className="form" onSubmit={this.submit}>
            <div className="form-center">
              <FormRowSelect
                name="day"
                labelText="Day"
                value={this.state.day}
                handleChange={this.handleChange}
                list={this.state.jobTypeOptions}
              />
              <FormRow
                type="time"
                name="startTime"
                value={this.state.startTime}
                handleChange={this.handleChange}
                labelText="Heure de début"
              />
              <FormRow
                type="time"
                name="endTime"
                value={this.state.endTime}
                handleChange={this.handleChange}
                labelText="Heure de fin"
              />
              <div className="btn-container">
                <button type="submit" className="btn btn-block submit-btn">
                  Ajouter
                </button>
              </div>
            </div>{" "}
          </form>
          <JobColumns />
          <div className="blog-">{this.displayBlogPost(this.state.posts)}</div>
        </Wrapper>
      </>
    );
  }
}

export default FetchTime;

const Container = styled.section`
  .job {
    background: var(--white);
    border-radius: var(--borderRadius);
    margin-bottom: 2rem;
    display: grid;
    padding: 2rem 0;
    justify-content: center;
    text-align: center;
  }
  .icon {
    background: var(--primary-500);
    display: block;
    border-radius: var(--borderRadius);
    color: var(--white);
    font-size: 2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  span {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .position {
    font-weight: 600;
  }
  .date {
    color: var(--grey-500);
  }
  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    margin: 0.75rem auto;
    width: 100px;
  }
  .edit-btn {
    color: var(--green-dark);
    border-color: transparent;
    background: transparent !important;
    outline: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    display: inline-block;
    appearance: none;
  }
  .delete-btn {
    color: var(--red-dark);
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    background: transparent;
  }
  .edit-btn,
  .delete-btn {
    font-size: 1rem;
    line-height: 1.15;
    margin-bottom: -3px;
  }

  .action-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
    .icon {
      display: none;
    }
    background: var(--white);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);

    .job {
      border-radius: 0;
      justify-content: left;
      text-align: left;
      border-bottom: 1px solid var(--grey-200);
      grid-template-columns: 1fr 1fr 150px 100px 100px;
      align-items: center;
      padding: 1rem 1.5rem;
      column-gap: 1rem;
      margin-bottom: 0;
    }
    .job:last-child {
      border-bottom: none;
    }
    span {
      font-size: var(--small-text);
    }
    .company,
    .position {
      font-weight: 400;
      text-transform: capitalize;
    }
    .date {
      font-weight: 400;
      color: var(--grey-500);
    }

    .status {
      font-size: var(--smallText);
    }

    .action-div {
      margin-left: 1rem;
      justify-content: left;
    }
  }
`;
const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
  span {
    color: var(--primary-500);
  }
`;
