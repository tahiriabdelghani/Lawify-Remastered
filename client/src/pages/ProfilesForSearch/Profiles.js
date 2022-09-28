import React, { useEffect, useState } from "react";
import FormRow from "../../components/FormRow";
// import image from "../../assets/images/profile.jfif";
import axios from "axios";
import "../../css/profiles.css";
import styled from "styled-components";
import SearchCard from "../../components/SearchCard";
import { Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import Calendar from "../../components/Calendar";

class Profiles extends React.Component {
  state = {
    name: "",
    email: "",
    city: "",
    price: "",
    speciality: "",
    items: [],
    search: "",
    image: "",
    calendarState: false,
    selectedAvocat: "",
  };

  handleSelectedAvocat = () => {};

  setSelectedAvocat = (id) => {
    this.setState({ ...this.state, selectedAvocat: id }, function () {
      this.setState({
        ...this.state,
        calendarState: !this.state.calendarState,
      });
      console.log(`test ${this.state.selectedAvocat}`);
    });
  };

  openCalendar = () => {
    this.setState({ ...this.state, calendarState: !this.state.calendarState });
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  removeFromLocalStorage = () => {
    {
      localStorage.removeItem("city");
    }
    {
      localStorage.removeItem("specialty");
    }
  };

  getBlogPost = () => {
    axios
      .get(
        localStorage.getItem("city").trim().length === 0 &&
          localStorage.getItem("speciality").trim().length === 0
          ? `/api/avocats`
          : `/api/avocat?city=${localStorage
              .getItem("city")
              .trim()}&speciality=${localStorage.getItem("speciality").trim()}`
      )
      .then((response) => {
        const data = response.data;
        this.setState({ items: data });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  displayBlogPost = (items) => {
    return items
      .filter((menuItem) => {
        const { name } = menuItem;
        if (this.state.search == "") {
          return menuItem;
        } else if (
          name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
        ) {
          return menuItem;
        }
      })
      .map((menuItem) => {
        const { _id, name, email, city, price, speciality, image } = menuItem;
        const link = `/profile/${_id}`;
        return (
          <div key={_id}>
            <article className="menu-item">
              <Link style={{width:"fit-content"}} to={link}>
                <img
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: " 0.75rem",
                  }}
                  src={image}
                  alt={name}
                />
              </Link>

              <div className="item-info">
                <header>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: ": var(--primary-500)",
                    }}
                    to="/profile"
                  >
                    <h5>{name}</h5>
                  </Link>
                  <h5 className="price">{price} $/min</h5>
                </header>
                <p className="item-text">{speciality}</p>
                <p className="item-text" style={{ color: "#2cb1bc" }}>
                  <GiPositionMarker /> {city}
                </p>
                <button
                  className="item-text"
                  onClick={() => {
                    this.setSelectedAvocat(_id);
                  }}
                  style={{
                    color: "black",
                    backgroundColor: "#bef8fd",
                    padding: "12px",
                    borderRadius: "12px",
                    marginTop: "14px",
                    font: "caption",
                    cursor: "pointer",
                  }}
                >
                  Voir le créneaux de disponibilité
                </button>
              </div>
            </article>
          </div>
        );
      });
  };
  render() {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h5>
              Il vous suffit de sélectionner l'avocat de votre choix, de
              compléter vos coordonnées et la mise en relation est directe et
              instantanée.
            </h5>

            <FormRow
              style={{ justifyContent: "center", marginTop: 30, width: 400 }}
              type="text"
              name="search"
              // labelText="Search"
              placeholder="entrer le nom d'un avocat .."
              value={this.state.search}
              handleChange={this.handleChange}
            />
            <div className="underline"></div>
          </div>

          <div className="section-center">
            {this.displayBlogPost(this.state.items)}
          </div>

          <Calendar
            key={this.state.selectedAvocat}
            id="calendar"
            selectedAvocat={this.state.selectedAvocat}
            calendarState={this.state.calendarState}
            openCalendar={this.openCalendar}
            // onModalSubmit={onInfosModalSubmit}
          />
        </section>
      </main>
    );
  }
}

export default Profiles;

const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
  span {
    color: var(--primary-500);
  }
`;
