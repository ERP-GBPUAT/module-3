import React from 'react'
import { Link } from 'react-router-dom'

const ResearchList = ({ handleOpenResearch,researches }) => {
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
          <th className='researchth'>Published Year</th>
        </tr>
        {researches?.map((research)=>{
          return (<tr className='researchtr' key={research?.id} onClick={() => handleOpenResearch(research?.id)}>
          <td className='researchtd' data-cell="ISBN No.">{research?.journalISBNNo}</td>
          <td className='researchtd' data-cell="Research Title">{research?.researchTitle}</td>
          <td className='researchtd' data-cell="Research Type">{research?.researchType}</td>
          <td className='researchtd' data-cell="Published Year">{research?.publishedYear}</td>
        </tr>)
        })}
      </table>
    </div>
  )
}

export default ResearchList