import React, { useState } from "react";
import useFetch from "../src/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import { events } from "../../Meetup-Backend/models/meetup.model";

export const Main = ({ searchTerm }) => {
  const [eventType, setEventType] = useState("Both");
  const { data, loading, error } = useFetch(
    "https://meetup-backend-seven.vercel.app/events"
  );
  // const {
  //   data: searchData,
  //   loading,
  //   error,
  // } = useFetch(
  //   `https://meetup-backend-seven.vercel.app/events/title/${searchTerm}`
  // );

  console.log(data);
  // console.log(searchData);

  // const eventsToFilter = searchTerm && searchData ? searchData : data;
  // console.log(eventsToFilter);

  // const selectType =
  //   eventType == "Both"
  //     ? data
  //     : eventsToFilter.filter((event) => {
  //         return event.typeOfEvent === eventType;
  //       });
  // const filteredEvents =
  //   eventsToFilter && eventType !== "Both"
  //     ? eventsToFilter.filter((event) => event.typeOfEvent === eventType)
  //     : eventsToFilter;

  // console.log(filteredEvents);
  // console.log(selectType);

  // Filter events locally by searchTerm and eventType
  let filteredEvents = data;

  if (searchTerm) {
    filteredEvents = filteredEvents.filter((event) => {
      const matchesTitle = event.title
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(searchTerm.split(" ").join("").toLowerCase());

      console.log("Tags:", event.tags);
      console.log("Search Term:", searchTerm);

      const matchesTags = event.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return matchesTitle || matchesTags;
    });
  }

  // if (searchTerm) {
  //   filteredEvents = filteredEvents.filter((event) => {
  //     console.log("Tags:", event.tags);
  //     console.log("Search Term:", searchTerm);

  //     return event.tags.some((tag) =>
  //       tag
  //         .split(" ")
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchTerm.split(" ").join("").toLowerCase())
  //     );
  //   });
  // }

  if (eventType !== "Both") {
    filteredEvents = filteredEvents.filter(
      (event) => event.typeOfEvent === eventType
    );
  }

  console.log(filteredEvents);

  return (
    <div className="container mt-4 mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="display-5 fw-normal">Meetup Events</h3>

        <div className="d-flex col-md-">
          <select
            className="form-select"
            aria-label="Select Event Type"
            value={eventType}
            style={{ minWidth: "180px" }}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="" disabled>
              Select Event Type
            </option>
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p>Error loading events</p>}

      {filteredEvents && filteredEvents.length > 0 ? (
        <div className="row mt-1">
          {filteredEvents.map((event) => (
            <div className="col-md-4 p-3" key={event._id}>
              <div className="card">
                <a href={`/events/${event._id}`} className="card-link">
                  <img
                    src={event.thumbnail}
                    className="card-img-top"
                    alt="Event preview"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-img-overlay d-flex align-items-start justify-content-start">
                    <span className="badge bg-primary">
                      {event.typeOfEvent}
                    </span>
                  </div>
                </a>
                <div className="card-body">
                  <p className="card-text">{event.eventTiming}</p>
                  <h5 className="card-title">{event.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};
