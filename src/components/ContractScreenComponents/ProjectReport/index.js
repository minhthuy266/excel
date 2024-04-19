import { Button, DatePicker, Form, Input, Popconfirm, Table } from "antd";
import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
      console.log("ooooo", values);
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const ProjectReport = ({ isEdit, setIsEdit, contract }) => {
  const [dataSource, setDataSource] = useState([
    {
      shipmentNo: "1",
      deliveryDate: "15-Feb-24",
      weight: "500,00",
      plannedRevenue: "200.588,24",
      paymentMilestone: "Advance Payment",
      paymentPercentage: "5%",
      paymentAmount: "10.000",
      paymentDuration: "30",
      paymentDate: "75.000",
      paymentMethod: "30",
      key: "0",
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const defaultColumns = [
    {
      title: "Shipment No",
      dataIndex: "shipment_no",
      editable: isEdit,
      fixed: "left",
    },
    {
      title: "Delivery Date",
      dataIndex: "delivery_date",
      render: (text, record) => {
        return (
          <div>
            <DatePicker onChange={onChange} value={moment(record.delivery_date)}  disabled={!isEdit}/>
          </div>
        );
      },
    },
    {
      title: "Weight",
      dataIndex: "weight",
      editable: isEdit,
    },
    {
      title: "Planned Revenue",
      dataIndex: "planned_revenue",
      editable: isEdit,
    },
    {
      title: "Payment Milestone",
      dataIndex: "payment_milestone",
      editable: isEdit,
    },
    {
      title: "Payment (%)",
      dataIndex: "payment_percent",
      editable: isEdit,
    },
    {
      title: "Payment Amount",
      dataIndex: "payment_amount",
      editable: isEdit,
    },

    {
      title: "Payment Duration",
      dataIndex: "payment_duration",
      editable: isEdit,
    },

    {
      title: "Payment Date",
      dataIndex: "payment_date",
      render: (text, record) => {
        return (
          <div>
            <DatePicker onChange={onChange} value={moment(record.payment_date)} disabled={!isEdit}/>
          </div>
        );
      },
      editable: isEdit,
    },
    {
      title: "Payment Method",
      dataIndex: "payment_method",
      editable: isEdit,
    },
    {
      title: "",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
      fixed: "right",
    },
  ];
  const handleAdd = () => {
    const newData = {
      shipmentNo: count,
      deliveryDate: "",
      weight: "",
      plannedRevenue: "",
      paymentMilestone: "",
      paymentPercentage: "",
      paymentAmount: "",
      paymentDuration: "",
      paymentDate: "",
      paymentMethod: "",
      key: count,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  console.log("dataSource", contract);

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={contract?.contract}
        columns={columns}
        scroll={{
          x: 1800,
        }}
      />
    </div>
  );
};

export default ProjectReport;
