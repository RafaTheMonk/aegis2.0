import styles from "./SearchVideoList.module.css"
import VideoList from "../../components/VideoList"
import { useState } from "react";

function filterVideos(videos, searchText) {
  return videos.filter((video) => video.category.toLowerCase().includes(searchText) || video.title.toLowerCase().includes(searchText))
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("iniciante");
  const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
      <VideoList 
        videos={foundVideos} 
        emptyHeading={`Sem vídeos sobre "${searchText}"`} 
      />
    </section>
  );
}

export default SearchVideoList;
