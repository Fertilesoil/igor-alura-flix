import { createContext, useEffect, useState } from "react";

export const ContextVideo = createContext()

const ContextVideoProvider = ({ children }) => {
  const [video, setVideo] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function separarCategorias() {
    if (video) {
      return [
        { nome: "Frontend", videos: video.filter(video => video.categoria === "frontend") },
        { nome: "Backend", videos: video.filter(video => video.categoria === "backend") },
        { nome: "Mobile", videos: video.filter(video => video.categoria === "mobile") },
      ]
    }
    return []
  }

  const toggleModal = () => {
    setOpenModal(openModal => !openModal)
  }
  useEffect(() => {
    const api = async () => {
      const repostaApi = await fetch('https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix')
      const videos = await repostaApi.json()
      setVideo(videos)
    }
    api()
    setCategorias(separarCategorias())
  }, [video])

  return (
    <ContextVideo.Provider value={{ video, setVideo, openModal, toggleModal, categorias }}>
      {children}
    </ContextVideo.Provider>
  )
}
export default ContextVideoProvider