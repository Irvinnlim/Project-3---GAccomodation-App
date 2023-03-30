import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import BookingDates from "../BookingDates";
import PlaceGallery from "../PlaceGallery";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  const handleDelete = (id) => {
    axios
      .delete(`/bookings/${id}`)
      .then(() => {
        setRedirect("/account/bookings/");
      })
      .catch((err) => {
        throw err;
      });
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information:</h2>
          <BookingDates booking={booking} />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
      <br></br>
      {id && (
        <button
          className="bg-cyan-400 p-2 w-full text-white rounded-2xl"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      )}
    </div>
  );
}