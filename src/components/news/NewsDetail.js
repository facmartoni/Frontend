import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { newStartDetailLoading } from "../../actions/news";
import trashcan from "../../assets/trash-can.svg";

export default function NewsDetail() {
  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
<<<<<<< HEAD
    dispatch( newStartDetailLoading(_id) )
  }, [dispatch, _id])
  
  const {newSelected}  = useSelector((state) => state.news);
  const {loading} = newSelected;
=======
    dispatch(newStartDetailLoading(_id));
  }, [dispatch, _id]);

  const { newSelected } = useSelector((state) => state.news);
  const { loading } = newSelected;
>>>>>>> 5a9057a3ebc3cb0d0e6f97f7148cb4988061c45b
  const { isAdmin } = useSelector((state) => state.auth);
  const { imageUrl, title, subTitle, category, articleUrl } = newSelected;

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className="news">
      <Link to="/" title="Regresar a las noticias" className="">
        Back to News
      </Link>
      <div className="news__detail">
        <div className="news__detail--image">
          <img
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="news__detail--image"
          />
        </div>
        <div className="news__detail--body">
          <div className="news__detail--title">
            <h2>{title}</h2>
            {isAdmin && (
              <button
                className="deleteNews--button focus-style--button"
                type="button"
                title="Eliminar noticia">
                <img
                  loading="lazy"
                  src={trashcan}
                  alt="Eliminar noticia"
                  className="deleteNews--icon"
                />
              </button>
            )}
          </div>
          <div className="news__detail--text">
            <p className="news__detail--category">{category}</p>
            <p>{subTitle}</p>
          </div>
          <a
            href={articleUrl}
            title="Read complete"
            rel="noreferrer"
            className="news__detail--button">
            <button>Read Complete</button>
          </a>
        </div>
      </div>
    </div>
  );
}
