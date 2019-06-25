import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";

const ModalContent = ({ image, title, description }) => (
  <Modal
    trigger={
      <div className="card">
        <div className="image">
          <img alt={title} src={image} />
        </div>
      </div>
    }
  >
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content image scrolling>
      <Image size="massive" src={image} wrapped />
      <Modal.Description>
        <Header>About</Header>
        {description}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalContent;
