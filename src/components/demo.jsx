// import React, { useEffect, useState } from "react";
// import DataTable, { createTheme } from "react-data-table-component";
// import axios from "axios";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const PaginationDemo = () => {
//   const [data, setData] = useState([]);
//   const [rows, setRows] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [startDate, setStartDate] = useState(new Date("2009-01-31"));
//   const [endDate, setEndDate] = useState(new Date("2025-01-31"));
//   const [filteredData, setFilteredData] = useState([]);

//   createTheme(
//     "solarized",
//     {
//       text: {
//         primary: "#ffffff",
//         secondary: "#8651d6",
//       },
//       background: {
//         default: "rgb(22 22 22 / 20%)",
//       },
//       context: {
//         background: "#cb4b16",
//         text: "#FFFFFF",
//       },
//       divider: {
//         default: "rgba(225,225,225,0.08)",
//       },
//     },
//     "dark"
//   );

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://production.agere.games/api/players/admin-deposit-txns-list?token=65781a9fb1046e08d0c8061ca4a20b09&casino=b3f3d83439c320c5de2668f2bc059fe7&remoteId=https://www.bettingion.com/_1687267646868&startDate=${startDate.toISOString().split("T")[0]}&endDate=${endDate.toISOString().split("T")[0]}&page=${currentPage}&limit=${rowsPerPage}&status=&username=&authKey=989e4c733d1b4093fa7af6b940e62b8b8940fe9c`
//       );
//       setData(response.data.data);
//       setRows(response.data.count);
//       setFilteredData(response.data.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [currentPage, rowsPerPage, startDate, endDate]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage);
//   };

//   const handleDateChange = (ranges) => {
//     const { startDate, endDate } = ranges.selection;
//     setStartDate(startDate);
//     setEndDate(endDate);

//     const filtered = data.filter((item) => {
//       const itemDate = new Date(item.createdAt);
//       return itemDate >= startDate && itemDate <= endDate;
//     });

//     setFilteredData(filtered);
//   };

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   const columns = [
//     {
//       name: "User ID",
//       selector: (row) => row.userId,
//     },
//     {
//       name: "User Name",
//       selector: (row) => row.username,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row) => row.status,
//     },
//     {
//       name: "Email ID",
//       selector: (row) => row.email,
//     },
//     {
//       name: "Account Type",
//       selector: (row) => row.accountType,
//     },
//     {
//       name: "Created At",
//       selector: (row) => row.createdAt,
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <button onClick={() => alert(row.withdrawCoin)}>Edit</button>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <DateRangePicker ranges={[selectionRange]} onChange={handleDateChange} />
      
//       <DataTable
//         theme="solarized"
//         columns={columns}
//         data={filteredData}
//         title="Game List"
//         fixedHeader
//         fixedHeaderScrollHeight="450px"
//         selectableRows
//         selectableRowsHighlight
//         highlightOnHover
//         pagination
//         paginationServer
//         paginationPerPage={rowsPerPage}
//         paginationTotalRows={rows}
//         onChangePage={handlePageChange}
//         onChangeRowsPerPage={handleRowsPerPageChange}
//         progressPending={loading}
//       />
//     </div>
//   );
// };

// export default PaginationDemo;

// import React, { useEffect, useState } from "react";
// import DataTable, { createTheme } from "react-data-table-component";
// import axios from "axios";
// import Select from "react-select";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const PaginationDemo = () => {
//   const [data, setData] = useState([]);
//   const [rows, setRows] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [startDate, setStartDate] = useState(new Date("2009-01-31"));
//   const [endDate, setEndDate] = useState(new Date("2025-01-31"));
//   const [filterData, setFilterData] = useState([]);

//   createTheme(
//     "solarized",
//     {
//       text: {
//         primary: "#ffffff",
//         secondary: "#8651d6",
//       },
//       background: {
//         default: "rgb(22 22 22 / 20%)",
//       },
//       context: {
//         background: "#cb4b16",
//         text: "#FFFFFF",
//       },
//       divider: {
//         default: "rgba(225,225,225,0.08)",
//       },
//     },
//     "dark"
//   );

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const formattedStartDate = startDate.toISOString().split("T")[0];
//       const formattedEndDate = endDate.toISOString().split("T")[0];
//       const response = await axios.get(
//         `https://production.agere.games/api/players/admin-deposit-txns-list?token=65781a9fb1046e08d0c8061ca4a20b09&casino=b3f3d83439c320c5de2668f2bc059fe7&remoteId=https://www.bettingion.com/_1687267646868&startDate=${formattedStartDate}&endDate=${formattedEndDate}&page=${currentPage}&limit=${rowsPerPage}&status=&username=&authKey=989e4c733d1b4093fa7af6b940e62b8b8940fe9c`
//       );
//       setData(response.data.data);
//       setRows(response.data.count);
//       setFilterData(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [currentPage, rowsPerPage, startDate, endDate]);

//   const handlePageChange = (page) => setCurrentPage(page);

//   const handleRowsPerPageChange = (newRowsPerPage) => setRowsPerPage(newRowsPerPage);

//   const handleDateChange = (ranges) => {
//     if (!ranges.selection) return;
//     setStartDate(ranges.selection.startDate);
//     setEndDate(ranges.selection.endDate);
//   };

//   const columns = [
//     { name: "User ID", selector: (row) => row.userId },
//     { name: "User Name", selector: (row) => row.username, sortable: true },
//     { name: "Status", selector: (row) => row.status },
//     { name: "Email ID", selector: (row) => row.email },
//     { name: "Account Type", selector: (row) => row.accountType },
//     { name: "Created At", selector: (row) => row.createdAt },
//     { name: "Action", cell: (row) => <button onClick={() => alert(row.withdrawCoin)}>Edit</button> },
//   ];

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   return (
//     <div>
//       <DateRangePicker ranges={[selectionRange]} onChange={handleDateChange} />
//       <DataTable
//         theme="solarized"
//         columns={columns}
//         data={filterData}
//         title="Game List"
//         fixedHeader
//         fixedHeaderScrollHeight="450px"
//         selectableRows
//         selectableRowsHighlight
//         highlightOnHover
//         pagination
//         paginationServer
//         paginationPerPage={rowsPerPage}
//         paginationTotalRows={rows}
//         onChangePage={handlePageChange}
//         onChangeRowsPerPage={handleRowsPerPageChange}
//         progressPending={loading}
//       />
//     </div>
//   );
// };

// export default PaginationDemo;

// import React, { useEffect, useState } from "react";
// import DataTable, { createTheme } from "react-data-table-component";
// import axios from "axios";
// import Select from "react-select";
// import { Daterangepicker } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

// const PaginationDemo = () => {
//   const [data, setData] = useState([]);
//   const [rows, setRows] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const [startDate, setStartDate] = useState("2009-01-31");
//   const [endDate, setEndDate] = useState("2025-01-31");
//   const [filterData, setFilterData] = useState([]);

//   const dates = [
//     { value: "2009-01-31", label: "2009-01-31" },
//     { value: "2010-01-31", label: "2010-01-31" },
//     { value: "2011-01-31", label: "2011-01-31" },
//     { value: "2012-01-31", label: "2012-01-31" },
//     { value: "2013-01-31", label: "2013-01-31" },
//     { value: "2014-01-31", label: "2014-01-31" },
//     { value: "2015-01-31", label: "2015-01-31" },
//     { value: "2016-01-31", label: "2016-01-31" },
//     { value: "2017-01-31", label: "2017-01-31" },
//     { value: "2018-01-31", label: "2018-01-31" },
//     { value: "2019-01-31", label: "2019-01-31" },
//     { value: "2020-01-31", label: "2020-01-31" },
//     { value: "2021-01-31", label: "2021-01-31" },
//     { value: "2022-01-31", label: "2022-01-31" },
//     { value: "2023-01-31", label: "2023-01-31" },
//     { value: "2024-01-31", label: "2024-01-31" },
//     { value: "2025-01-31", label: "2025-01-31" },
//   ];

//   createTheme(
//     "solarized",
//     {
//       text: {
//         primary: "#ffffff",
//         secondary: "#8651d6",
//       },
//       background: {
//         default: "rgb(22 22 22 / 20%)",
//       },
//       context: {
//         background: "#cb4b16",
//         text: "#FFFFFF",
//       },
//       divider: {
//         default: "rgba(225,225,225,0.08)",
//       },
//     },
//     "dark"
//   );

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://production.agere.games/api/players/admin-deposit-txns-list?token=65781a9fb1046e08d0c8061ca4a20b09&casino=b3f3d83439c320c5de2668f2bc059fe7&remoteId=https://www.bettingion.com/_1687267646868&startDate=${startDate}&endDate=${endDate}&page=${currentPage}&limit=${rowsPerPage}&status=&username=&authKey=989e4c733d1b4093fa7af6b940e62b8b8940fe9c`
//       );
//       setData(response.data.data);
//       setRows(response.data.count);
//       setFilterData(response.data.count);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [currentPage, rowsPerPage, startDate, endDate]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page); // Update current page
//     console.log("page", page);
//   };

//   const handleRowsPerPageChange = (newRowsPerPage) => {
//     setRowsPerPage(newRowsPerPage); // Update rows per page
//   };

//   const columns = [
//     {
//       name: "User ID",
//       selector: (row) => row.userId,
//     },
//     {
//       name: "User Name",
//       selector: (row) => row.username,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row) => row.status,
//     },
//     {
//       name: "Email ID",
//       selector: (row) => row.email,
//     },
//     {
//       name: "Account Type",
//       selector: (row) => row.accountType,
//     },
//     {
//       name: "Created At",
//       selector: (row) => row.createdAt,
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <button onClick={() => alert(row.withdrawCoin)}>Edit</button>
//       ),
//     },
//   ];

//   // const handleChange = (date) => {
//   //   const filter = filterData.filter(() => {
//   //     const newDate = new Date(product["createdAt"]);
//   //     return (
//   //       newDate <= startDate.selection.startDate &&
//   //       newDate >= endDate.selection.endDate
//   //     );
//   //   });

//   //   setStartDate(date.selection.startDate);
//   //   setEndDate(date.selection.endDate);

//   //   setFilterData(filter);
//   // };

//   const handleChange = (ranges) => {
//     if (!ranges.selection) return;
//     const { startDate, endDate } = ranges.selection;
//     setStartDate(startDate);
//     setEndDate(endDate);

//     if (data.length > 0) {
//       const filtered = data.filter((item) => {
//         const itemDate = new Date(item.createdAt);
//         return itemDate >= startDate && itemDate <= endDate;
//       });
    
//       setFilterData(filtered);
//     }
    
//   };

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     Key: "selection",
//   };

//   return (
//     <div>
//       {/* <Select
//         options={dates}
//         value={dates.find((option) => option.value === startDate)}
//         onChange={(date) => setStartDate(date.value)}
//       />
//       <Select
//         options={dates}
//         value={dates.find((option) => option.value === endDate)}
//         onChange={(date) => setEndDate(date.value)}
//       /> */}

//       {/* <Daterangepicker ranges={[selectionRange]} onChange={handleChange} /> */}

//       <Daterangepicker ranges={[selectionRange]} onChange={handleChange} />
//       {/* 
//       <Daterangepicker
//         ranges={ranges}
//         value={dates.find((option) => option.value === endDate)}
//         onChange={(date) => setEndDate(date.value)}
//       />
//   */}
//       <DataTable
//         theme="solarized"
//         columns={columns}
//         data={data}
//         title="Game List"
//         fixedHeader
//         fixedHeaderScrollHeight="450px"
//         selectableRows
//         selectableRowsHighlight
//         highlightOnHover
//         pagination
//         paginationServer
//         // paginationComponent={CustomMaterialPagination}
//         paginationPerPage={rowsPerPage}
//         paginationTotalRows={rows}
//         onChangePage={handlePageChange}
//         onChangeRowsPerPage={handleRowsPerPageChange}
//         progressPending={loading}
//         // progressPending={data.length === 0}
//       />
//     </div>
//   );
// };
// export default PaginationDemo;

{
    /* <Daterangepicker
    ranges={[selectionRange]}
    onChange={handleChange}
  />
  
  const handleChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setStartDate(startDate);
    setEndDate(endDate);
  
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= startDate && itemDate <= endDate;
    });
  
    setFilterData(filtered);
  };
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }; */
  }
  
  
  // paginatoion/////////////////////
  
  // import React, { useEffect, useState } from "react";
  // import DataTable, { createTheme } from "react-data-table-component";
  // import axios from "axios";
  // import { DateRangePicker } from "react-date-range";
  // import "react-date-range/dist/styles.css";
  // import "react-date-range/dist/theme/default.css";
  
  // const PaginationDemo = () => {
  //   const [data, setData] = useState([]);
  //   const [rows, setRows] = useState(0);
  //   const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [rowsPerPage, setRowsPerPage] = useState(10);
  //   const [startDate, setStartDate] = useState(new Date("2009-01-31"));
  //   const [endDate, setEndDate] = useState(new Date("2025-01-31"));
  //   const [filteredData, setFilteredData] = useState([]);
  
  //   createTheme(
  //     "solarized",
  //     {
  //       text: {
  //         primary: "#ffffff",
  //         secondary: "#8651d6",
  //       },
  //       background: {
  //         default: "rgb(22 22 22 / 20%)",
  //       },
  //       context: {
  //         background: "#cb4b16",
  //         text: "#FFFFFF",
  //       },
  //       divider: {
  //         default: "rgba(225,225,225,0.08)",
  //       },
  //     },
  //     "dark"
  //   );
  
  //   const getData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `https://production.agere.games/api/players/admin-deposit-txns-list?token=65781a9fb1046e08d0c8061ca4a20b09&casino=b3f3d83439c320c5de2668f2bc059fe7&remoteId=https://www.bettingion.com/_1687267646868&startDate=${startDate.toISOString().split("T")[0]}&endDate=${endDate.toISOString().split("T")[0]}&page=${currentPage}&limit=${rowsPerPage}&status=&username=&authKey=989e4c733d1b4093fa7af6b940e62b8b8940fe9c`
  //       );
  //       setData(response.data.data);
  //       setRows(response.data.count);
  //       setFilteredData(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   useEffect(() => {
  //     getData();
  //   }, [currentPage, rowsPerPage, startDate, endDate]);
  
  //   const handlePageChange = (page) => {
  //     setCurrentPage(page);
  //   };
  
  //   const handleRowsPerPageChange = (newRowsPerPage) => {
  //     setRowsPerPage(newRowsPerPage);
  //   };
  
  //   const handleDateChange = (ranges) => {
  //     const { startDate, endDate } = ranges.selection;
  //     setStartDate(startDate);
  //     setEndDate(endDate);
  
  //     const filtered = data.filter((item) => {
  //       const itemDate = new Date(item.createdAt);
  //       return itemDate >= startDate && itemDate <= endDate;
  //     });
  
  //     setFilteredData(filtered);
  //   };
  
  //   const selectionRange = {
  //     startDate: startDate,
  //     endDate: endDate,
  //     key: "selection",
  //   };
  
  //   const columns = [
  //     {
  //       name: "User ID",
  //       selector: (row) => row.userId,
  //     },
  //     {
  //       name: "User Name",
  //       selector: (row) => row.username,
  //       sortable: true,
  //     },
  //     {
  //       name: "Status",
  //       selector: (row) => row.status,
  //     },
  //     {
  //       name: "Email ID",
  //       selector: (row) => row.email,
  //     },
  //     {
  //       name: "Account Type",
  //       selector: (row) => row.accountType,
  //     },
  //     {
  //       name: "Created At",
  //       selector: (row) => row.createdAt,
  //     },
  //     {
  //       name: "Action",
  //       cell: (row) => (
  //         <button onClick={() => alert(row.withdrawCoin)}>Edit</button>
  //       ),
  //     },
  //   ];
  
  //   return (
  //     <div>
  //       <DateRangePicker ranges={[selectionRange]} onChange={handleDateChange} />
  
  //       <DataTable
  //         theme="solarized"
  //         columns={columns}
  //         data={filteredData}
  //         title="Game List"
  //         fixedHeader
  //         fixedHeaderScrollHeight="450px"
  //         selectableRows
  //         selectableRowsHighlight
  //         highlightOnHover
  //         pagination
  //         paginationServer
  //         paginationPerPage={rowsPerPage}
  //         paginationTotalRows={rows}
  //         onChangePage={handlePageChange}
  //         onChangeRowsPerPage={handleRowsPerPageChange}
  //         progressPending={loading}
  //       />
  //     </div>
  //   );
  // };
  
  // export default PaginationDemo;
  

  export default function HeroHeaderV1({ data, globalSettings }) {
    const {
      section_design_options: {
        section_variant: { mode } = {},
        section_opacity,
        section_title_color,
        section_custom_title_color,
        section_custom_background_color,
        section_background_color,
      },
      section_banner_type_advanced_details: {
        section_banner_type_advanced_details_pattern_color,
        section_banner_type_advanced_details_pattern_image: {
          url: patternSrc,
        } = {},
        section_banner_type_advanced_details_background_image,
        section_banner_type_advanced_details_logos_class,
        section_banner_type_advanced_details_sub_title,
        section_banner_type_advanced_details_title,
        section_banner_type_advanced_details_content,
        section_banner_type_advanced_details_call_button_title,
        section_banner_type_advanced_details_contact_button_title,
        section_banner_type_advanced_details_image: {
          url: sectionImage,
          alt,
        } = {},
        section_banner_type_advanced_details_banner_logo: {
          url: bannerLogoUrl, // Extract the banner logo URL
        } = {},




        banner_logo: {
            url : logoUrl
        },




        section_banner_video_link: bannerVideoLink,
        section_call_button_variant: callButtonVariant,
        section_button_variant: buttonVariant,
        menu_scrolling_id: menuScrollId,
      } = {},
    } = data || {};
  
    // Now you can use bannerLogoUrl to access the URL of the banner logo
    console.log("Banner Logo URL:", bannerLogoUrl);
  
    return (
      <Section
        backgroundColor={backgroundColor}
        backgroundImage={
          section_banner_type_advanced_details_background_image &&
          section_banner_type_advanced_details_background_image.url
        }
        className={style.main_banner}
        mode={mode}
        opacity={section_opacity}
        titleColor={titleColor}
        darkModeClass=""
        video={bannerVideoLink && bannerVideoLink}
        menuScrollId={menuScrollId}
        isTitle={section_banner_type_advanced_details_title}
      >
        {patternSrc && (
          <Pattern
            image={patternSrc}
            color={section_banner_type_advanced_details_pattern_color && formatRgba(section_banner_type_advanced_details_pattern_color)}
            opacity={section_opacity}
          />
        )}
        <div className="sec_wp">
          <Container className={style.container}>
            <Row>
              <Col lg={6} className="align-self-center">
                <div className={style.banner_content}>
                  <div className={style.banner_logo_img}>
                    <Image
                      className={style.banner_logo}
                      src={bannerLogoUrl} // Use the banner logo URL here
                      alt="BBB Rating"
                      width={293}
                      height={65}
                    />
                  </div>
                </div>
              </Col>
              {sectionImage && (
                <Col lg={6}>
                  <div className={style.banner_img}>
                    <Image
                      fill
                      className="img_cover"
                      src={sectionImage}
                      alt={alt ?? "Banner Image"}
                      priority
                    />
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </Section>
    );
  }
  