import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";

const CountriesTable = () => {
  console.log("changes in main")
  console.log("changes in demo");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  //   we store all the data in countries state variable then now, we not touch it, so we make new.....
  const [filteredCoutries, setFilterCountries] = useState([]);

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

  const getCoutries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");

      setCountries(response.data);

      setFilterCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoutries();
  }, []);

  //filter on change of search
  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search]);

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img src={row.flag} width={50} height={50} />,
    },
    {
      name: "Action",
      cell: (row) => (
        <button onClick={() => alert(row.alpha2Code)}>Edit</button>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        theme="solarized"
        columns={columns}
        data={filteredCoutries}
        pagination
        title="Country List"
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        // FILTER
        subHeader
        subHeaderComponent={
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="left"
        paginationRowsPerPageOptions={[10, 20, 50, 100]}
      />
    </div>
  );
};

export default CountriesTable;
