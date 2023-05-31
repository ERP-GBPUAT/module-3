import React, { forwardRef } from "react";

const PrintComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ margin: "30px 50px" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Research</h2>
      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center", border: "1px solid black" }}>
          <th
            style={{
              textAlign: "center",
              backgroundColor: "transparent",
              border: "1px solid black",
              color: "black",
            }}
          >
            {props.username}
          </th>
        </tr>
        {props.reseaches?.map((row,i) => {
          return (
            <tr style={{ textAlign: "center", border: "1px solid black" }}>
              <td
                style={{
                  textAlign: "center",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                }}
              >
              {i}</td>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                <span style={{fontWeight:700}}>{props.username}</span>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
});

export default PrintComponent;
