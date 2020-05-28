import React from "react";
import { Button, Modal, Form, Input, Table, notification, Select } from "antd";
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
        title="Add Question"
        onOk={handleOk}
      >
        <Form>
          <Form.Item label="Quiz Name">
            <Input
              onChange={(e) => setQuiz(e.target.value)}
              placeholder="eg. this is that"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default function QuestionPage() {
  const [showAdd, setShowAdd] = React.useState(false);
  const [data, setData] = React.useState([
    {
      key: "1",
      question: "John Brown John Brown John Brown",
      answer1: "Ans 1",
      answer2: "Ans 2",
      answer3: "geography",
      answer4: "history",
      correctAns: 1,
    },
    {
      key: "2",
      question: "John Brown John Brown John Brown",
      answer1: "Ans 1",
      answer2: "Ans 2",
      answer3: "geography",
      answer4: "history",
      correctAns: 1,
    },
  ]);

  const [selectedQuiz, setSelectedQuiz] = React.useState(null);

  return (
    <div>
      <AddQuizModel
        set={setData}
        visible={showAdd}
        onCancel={() => setShowAdd(false)}
      />
      {/* <h1>This is question</h1> */}
      <Button
        onClick={() => setShowAdd(true)}
        icon={<PlusOutlined />}
        type="primary"
      >
        Add Question
      </Button>
      <br /> <br />
      <Select
        onChange={(val) => setSelectedQuiz(val)}
        style={{ width: 300 }}
        placeholder="Select Quiz"
      >
        <Select.Option value="Q1">Quiz 1</Select.Option>
        <Select.Option value="Q2">Quiz 2</Select.Option>
        <Select.Option value="Q3">Quiz 3</Select.Option>
      </Select>
      <br /> <br />
      {selectedQuiz && (
        <Table columns={columns("abc", "abc")} dataSource={data} rowKey="key" />
      )}
    </div>
  );
}

const columns = (onDelete, onEdit) => [
  {
    title: "Question",
    dataIndex: "question",
    key: "question",
  },
  {
    title: "Option 1",
    dataIndex: "answer1",
    key: "answer1",
  },
  {
    title: "Option 2",
    dataIndex: "answer2",
    key: "answer2",
  },
  {
    title: "Option 3",
    dataIndex: "answer3",
    key: "answer3",
  },
  {
    title: "Option 4",
    dataIndex: "answer4",
    key: "answer4",
  },
  {
    title: "Correct Ans",
    dataIndex: "correctAns",
    key: "correctAns",
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
          icon={<DeleteOutlined />}
        ></Button>
        <Button
          size="small"
          style={{ marginLeft: 7 }}
          shape="circle"
          type="primary"
          icon={<EditOutlined />}
        ></Button>
      </React.Fragment>
    ),
  },
];
