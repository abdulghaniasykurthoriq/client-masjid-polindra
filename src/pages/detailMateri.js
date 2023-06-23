import React, { useEffect } from "react";
import Container from "../components/moleculs/container";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardMosque from "../assets/mosque.png";

function DetailMateri() {
  const [dataPdf, setDataPdf] = useState([]);
  const [namaMateri, setNamaMateri] = useState("");
  const [kategory, setKategory] = useState("");
  const [imageMateri, setImageMateri] = useState("");

  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/event/${id}`);
      const { data } = response.data;
      setNamaMateri(data.nama);
      setKategory(data.kategori);
      setImageMateri(data.image);
      setDataPdf(data.materi);
      console.log("dataPdf", data.materi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  console.log("dataPdf 22", dataPdf);
  return (
    <div className="flex justify-center">
      <Container>
        <div className="flex flex-col">
          <div className="m-4">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure className="w-24 h-24">
                <img src={CardMosque} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{namaMateri}</h2>
                <p>{kategory}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Watch</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* <h1>Detail Materi</h1>
            <h1>Gambar Materi : {imageMateri}</h1> */}
            {/* <h1>Nama Materi : {namaMateri}</h1>
            <h1>Kategori Materi : {kategory}</h1> */}
          </div>
          <div>
            {dataPdf.map((item, i) => {
              return (
                <div className="my-2 mx-8" key={i}>
                  <a
                    href={`http://localhost:8000/api/download-pdf/${item.file_materi}`}
                    download
                  >
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">
                            Download Pdf
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <p>{item.name}</p>
                    <p>{item.file_materi}</p> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailMateri;
