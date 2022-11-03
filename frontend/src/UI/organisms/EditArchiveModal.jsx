import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { BiPencil } from "react-icons/bi";

// TODO: 기존 내용 가져와야 함
function EditArchiveModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editTitle, setEditTitle] = useState("");
  const [editMessage, setEditMessage] = useState("");

  return (
    <>
      {/* modal button */}
      <button
        className="bg-main3 border-2 border-basic3 rounded-full mx-1.5"
        onClick={onOpen}
      >
        <BiPencil size={18} className="text-white m-0.5" />
      </button>

      {/* create archive modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mb={4} textAlign="center">
            아카이브 수정
          </ModalHeader>
          <ModalCloseButton mt={1.5} />
          <ModalBody className="">
            <FormControl>
              <input
                type="text"
                placeholder="아카이브 이름"
                className="w-full focus:outline-none border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 focus:border-extra1"
              />
            </FormControl>

            <FormControl mt={4}>
              <textarea
                placeholder="아카이브 설명"
                name="message"
                id="message"
                rows="4"
                className="w-full focus:outline-none resize-none border-2 border-[#d9d9d9] rounded-lg p-2 placeholder-base1 focus:border-extra1"
              ></textarea>
            </FormControl>
          </ModalBody>

          <ModalFooter pt={0}>
            <button
              onClick={onClose}
              className="font-bold bg-[#d9d9d9] px-6 py-2 rounded-xl text-sm mx-3"
            >
              취소하기
            </button>
            <button
              onClick={() => {
                // handleArchiveSubmit();
                onClose();
              }}
              className="font-bold bg-extra1 px-6 py-2 rounded-xl text-sm"
            >
              생성하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditArchiveModal;