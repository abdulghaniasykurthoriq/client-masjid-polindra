import React, { useEffect } from "react";
import Carousel from "../components/moleculs/caraousel";
import Container from "../components/moleculs/container";
import Navside from "../components/moleculs/navside";
import LogoutBtn from "../assets/icon_logout.png";
import ImageMaulid from "../assets/imageMaulid.png";
import { FaFilter, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import limitString from "../helpers/limitString";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Materi(props) {
  console.log("props", props);
  const [data, setData] = useState([]);
  //const [dataPostingan, setDataPostingan] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/event`)
      .then((result) => {
        setData(result.data.data);
        console.log("result.data", result.data.data);
      })
      .catch();
  }, []);
  const goDetail = (id) => {
    // alert(`wowowo punya siapa ${id}`);
    history(`/materi/${id}`);
  };
  //console.log("data postingan", dataPostingan);

  return (
    <div className="flex justify-center">
      {/* <div
        style={{ backgroundColor: "#d2d6fb" }}
        className="h-screen w-screen absolute left-[-1400px]"
      ></div> */}
      <Container>
        <div className="flex">
          {/* <Navside /> */}
          <div className=" w-full">
            <div className="flex w-full justify-end">
              <div className="w-12 m-4 ">
                <img src={LogoutBtn} alt="logoutBtn" />
              </div>
            </div>
            <Carousel />
            <MenuMateri />
            <SearchSort />
            <div className="mx-8 flex flex-wrap  justify-start ">
              {data.map((event, i) => {
                return (
                  <div onClick={() => goDetail(event.id)}>
                    <CardMateri judul={event.nama} />
                  </div>
                );
              })}

              {/* <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri />
              <CardMateri /> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const MenuMateri = () => {
  return (
    <div className="flex border-b-4 mx-8">
      <div className="text-blue-600 border-b-2 border-blue-500 w-max mx-2 p-2">
        Semua Kajian
      </div>
      {/* <div className="w-max mx-2 p-2">Riwayat Kajian</div> */}
    </div>
  );
};

const SearchSort = () => {
  return (
    <div className="m-4 pl-6 flex">
      <div className="flex  w-full max-w-3xl">
        <input
          type="text"
          placeholder="Type here"
          className="bg-blue-50 input input-bordered input-info w-full max-w-3xl"
        />
        <div className="text-2xl h-12 w-12 bg-blue-100 flex items-center justify-center rounded-lg ml-2 text-gray-400">
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center pl-6">
        <p className="hidden 2xl:flex">Sort : </p>
        <div className="h-12 bg-blue-100 flex items-center px-4 rounded-xl ml-3">
          <p>Tanggal Terdekat</p>
        </div>
        <div className="text-2xl h-12 w-12 bg-blue-100 flex items-center justify-center rounded-lg ml-2 text-gray-400">
          <FaFilter />
        </div>
      </div>
    </div>
  );
};

const CardMateri = ({ judul }) => {
  return (
    <div className="bg-blue-100 p-4 m-2 w-max rounded-lg">
      <img className="w-20 h-20" src={ImageMaulid} alt="" />
      <div className="w-20">
        <p>{limitString(judul, 25)}</p>
      </div>
    </div>
  );
};

export default Materi;
