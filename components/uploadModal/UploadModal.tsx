import useUploadModal from "@/hooks/useUploadModal";
import Modal from "../modals/Modal";
import FormWithoutReactHookForm from "./Input";

function UploadModal() {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <FormWithoutReactHookForm />
    </Modal>
  );
}

export default UploadModal;
