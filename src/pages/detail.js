import { useEffect, useCallback, useState } from "react";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button, Skeleton } from "antd";

// api
import axios from "../api/api.js";

import { PageHeader } from "antd";

const Detail = () => {
  const location = useLocation();
  const history = useHistory();
  const [data, setdata] = useState([]);

  function handleClick() {
    history.goBack();
  }

  const fetchDetail = useCallback(() => {
    axios
      .get(
        `/asset/${location.pathname.split("/")[2]}/${
          location.pathname.split("/")[3]
        }`
      )
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return (
    <div className="datail">
      <PageHeader
        className="site-page-header"
        onBack={() => handleClick()}
        title={data.name}
      />
      {!data.name ? (
        <Skeleton />
      ) : (
        <>
          <img className="detail_img" src={data.image_url} alt={data.name} />
          <div className="detail_content">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <Button
              type="primary"
              shape="round"
              size={"large"}
              onClick={() => {
                handleClick();
              }}
            >
              Permalink
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
