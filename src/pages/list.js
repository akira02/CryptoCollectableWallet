import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// component
import { Carditem } from "../componments/card.js";

// api
import axios from "../api/api.js";

// styles
import { Col, Row } from "antd";

function List() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(0);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setpage(0);
    setdata([]);
    fetchList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchList() {
    axios
      .get("/assets", {
        params: {
          format: "json",
          owner: "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91",
          offset: page * 20,
          limit: 20,
        },
      })
      .then((res) => {
        if (!!res.data.assets.length) {
          setdata((oldArray) => oldArray.concat(res.data.assets));
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchList}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>到底囉！</b>
          </p>
        }
      >
        <Row>
          {data.map((item) => {
            return (
              <Col
                md={12}
                key={`${item.asset_contract.address}/${item.token_id}`}
              >
                <Link
                  to={`/detail/${item.asset_contract.address}/${item.token_id}`}
                >
                  <Carditem name={item.name} image={item.image_preview_url} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>
    </div>
  );
}

export default List;
