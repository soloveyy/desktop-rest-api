import jpgImg from '../img/image-icon.png'
import folderImg from '../img/folder-icon.png'
import fileImg from '../img/file-icon.png'

export const nameSize = (name) => name.length > 10 ? `${name.slice(0,8)}...` : name

export const uid = () => Math.random().toString(36).slice(2,9)

export const imgVariant = (name) => {
  if (name.slice(-3) === 'jpg') {
    return jpgImg
  }
  else if (name.slice(0,3) === 'dir') {
    return folderImg
  } 
  return fileImg
}
