import Gallery from "./Gallery";

export default function LightboxModal({setIsModalOpen}) {
  return (
    <div className="lightbox-container">
      <div className="lightbox-modal">
        <Gallery setIsModalOpen={setIsModalOpen} controls={true}/>
      </div>
    </div>
  );
}
