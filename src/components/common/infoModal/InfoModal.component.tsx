import { FC } from 'react';
import './InfoModal.css';
import { IoClose } from "react-icons/io5";
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: FC<InfoModalProps> = (props) => {
  const navigate: NavigateFunction = useNavigate(); 

  const handleGoToBlog = () => {
    props.onClose();
    navigate("/blog");
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={props.onClose}>
          <IoClose />
        </button>
        <div className="modal-content">
          <p className='modal-content-new'>Nowość!</p>
          <h2>Blog Salonu Unikatów</h2>
          <p>Odkrywaj historie, porady i ciekawostki związane z porcelaną i antykami.</p>
          <button className='modal-button' onClick = {handleGoToBlog}>
            Przejdź do bloga
          </button>
        </div>
      </div>
    </div>
  );
}