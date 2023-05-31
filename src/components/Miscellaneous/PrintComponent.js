import React, { forwardRef } from "react";

const PrintComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ margin: "30px 50px" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Research</h2>
      <table style={{ width: "100%" }}>
        {/* <tr style={{ textAlign: "center", border: "1px solid black" }}> */}
        {/*   <th */}
        {/*     style={{ */}
        {/*           width: "15px", */}
        {/*       textAlign: "center", */}
        {/*       backgroundColor: "transparent", */}
        {/*       border: "1px solid black", */}
        {/*       color: "black", */}
        {/*     }} */}
        {/*   > */}
        {/*     {props.username} */}
        {/*   </th> */}
        {/* </tr> */}
        {props.researches?.map((row, i) => {
          console.log(row);
          return (
            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  // textAlign: "center",
                  width: "15px",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                {i + 1}.
              </td>
              <th
                style={{
                  // textAlign: "center",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                <span style={{ fontWeight: 700 }}>{props.username}, </span>
                <span style={{ fontWeight: 400 }}>{row.authorsName}</span>
                <span style={{ fontWeight: 700 }}>
                  <i> "{row.researchTitle}" </i>
                </span>
                <span style={{ fontWeight: 400 }}>
                  {row.journalName} Vol. {row.volNo}, pp. {row.pageNo} (
                  {row.publishedYear})
                </span>
                <span style={{ fontWeight: 700 }}> [e-ISSN:{row.journalISBNNo}]</span>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
});

export default PrintComponent;
