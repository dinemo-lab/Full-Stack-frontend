
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import '../styles/DropzoneComponent.css';
import { useCallback } from 'react';

const DropzoneComponent = ({ onDrop}) => {

   const onDropCallback = useCallback((acceptedFiles)=>{
    onDrop(acceptedFiles);
   },[onDrop])


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop :onDropCallback});

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag & drop a file here, or click to select one</p>
      )}
       <button className='Upload-btn'>Upload</button>
    </div>
  );
};

DropzoneComponent.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default DropzoneComponent;
