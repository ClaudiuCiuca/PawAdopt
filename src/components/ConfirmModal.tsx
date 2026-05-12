import "../styles/modal.css";

type ConfirmModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <p>{message}</p>

        <div className="modalButtons">
          <button onClick={onConfirm}>
            Yes
          </button>

          <button onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;