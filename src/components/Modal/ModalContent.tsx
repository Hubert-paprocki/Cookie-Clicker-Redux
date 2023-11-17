import { useAppSelector } from "../../app/hooks";
import Button from "../Button/Button";

interface ModalContentProps {
  onClick: (num: number) => void;
}

function ModalContent({ onClick }: ModalContentProps) {
  const modal = useAppSelector((state) => state.modal.modal);
  const modalLanguage = useAppSelector(
    (state) => state.language.selectedLanguage.modals
  );

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="w-full min-[1024px]:w-[1024px] bg-stone-800 rounded-none overflow-hidden min-[1024px]:rounded-lg max-[500px]:min-h-screen">
        <p className="p-4">
          {modal === 1
            ? modalLanguage.welcomeModal
            : modalLanguage.instructionModal[modal - 2]}
        </p>
        <div className="flex justify-between p-4">
          <Button onClick={() => onClick(0)} primary>
            {modalLanguage.closeBtn}
          </Button>
          <Button onClick={() => onClick(modal + 1)} primary>
            {modal === 1
              ? modalLanguage.insctructionsBtn
              : modalLanguage.nextBtn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
