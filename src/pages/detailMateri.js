import React, { useEffect } from "react";
import Container from "../components/moleculs/container";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
          <div className="w-full">
            <h1>Detail Materi</h1>
            <h1>Gambar Materi : {imageMateri}</h1>
            <h1>Nama Materi : {namaMateri}</h1>
            <h1>Kategori Materi : {kategory}</h1>
          </div>
          <div>
            {dataPdf.map((item, i) => {
              return (
                <div className="bg-red-200 my-2" key={i}>
                  <a
                    href={`http://localhost:8000/api/download-pdf/${item.file_materi}`}
                    download
                  >
                    <p>{item.name}</p>
                    <p>{item.file_materi}</p>
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
