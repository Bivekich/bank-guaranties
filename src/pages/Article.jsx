import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem, urlFor } from "../sanityclient";
import "../style/article.css";

export const Article = () => {
  const { id } = useParams(); // Move this inside the component
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getItem(id);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return "";
  }

  console.log(article);

  return (
    <article>
      <div className="quest">
        <h3>{article.title1}</h3>
      </div>
      <div className="text-block">
        <div className="text">
          <img src={urlFor(article.image).url()} alt="Contract image" />
          <p>{article.pharagraph1}</p>
        </div>
      </div>

      <div className="maintext">
        <div className="txt">
          <h3>{article.title2}</h3>
          <p>{article.pharagraph2}</p>
        </div>
        <div className="txt">
          <h3>{article.title3}</h3>
          <p>{article.pharagraph3}</p>
        </div>
      </div>
      <hr />
    </article>
  );
};
