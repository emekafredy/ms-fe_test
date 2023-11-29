import { FC } from "react";
import { ModalType } from "@/types/modal.type";

export const Modal: FC<ModalType> = ({ children, showModal, setShowModal }) => {
  const onModalClick = (e: any) => {
    e.stopPropagation();
  };

  const onOverlayClick = (e: any) => {
    setShowModal(false);
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`overflow-x-hidden overflow-y-auto fixed inset-0 
          z-[1005] outline-none focus:outline-none rounded right-0 ${
            showModal ? "translate-x-0" : "translate-x-full"
          } duration-700`}
        onClick={onOverlayClick}
        onKeyDown={onOverlayClick}
        role="button"
        tabIndex={-1}
      >
        <div>
          <div
            className="bg-white h-[900px] my-2 mr-4 rounded-2xl py-4 px-4 sm:px-8
              w-[99%] xs:w-[400px] sm:w-[450px] m-auto sm:float-right text-center relative"
            onClick={onModalClick}
            onKeyDown={onOverlayClick}
            role="button"
            tabIndex={-2}
          >
            {children}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="opacity-20 fixed inset-0 z-[1000] bg-primary-100" />
      )}
    </>
  );
};
