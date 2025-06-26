import { FC, useEffect, useState } from 'react';
import './InfoModal.css';
import { IoClose } from "react-icons/io5";
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: FC<InfoModalProps> = (props) => {
  const navigate: NavigateFunction = useNavigate(); 
  const [isClosing, setIsClosing] = useState(false);

  const handleGoToBlog = () => {
    props.onClose();
    navigate("/blog");
  }

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        props.onClose();
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isClosing, props, props.onClose]);

  return (
    <div className={`modal-backdrop ${isClosing ? 'fade-out' : ''}`}>
      <div className={`modal ${isClosing ? 'fade-out' : ''}`}>
        <button className="modal-close" onClick={handleClose}>
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