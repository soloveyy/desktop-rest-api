import { useState } from 'react';
import { nameSize, imgVariant, uid, imgAlt } from '../helpers'

const DesktopElements = ({data, setDirectoryId}) => {
  const [breadCrumbs, setBreadCrumbs] = useState([{id:0, name: 'root'}])

  const navigateBreakpoint = (dir) => {
    const idx = breadCrumbs.indexOf(dir)
    setBreadCrumbs(breadCrumbs.slice(0, idx+1))
    setDirectoryId(dir.id)
  }

  const changeDirectory = (dirId, dirName) => {
      let id = {id: dirId}
      let name = {name: dirName}
      const breadcrumb = Object.assign(id,name)
      setDirectoryId(dirId)
      setBreadCrumbs([...breadCrumbs, breadcrumb])
  }

  return (
   <div className='container'>
      <div className='breadcrumbs-wrapper'>
      {breadCrumbs.map((dir)=><div className='breadcrumbs' onClick={()=>navigateBreakpoint(dir)} key={dir.id}>{dir.name}</div>)}
      </div>
      <div className='card-wrapper'>
        {data.directories.map(dir=>(
          <div className='file-card' key={dir.id} onClick={()=>changeDirectory(dir.id, dir.name)}>
            <img src={imgVariant(dir.name)} alt={imgAlt(dir.name)}/>
            <div>{nameSize(dir.name)}</div> 
          </div>
        ))}
        {data.files.map(file=>
          <div className='file-card' key={uid()}>
            <img src={imgVariant(file.name)} alt={imgAlt(file.name)}/>
            <div>{nameSize(file.name)}</div> 
          </div>
        )}
      </div>
    </div>
  )
}

export default DesktopElements;
