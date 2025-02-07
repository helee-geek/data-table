import React from "react";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// Function to calculate the total number of pages
const getNumberOfPages = (count, rowsPerPage) => Math.ceil(count / rowsPerPage);

const TablePaginationActions = ({ count, page, rowsPerPage, onChangePage }) => {
  const handleFirstPageButtonClick = () => {
    onChangePage(0);
  };

  const handleBackButtonClick = () => {
    if (page > 0) onChangePage(page - 1);
  };

  const handleNextButtonClick = () => {
    if (page < getNumberOfPages(count, rowsPerPage) - 1) {
      onChangePage(page + 1);
    }
  };

  const handleLastPageButtonClick = () => {
    onChangePage(getNumberOfPages(count, rowsPerPage) - 1);
  };

  return (
    <>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </>
  );
};

const CustomMaterialPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) => (
  <TablePagination
    component="nav"
    count={rowCount}
    rowsPerPage={rowsPerPage}
    page={currentPage - 1}
    // onPageChange={(newPage) => onChangePage(newPage)}
    // onChangePage={(e, newPage) => onChangePage(newPage + 1)}
    onChangePage={onChangePage}
    onRowsPerPageChange={({ target }) =>
      onChangeRowsPerPage(Number(target.value))
    }
    ActionsComponent={TablePaginationActions} // Custom pagination component
  />
);

export default CustomMaterialPagination;

// import React from "react";
// import TablePagination from '@mui/material/TablePagination';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

// function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
//   const handleFirstPageButtonClick = () => {
//     onChangePage(0); // Go to first page (index 0)
//   };

//   const handleBackButtonClick = () => {
//     onChangePage(page - 1); // Go to previous page
//   };

//   const handleNextButtonClick = () => {
//     onChangePage(page + 1); // Go to next page
//   };

//   const handleLastPageButtonClick = () => {
//     onChangePage(Math.max(0, Math.ceil(count / rowsPerPage) - 1)); // Go to last page
//   };

//   return (
//     <>
//       <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
//         <FirstPageIcon />
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         <KeyboardArrowLeft />
//       </IconButton>
//       <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
//         <KeyboardArrowRight />
//       </IconButton>
//       <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
//         <LastPageIcon />
//       </IconButton>
//     </>
//   );
// }

// const CustomMaterialPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage,
//   currentPage,
// }) => (
//   <TablePagination
//     component="nav"
//     count={rowCount}
//     rowsPerPage={rowsPerPage}
//     page={currentPage - 1} // Adjust for zero-based index
//     onChangePage={onChangePage}
//     onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
//     ActionsComponent={TablePaginationActions}
//   />
// );

// export default CustomMaterialPagination;

// import React from "react";
// import TablePagination from '@mui/material/TablePagination';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

// function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
//   const handleFirstPageButtonClick = () => {
//     onChangePage(1);
//   };

//   const handleBackButtonClick = () => {
//     onChangePage(page);
//   };

//   const handleNextButtonClick = () => {
//     onChangePage(page + 2);
//   };

//   const handleLastPageButtonClick = () => {
//     onChangePage(getNumberOfPages(count, rowsPerPage));
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         <FirstPageIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         <KeyboardArrowLeft />
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         <KeyboardArrowRight />
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         <LastPageIcon />
//       </IconButton>
//     </>
//   );
// }

// const CustomMaterialPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage,
//   currentPage,
// }) => (
//   <TablePagination
//     component="nav"
//     count={rowCount}
//     rowsPerPage={rowsPerPage}
//     page={currentPage - 1}
//     onChangePage={onChangePage}
//     onChangeRowsPerPage={({ target }) =>
//       onChangeRowsPerPage(Number(target.value))
//     }
//     ActionsComponent={TablePaginationActions}
//   />
// );

// export default CustomMaterialPagination;

// import React from 'react';
// import TablePagination from '@mui/material/TablePagination';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

// const getNumberOfPages = (count, rowsPerPage) => Math.ceil(count / rowsPerPage);

// const CustomPagination = ({ count, page, rowsPerPage, onChangePage }) => {
//   const handleFirstPageButtonClick = () => {
//     onChangePage(0);
//   };

//   const handleBackButtonClick = () => {
//     onChangePage(page);
// };

// const handleNextButtonClick = () => {
//     onChangePage(page + 2);
// };

// const handleLastPageButtonClick = () => {
//     onChangePage(getNumberOfPages(count, rowsPerPage));
// };
//   return (
//     <>
//       <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
//         <FirstPageIcon />
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         <KeyboardArrowLeft />
//       </IconButton>
//       <IconButton onClick={handleNextButtonClick} disabled={page >= getNumberOfPages(count, rowsPerPage) - 1} aria-label="next page">
//         <KeyboardArrowRight />
//       </IconButton>
//       <IconButton onClick={handleLastPageButtonClick} disabled={page >= getNumberOfPages(count, rowsPerPage) - 1} aria-label="last page">
//         <LastPageIcon />
//       </IconButton>
//     </>
//   );
// };

// const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
//   <TablePagination
//     component="nav"
//     count={rowCount}
//     rowsPerPage={rowsPerPage}
//     page={currentPage - 1} // react-data-table starts at 0 index for pages
//     onChangePage={onChangePage}
//     onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
//     ActionsComponent={CustomPagination}
//   />
// );

// export default CustomMaterialPagination;

// import React from "react";
// import TablePagination from "@mui/material/TablePagination";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";

// // Function to calculate number of pages
// const getNumberOfPages = (count, rowsPerPage) => Math.ceil(count / rowsPerPage);

// const CustomPagination = ({ count, page, rowsPerPage, onChangePage }) => {
//   const handleFirstPageButtonClick = () => {
//     onChangePage(0); // Go to first page (index 0)
//   };

//   const handleBackButtonClick = () => {
//     if (page > 0) {
//       onChangePage(page - 1); // Go to previous page
//     }
//   };

//   const handleNextButtonClick = () => {
//     if (page < getNumberOfPages(count, rowsPerPage) - 1) {
//       onChangePage(page + 1); // Go to next page (increment by 1)
//     }
//   };

//   const handleLastPageButtonClick = () => {
//     onChangePage(getNumberOfPages(count, rowsPerPage) - 1); // Go to last page
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         <FirstPageIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         <KeyboardArrowLeft />
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         <KeyboardArrowRight />
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         <LastPageIcon />
//       </IconButton>
//     </>
//   );
// };

// const CustomMaterialPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage,
//   currentPage,
// }) => (
//   <TablePagination
//     component="nav"
//     count={rowCount}
//     rowsPerPage={rowsPerPage}
//     page={currentPage - 1} // react-data-table starts at 0 index for pages
//     onChangePage={onChangePage}
//     onChangeRowsPerPage={({ target }) =>
//       onChangeRowsPerPage(Number(target.value))
//     }
//     ActionsComponent={CustomPagination}
//   />
// );

// export default CustomMaterialPagination;
