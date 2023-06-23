import React from "react";
import Container from "../components/moleculs/container";
import Mosque from "../assets/mosque.png";
import eMasjid from "../assets/e-masjid.png";
import CardMosque from "../components/moleculs/cardMosque";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  let history = useNavigate();
  const handleAuth = (e) => {
    e.preventDefault();
    history("/");
    darsih;
  };
  return (
    <div className="flex justify-center">
      <Container>
        <div className="flex">
          {/* Banner */}
          <div className=" h-screen w-full">
            <div className="flex justify-center pt-8">
              <img className="w-64 lg:w-80" src={eMasjid} alt="e-masjid" />
            </div>
            <div className="flex justify-center pt-8 text-xl lg:text-4xl ">
              <p className="text-center">
                Welcome to Masjid Baitul <br /> Muttaqin !
              </p>
            </div>
            <div className="flex justify-center pt-8">
              <p className="text-center lg:text-2xl">
                Please fill in the attendance data below
              </p>
            </div>
            <div className="flex justify-center pt-8">
              <form
                onSubmit={handleAuth}
                className="w-full flex flex-col items-center"
              >
                <input
                  type="text"
                  placeholder="nama . . ."
                  className="input input-bordered w-full max-w-xs m-2"
                />
                <input
                  type="text"
                  placeholder="jurusan . . ."
                  className="input input-bordered w-full max-w-xs m-2"
                />
                <input
                  type="text"
                  placeholder="no handphone . . ."
                  className="input input-bordered w-full max-w-xs m-2"
                />

                <button
                  style={{ backgroundColor: "#d2d6fb" }}
                  className="btn btn-info my-4 px-12"
                >
                  Masuk
                </button>
                <p>atau masuk sebagai Anonymous?</p>
                <button className="btn btn-outline btn-info my-4 px-12">
                  Anonymous
                </button>
              </form>
            </div>
          </div>

          {/* Form user */}
          <div
            style={{ backgroundColor: "#d2d6fb" }}
            className=" min-h-screen w-full hidden lg:flex  flex-col items-center justify-center"
          >
            <img src={Mosque} alt="masjid" className="w-sm" />
            <CardMosque />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginAdmin;
