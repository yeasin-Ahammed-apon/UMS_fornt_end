import React from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Tabel = ({ tabelData, column }) => {
  let coloumnData = [];
  column.forEach((datas) => {
    if (!datas.hasOwnProperty("type")) {
      coloumnData.push({
        name: <h1>{datas.name}</h1>,
        selector: datas.selector,
        sortable: datas.sortable,
      });
    }
    if (datas.hasOwnProperty("type") && datas.type === "action") {
      coloumnData.push({
        name: <h1>{datas.name}</h1>,
        cell: (row) => {
          return (
            <div className="text-center">
              {datas.button.map((data) => {
                return (
                  <Link
                    to={`${data.url}/${row[data.parameter]}`}
                    className={`btn btn-${data.color} ms-1`}
                  >
                    {data.lable}
                  </Link>
                );
              })}
            </div>
          );
        },
      });
    }
  });
  return (
    <div>
      <DataTable
        title={<h1 className="p-1 rounded-1">Teacher table</h1>}
        columns={coloumnData}
        data={tabelData}
        fixedHeaderScrollHeight="250px"
        pagination
        selectableRows
        highlightOnHover
        actions={<Button className="me-1 btn btn-success">Export</Button>}
      />
    </div>
  );
};

export default Tabel;
