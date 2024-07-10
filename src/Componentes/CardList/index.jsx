import { VideoContexto } from "../../Context/useContext";
import Card from "../CriarCard";
import Tag from "../Tag";
import { Secao, Videos, Wrapper } from "./CardList";

const CardList = () => {
  const { video, categorias } = VideoContexto()

  if (!video || video.length === 0)
    return <p>Nenhum vídeo encontrado.</p>;

  return (
    <Wrapper>
      {categorias?.map((secao) => (
        <Secao key={secao.nome}>
          <Tag secao={secao.nome}>
            {secao.nome}
          </Tag>
          <Videos>
            {secao.videos?.map((video, index) => {
              return <Card key={index} img={video.imagem} video={video.video} titulo={video.categoria} id={video.id} />
            })}
          </Videos>
        </Secao>
      ))}
    </Wrapper>
  );
}

export default CardList;

