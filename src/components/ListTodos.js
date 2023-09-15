import React, { Fragment, useEffect, useState } from "react";

function ListTodos() {
  return (
    <Fragment>
    <table class="table mt-5 text-center">
    <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
    </table>
    </Fragment>
  )
}

export default ListTodos
