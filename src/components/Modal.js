import { Button } from "./StyledButton";
import { StyledModal } from "./StyledModal";

export default function Modal({closeModal}) {
  return (
    <StyledModal>
      <div>
          <h1>Benvingut!</h1>
          <p>Podràs llegir la història i visualitzar les imatges navegant amb els botons col·locats a dalt.</p>
          <Button bgColor='#cfa1c9' onClick={closeModal}>Començar</Button>
      </div>
    </StyledModal>
  )
}
