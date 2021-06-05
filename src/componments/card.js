import { Card } from "antd";

const { Meta } = Card;

export const Carditem = ({ name = "unkonw", image = "" }) => {
  return (
    <Card
      hoverable
      style={{ margin: 10, maxWidth: "40vw" }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} />
    </Card>
  );
};
