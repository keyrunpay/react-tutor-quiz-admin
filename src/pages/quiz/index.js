import React from "react";
import { Button, Modal, Form, Input, Table, notification } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

function AddQuizModel(props) {
  const [quiz, setQuiz] = React.useState("");
  const handleOk = () => {
    // props.set()
    props.set((prevData) => {
      const newData = {
        key: prevData.length + 1,
        name: "John Brown",
        title: quiz,
        category: "history, geography",
      };
      return [...prevData, newData];
    });
    props.onCancel();
    notification.success({
      message: "Quiz added",
      placement: "bottomLeft",
      description: quiz,
    });
  };

  return (
    <div>
      <Modal
        visible={props.visible}
        onCancel={props.onCancel}
        title="Add Quiz"
        onOk={handleOk}
      >
        <Form>
          <Form.Item
            label="Quiz Name"
            style={{ width: "100%", display: "block" }}
          >
            <Input
              onChange={(e) => setQuiz(e.target.value)}
              placeholder="eg. this is that"
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%", display: "block" }}
            label="Category"
          >
            <Input
              onChange={(e) => setQuiz(e.target.value)}
              placeholder="eg. historical,literature"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default function QuizPage() {
  const [showAdd, setShowAdd] = React.useState(false);
  const [data, setData] = React.useState([
    {
      key: "1",
      name: "John Brown",
      title: "Quiz 1",
      category: "history, geography",
    },
    {
      key: "2",
      name: "John Brown",
      title: "Quiz 1",
      category: "history, geography",
    },
    {
      key: "3",
      name: "John Brown",
      title: "Quiz 1",
      category: "history, geography",
    },
    {
      key: "4",
      name: "John Brown",
      title: "Quiz 1",
      category: "history, geography",
    },
    {
      key: "5",
      name: "John Brown",
      title: "Quiz 1",
      category: "history, geography",
    },
  ]);

  return (
    <div>
      <AddQuizModel
        set={setData}
        visible={showAdd}
        onCancel={() => setShowAdd(false)}
      />
      <Button
        onClick={() => setShowAdd(true)}
        icon={<PlusOutlined />}
        type="primary"
      >
        Add Quiz
      </Button>
      <br />
      <br />
      <Table columns={columns("abc")} dataSource={data} rowKey="key" />
    </div>
  );
}

const columns = (onDelete) => [
  {
    title: "Quiz Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "User",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Action",
    dataIndex: "key",
    key: "key",
    render: () => (
      <React.Fragment>
        <Button
          shape="circle"
          type="primary"
          size="small"
          icon={<DeleteOutlined />}
        ></Button>
      </React.Fragment>
    ),
  },
];
