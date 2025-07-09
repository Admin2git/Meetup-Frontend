import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../src/useFetch";
import { Header } from "../components/Header";

export const EventDetails = () => {
  const { data, loading, error } = useFetch(
    "https://meetup-backend-nine.vercel.app/events"
  );
  console.log(data);

  const { eventId } = useParams();
  console.log(eventId);

  const eventData = data?.find((event) => event._id === eventId);
  console.log(eventData);

  return (
    <div className="bg-body-tertiary">
      <Header />
      {eventData ? (
        <main className="container my-4">
          <hr />

          <div className="row g-4">
            {/* Left Section */}
            <div className="col-lg-8">
              <h2>{eventData.title}</h2>
              <p className="pt-4">
                Hosted By:
                <p>
                  <strong>{eventData.hostedBy}</strong>
                </p>
              </p>
              <img
                src={eventData.thumbnail}
                alt={eventData.title}
                className="img-fluid  rounded mb-4"
                style={{ width: "600px", height: "400px", objectFit: "cover" }}
              />
              <h4 className="mt">Details: </h4>
              <div
                style={{
                  height: "auto",
                  width: "700px",
                  textAlign: "justify",
                  backgroundColor: "",
                }}
              >
                {eventData.details}
              </div>

              <h4 className="mt-4">Additional Information: </h4>
              <p>
                <strong>Capacity: </strong>
                {eventData.capacity}
              </p>
              <p>
                <strong>ContactEmail: </strong>
                {eventData.contactEmail}
              </p>
              <h4 className="mt-4">Event Tags: </h4>
              {eventData.tags.map((event) => (
                <span className="badge bg-primary p-2 m-2">{event}</span>
              ))}
            </div>

            <div className="col-lg-4 mt-5">
              <div className="p-3 bg-light rounded shadow">
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-event  me-3"></i>
                  <div style={{ fontSize: "0.9rem" }}>
                    <div>{eventData.eventTiming}</div>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt fs-5 me-3"></i>
                  <div style={{ fontSize: "0.9rem" }}>
                    <div>{eventData.eventAddress}</div>
                  </div>
                </div>

                <div className="d-flex align-items-start ">
                  <p className=" fw-semibold me-3 ms-2">$</p>
                  <div style={{ fontSize: "0.9rem" }}>
                    <div>{eventData.eventPrice}</div>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold my-4">
                Speakers: ({eventData.speakers.length})
              </h5>
              <div className="d-flex gap-3 flex-wrap">
                {eventData.speakers.map(({ name, role, imageUrl }) => (
                  <div
                    key={name}
                    className="bg-white rounded shadow-sm p-2 text-center"
                    style={{ width: "110px" }}
                  >
                    <img
                      src={imageUrl}
                      alt={name}
                      className="rounded-circle mb-2"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="fw-bold" style={{ fontSize: "0.9rem" }}>
                      {name}
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      {role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : loading ? (
        <p
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          Loading events...
        </p>
      ) : error ? (
        <p
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          Error loading events
        </p>
      ) : null}
      ;
    </div>
  );
};
