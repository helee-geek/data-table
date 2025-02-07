import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const PaginationDemo = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(new Date("2009-01-31"));
  const [endDate, setEndDate] = useState(new Date("2025-01-31"));
  const [filteredData, setFilteredData] = useState([]);
  console("1st");
  createTheme(
    "solarized",
    {
      text: {
        primary: "#ffffff",
        secondary: "#8651d6",
      },
      background: {
        default: "rgb(22 22 22 / 20%)",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "rgba(225,225,225,0.08)",
      },
    },
    "dark"
  );
  console("2nd");

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://production.agere.games/api/players/admin-deposit-txns-list?token=65781a9fb1046e08d0c8061ca4a20b09&casino=b3f3d83439c320c5de2668f2bc059fe7&remoteId=https://www.bettingion.com/_1687267646868&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&page=${currentPage}&limit=${rowsPerPage}&status=&username=&authKey=989e4c733d1b4093fa7af6b940e62b8b8940fe9c`
      );
      setData(response.data.data);
      setRows(response.data.count);
      setFilteredData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(); 
  }, [currentPage, rowsPerPage, startDate, endDate]); 

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage); 
  };

  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setStartDate(startDate);
    setEndDate(endDate);

    const filtered = data.filter((item) => {
      const itemDate = new Date(item);   //.createdAt
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
    },
    {
      name: "User Name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
    },
    {
      name: "Account Type",
      selector: (row) => row.accountType,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },
    {
      name: "Action",
      cell: (row) => (
        <button onClick={() => alert(row.withdrawCoin)}>Edit</button>
      ),
    },
  ];

  return (
    <div>
      <DateRangePicker ranges={[selectionRange]} onChange={handleDateChange} />

      <DataTable
        theme="solarized"
        columns={columns}
        data={filteredData}
        title="Game List"
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        pagination
        paginationServer
        paginationPerPage={rowsPerPage}
        paginationTotalRows={rows}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
        progressPending={loading}
      />
    </div>
  );
};

export default PaginationDemo;