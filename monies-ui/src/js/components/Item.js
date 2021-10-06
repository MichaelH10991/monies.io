import React from "react"

const Item = ({ posts, loading }) => {
  console.log(loading)
  if (loading) return <div>Loading...</div>
  return (
    <div className={"item-list"}>
      <ul style={list}>
        {posts.map((post) => (
          <li key={post.id} style={listEl}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

const list = {
  margin: "auto",
  padding: "inherit",
  listStyle: "none",
}

const listEl = {
  textAlign: "left",
  padding: "10px",
  margin: "auto",
  border: "1px solid grey",
}

export default Item
