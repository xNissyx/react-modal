import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const useModal = () => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    const Modal = ({ children }) => {
        const contentRef = useRef(null);

        useEffect(() => {
          if (contentRef.current === null) return;
        
          if (show) {
            disableBodyScroll(contentRef.current, {
              reserveScrollBarGap: true,
            });
          } else {
            enableBodyScroll(contentRef.current);
          }
        
          return () => {
            clearAllBodyScrollLocks();
          };
        }, [show, contentRef]);
        if (show === false) return null;
        return createPortal(
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'gray',
                  opacity: '0.5',
                }}
              ></div>
              <div style={{ position: 'relative' }} ref={contentRef}>{children}</div>
            </div>,
            document.getElementById('root')
        );
    };

    return { Modal, openModal, closeModal, show };
};

export default useModal;