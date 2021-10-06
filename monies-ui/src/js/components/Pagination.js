import React from "react"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  //   const pageNumbers = new Array(Math.ceil(totalPosts / postsPerPage)).fill().map((pages) => pages)

  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="pagination">
      <nav
        style={{
          display: "flex",
          listStyle: "none",
          padding: "0px",
          justifyContent: "center",
          flexFlow: "row wrap",
        }}
      >
        {pageNumbers.map((number) => (
          <li key={number} style={{}}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </nav>
    </div>
  )
}

export default Pagination
