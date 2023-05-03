"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const transaction = [
  {
    id: "INV1",
    teleId: "neilSmith",
    product: "3 Months Plan",
    date: new Date().toDateString(),
    price: 420,
    status: "Success",
  },
];
export default function TransactionTable() {
  function priceBodyTemplate(rowData) {
    return <p>{`Rp ${rowData.price}K`}</p>;
  }

  return (
    <div>
      <DataTable
        value={transaction}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="id"
          header="Invoice#"
          style={{ width: "10%" }}
          filter
        ></Column>
        <Column
          filter
          field="teleId"
          header="Telegram Id"
          style={{ width: "25%" }}
        ></Column>
        <Column
          filter
          field="product"
          header="Product"
          style={{ width: "25%" }}
        ></Column>
        <Column
          filter
          field="date"
          header="Date"
          style={{ width: "25%" }}
        ></Column>
        <Column
          body={priceBodyTemplate}
          field="price"
          header="Price"
          style={{ width: "25%" }}
        ></Column>
        <Column
          filter
          field="status"
          header="Status"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
