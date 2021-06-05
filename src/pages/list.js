import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// component
import { Carditem } from "../components/card.js";

// api
import axios from "../api/api.js";

// styles
import { Col, Row, Button } from "antd";

import detectEthereumProvider from "@metamask/detect-provider";

function List() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const [account, setaccount] = useState(
    "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91"
  );

  useEffect(() => {
    setpage(0);
    setdata([]);
    fetchList();
  }, [account]); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchList() {
    axios
      .get("/assets", {
        params: {
          format: "json",
          owner: account,
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

  async function connecteth() {
    const provider = await detectEthereumProvider();
    if (provider) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setaccount(account);
    } else {
      console.error("Please install MetaMask!");
    }
  }

  return (
    <div className="App">
      <Button
        type="primary"
        shape="round"
        size={"large"}
        onClick={() => {
          connecteth();
        }}
      >
        connect MetaMask
      </Button>

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
