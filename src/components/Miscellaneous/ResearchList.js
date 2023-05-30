import React from 'react'
import { Link } from 'react-router-dom'

const ResearchList = ({ handleOpenResearch }) => {
  return (
    <div className='card bg-secondary shadow'>
      <div className="card-header bg-white border-0 shadow-md">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0 text-oliveGreen">Research</h3>
          </div>
          <div className="col-4 text-right">
            <Link to={"/addResearch"} className="btn btn-sm btn-primary">
              Add new research
            </Link>
            <Link className="btn btn-sm btn-primary">
              Print
            </Link>
          </div>
        </div>
      </div>
      <table className='researchTable'>
        <tr className='researchtr'>
          <th className='researchth'>ISBN No.</th>
          <th className='researchth'>Research Title</th>
          <th className='researchth'>Research Type</th>
          <th className='researchth'>Journal Name</th>
        </tr>

        <tr className='researchtr' onClick={() => handleOpenResearch(1)}>
          <td className='researchtd' data-cell="ISBN No.">mrekk</td>
          <td className='researchtd' data-cell="Research Title">24,519</td>
          <td className='researchtd' data-cell="Research Type">98.10%</td>
          <td className='researchtd' data-cell="Journal Name">153,569</td>
        </tr>

        <tr className='researchtr'>
          <td className='researchtd' data-cell="ISBN No.">lifeline</td>
          <td className='researchtd' data-cell="Research Title">21,603</td>
          <td className='researchtd' data-cell="Research Type">98.21%</td>
          <td className='researchtd' data-cell="Journal Name">216,329</td>
        </tr>

        <tr className='researchtr'>
          <td className='researchtd' data-cell="ISBN No.">Rimuru</td>
          <td className='researchtd' data-cell="Research Title">21,258</td>
          <td className='researchtd' data-cell="Research Type">97.94%</td>
          <td className='researchtd' data-cell="Journal Name">276,903</td>
        </tr>
      </table>
    </div>
  )
}

export default ResearchList